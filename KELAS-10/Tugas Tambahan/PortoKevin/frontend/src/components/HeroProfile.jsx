import { Mail, MapPin } from 'lucide-react';

export default function HeroProfile({ profile, dashboardMode }) {
    return (
        <section className="hero-section hero-wide" id="home">
            <div className="hero-content">
                <h1>{profile.name}</h1>
                <p className="hero-kicker">
                    Student yang lagi belajar full stack, AI things, dan tetap fokus bikin UI/UX yang clean.
                </p>
                <div className="meta-row" aria-label="Informasi singkat">
                    {dashboardMode && <span>Dashboard</span>}
                    <span><MapPin size={18} aria-hidden="true" /> {profile.location}</span>
                    <span><Mail size={18} aria-hidden="true" /> {profile.email}</span>
                </div>
            </div>
        </section>
    );
}
