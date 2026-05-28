import { Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function SkillShowcase({ skills }) {
    return (
        <section className="content-band split-band" id="skills" aria-labelledby="skills-heading">
            <SectionHeader eyebrow="skill" title="Yang lagi diasah" titleId="skills-heading" />
            <div className="skill-panel">
                <div className="skill-grid">
                    {skills.map((skill) => (
                        <span className="skill-pill" key={skill}>
                            <Sparkles size={16} aria-hidden="true" />
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="skill-note">
                    Fokusnya bukan terlihat paling jago, tapi nunjukin progress yang konsisten dan siap belajar lagi.
                </p>
            </div>
        </section>
    );
}
