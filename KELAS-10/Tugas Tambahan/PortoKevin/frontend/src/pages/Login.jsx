import { useState } from 'react';
import FormField from '../components/FormField';
import AuthLayout from '../layouts/AuthLayout';

export default function Login({ onLogin, onNavigate }) {
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    function updateData(name, value) {
        setData((current) => ({ ...current, [name]: value }));
    }

    async function submit(event) {
        event.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await onLogin(data);
        } catch (error) {
            setErrors(error.errors || { email: error.message });
        } finally {
            setProcessing(false);
        }
    }

    return (
        <AuthLayout
            title="Masuk dulu"
            subtitle="Login untuk membuka dashboard portfolio. Portfolio publik tetap bisa dilihat tanpa akun."
            onNavigate={onNavigate}
        >
            <form className="auth-form" onSubmit={submit}>
                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={updateData}
                    autoComplete="email"
                    error={errors.email}
                />

                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={updateData}
                    autoComplete="current-password"
                    error={errors.password}
                />

                <label className="check-row">
                    <input
                        type="checkbox"
                        checked={data.remember}
                        onChange={(event) => updateData('remember', event.target.checked)}
                    />
                    Ingat saya
                </label>

                <button className="primary-button" type="submit" disabled={processing}>
                    {processing ? 'Masuk...' : 'Login'}
                </button>
            </form>

            <p className="auth-switch">
                Belum punya akun? <button className="inline-link" type="button" onClick={() => onNavigate('/register')}>Register</button>
            </p>
        </AuthLayout>
    );
}
