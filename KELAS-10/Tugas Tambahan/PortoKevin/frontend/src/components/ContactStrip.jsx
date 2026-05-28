import { Mail, Send } from 'lucide-react';

export default function ContactStrip({ profile }) {
    return (
        <section className="contact-strip" aria-label="Kontak portfolio">
            <div>
                <p className="eyebrow">kontak</p>
                <h2>Kalau butuh profil singkat, ini tempatnya.</h2>
            </div>
            <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email Kevin
            </a>
            <span className="send-mark" aria-hidden="true">
                <Send size={24} />
            </span>
        </section>
    );
}
