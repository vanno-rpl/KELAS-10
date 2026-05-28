import { useEffect, useMemo, useState } from 'react';
import { api } from './services/api';
import { portfolioFallback } from './data/profile';
import LoadingScreen from './components/LoadingScreen';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';

const authPaths = ['/login', '/register'];
const STORAGE_KEY = 'portfolioOverrides';

export default function App() {
    const [path, setPath] = useState(window.location.pathname);
    const [portfolio, setPortfolio] = useState(portfolioFallback);
    const [user, setUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    const pageTitle = useMemo(() => {
        if (path === '/login') return 'Login - Kevin Portfolio';
        if (path === '/register') return 'Register - Kevin Portfolio';
        return user ? 'Dashboard Portfolio - Kevin Portfolio' : 'Portfolio - Kevin Portfolio';
    }, [path, user]);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);

    useEffect(() => {
        const handlePopState = () => setPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => {
        const minimumLoading = new Promise((resolve) => {
            window.setTimeout(resolve, 900);
        });

        const loadProfile = api.profile()
            .then((payload) => {
                const saved = localStorage.getItem(STORAGE_KEY);
                setPortfolio(saved ? JSON.parse(saved) : payload);
            })
            .catch(() => setPortfolio(portfolioFallback));

        const loadUser = api.user()
            .then((payload) => setUser(payload.user))
            .catch(() => setUser(null));

        Promise.allSettled([loadProfile, loadUser, minimumLoading])
            .then(() => setInitialLoading(false));
    }, []);

    function navigate(nextPath) {
        window.history.pushState({}, '', nextPath);
        setPath(nextPath);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function handleLogin(form) {
        const payload = await api.login(form);
        setUser(payload.user);
        navigate('/');
    }

    async function handleRegister(form) {
        const payload = await api.register(form);
        setUser(payload.user);
        navigate('/');
    }

    async function handleLogout() {
        await api.logout().catch(() => null);
        setUser(null);
        navigate('/');
    }

    function handleSavePortfolio(nextPortfolio) {
        setPortfolio(nextPortfolio);
    }

    function handleResetPortfolio() {
        api.profile()
            .then(setPortfolio)
            .catch(() => setPortfolio(portfolioFallback));
    }

    if (initialLoading) {
        return <LoadingScreen />;
    }

    if (path === '/login') {
        return <Login onLogin={handleLogin} onNavigate={navigate} />;
    }

    if (path === '/register') {
        return <Register onRegister={handleRegister} onNavigate={navigate} />;
    }

    if (!authPaths.includes(path) && path !== '/') {
        window.history.replaceState({}, '', '/');
    }

    return (
        <Portfolio
            {...portfolio}
            user={user}
            dashboardMode={Boolean(user)}
            onLogout={handleLogout}
            onNavigate={navigate}
            onSavePortfolio={handleSavePortfolio}
            onResetPortfolio={handleResetPortfolio}
        />
    );
}
