import { GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function EducationTimeline({ education }) {
    return (
        <section className="content-band" id="school" aria-labelledby="education-heading">
            <SectionHeader eyebrow="riwayat sekolah" title="Perjalanan belajar" titleId="education-heading" />
            <div className="timeline">
                {education.map((item) => (
                    <article className="timeline-item" key={`${item.period}-${item.school}`}>
                        <div className="icon-box"><GraduationCap size={22} aria-hidden="true" /></div>
                        <div>
                            <p className="item-period">{item.period}</p>
                            <h3>{item.school}</h3>
                            <p>{item.detail}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
