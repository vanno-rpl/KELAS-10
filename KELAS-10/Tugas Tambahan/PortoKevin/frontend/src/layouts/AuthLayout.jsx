export default function AuthLayout({ title, subtitle, children, onNavigate }) {
    return (
        <main className="auth-shell">
            <section className="auth-panel" aria-labelledby="auth-title">
                <button className="brand-link text-button" type="button" onClick={() => onNavigate('/')}>
                    Kevin Profile
                </button>
                <div className="auth-copy">
                    <p className="eyebrow">Login Auth</p>
                    <h1 id="auth-title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                {children}
            </section>
        </main>
    );
}
