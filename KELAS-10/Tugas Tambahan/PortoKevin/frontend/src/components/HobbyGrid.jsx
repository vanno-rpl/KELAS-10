import { BookOpen, Gamepad2, Palette } from 'lucide-react';
import SectionHeader from './SectionHeader';

const hobbyIcons = [BookOpen, Palette, Gamepad2];

export default function HobbyGrid({ hobbies }) {
    return (
        <section className="content-band" id="hobbies" aria-labelledby="hobbies-heading">
            <SectionHeader eyebrow="hobi" title="Hal yang bikin tetap hidup" titleId="hobbies-heading" />
            <div className="hobby-grid">
                {hobbies.map((hobby, index) => {
                    const Icon = hobbyIcons[index] || BookOpen;

                    return (
                        <article className="hobby-card" key={hobby.name}>
                            <div className="icon-box">
                                <Icon size={22} aria-hidden="true" />
                            </div>
                            <h3>{hobby.name}</h3>
                            <p>{hobby.detail}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
