import { LogIn, LogOut, UserPlus } from 'lucide-react';

export default function ProfileNav({ user, onLogout, onNavigate }) {
    return (
        <nav className="top-nav" aria-label="Navigasi utama">
            <a className="brand-mark" href="#home">Kevin</a>
            <div className="nav-actions">
                <a className="nav-link" href="#school">Sekolah</a>
                <a className="nav-link" href="#skills">Skill</a>
                <a className="nav-link" href="#hobbies">Hobi</a>
                {user ? (
                    <button className="ghost-button" type="button" onClick={onLogout}>
                        <LogOut size={18} aria-hidden="true" />
                        Logout
                    </button>
                ) : (
                    <>
                        <button className="ghost-button" type="button" onClick={() => onNavigate('/login')}>
                            <LogIn size={18} aria-hidden="true" />
                            Login
                        </button>
                        <button className="primary-button small" type="button" onClick={() => onNavigate('/register')}>
                            <UserPlus size={18} aria-hidden="true" />
                            Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
