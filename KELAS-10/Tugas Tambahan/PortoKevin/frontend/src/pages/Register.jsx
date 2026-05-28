import { useState } from 'react';
import FormField from '../components/FormField';
import AuthLayout from '../layouts/AuthLayout';

export default function Register({ onRegister, onNavigate }) {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
            await onRegister(data);
        } catch (error) {
            setErrors(error.errors || { email: error.message });
        } finally {
            setProcessing(false);
        }
    }

    return (
        <AuthLayout
            title="Bikin akun"
            subtitle="Akun dipakai untuk akses dashboard portfolio dengan session auth Laravel."
            onNavigate={onNavigate}
        >
            <form className="auth-form" onSubmit={submit}>
                <FormField
                    label="Nama"
                    name="name"
                    value={data.name}
                    onChange={updateData}
                    autoComplete="name"
                    error={errors.name}
                />

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
                    autoComplete="new-password"
                    error={errors.password}
                />

                <FormField
                    label="Konfirmasi Password"
                    name="password_confirmation"
                    type="password"
                    value={data.password_confirmation}
                    onChange={updateData}
                    autoComplete="new-password"
                    error={errors.password_confirmation}
                />

                <button className="primary-button" type="submit" disabled={processing}>
                    {processing ? 'Membuat akun...' : 'Register'}
                </button>
            </form>

            <p className="auth-switch">
                Sudah punya akun? <button className="inline-link" type="button" onClick={() => onNavigate('/login')}>Login</button>
            </p>
        </AuthLayout>
    );
}
