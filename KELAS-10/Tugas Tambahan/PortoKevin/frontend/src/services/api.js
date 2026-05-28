const browserApiBaseUrl = typeof window === 'undefined'
    ? 'http://127.0.0.1:8000/api'
    : `${window.location.protocol}//${window.location.hostname}:8000/api`;

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || browserApiBaseUrl;
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, '');

function readCookie(name) {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1];
}

async function ensureCsrfCookie() {
    await fetch(`${API_ORIGIN}/sanctum/csrf-cookie`, {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
    });
}

async function request(path, options = {}) {
    const method = options.method || 'GET';
    const unsafeMethod = !['GET', 'HEAD', 'OPTIONS'].includes(method.toUpperCase());

    if (unsafeMethod) {
        await ensureCsrfCookie();
    }

    const xsrfToken = readCookie('XSRF-TOKEN');
    const response = await fetch(`${API_BASE_URL}${path}`, {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(xsrfToken ? { 'X-XSRF-TOKEN': decodeURIComponent(xsrfToken) } : {}),
            ...(options.headers || {}),
        },
        ...options,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error = new Error(payload.message || 'Request gagal.');
        error.errors = payload.errors || {};
        throw error;
    }

    return payload;
}

export const api = {
    profile: () => request('/profile'),
    user: () => request('/user'),
    login: (data) => request('/login', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    register: (data) => request('/register', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    logout: () => request('/logout', {
        method: 'POST',
    }),
};
