import { RotateCcw, Save, Settings2 } from 'lucide-react';
import { useState } from 'react';

function toLines(items, mapper) {
    return items.map(mapper).join('\n');
}

function parseLines(value, mapper) {
    return value
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map(mapper);
}

export default function AdminEditor({ portfolio, onSave, onReset }) {
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState({
        name: portfolio.profile.name,
        location: portfolio.profile.location,
        email: portfolio.profile.email,
        education: toLines(portfolio.education, (item) => `${item.period} | ${item.school} | ${item.detail}`),
        skills: portfolio.skills.join(', '),
        hobbies: toLines(portfolio.hobbies, (item) => `${item.name} | ${item.detail}`),
    });

    function updateDraft(name, value) {
        setDraft((current) => ({ ...current, [name]: value }));
    }

    function saveChanges(event) {
        event.preventDefault();

        const nextPortfolio = {
            profile: {
                name: draft.name.trim() || 'Kevin',
                location: draft.location.trim() || 'Indonesia',
                email: draft.email.trim() || 'kevin@example.com',
            },
            education: parseLines(draft.education, (line) => {
                const [period = '', school = '', detail = ''] = line.split('|').map((part) => part.trim());
                return { period, school, detail };
            }),
            skills: draft.skills
                .split(',')
                .map((skill) => skill.trim())
                .filter(Boolean),
            hobbies: parseLines(draft.hobbies, (line) => {
                const [name = '', detail = ''] = line.split('|').map((part) => part.trim());
                return { name, detail };
            }),
        };

        localStorage.setItem('portfolioOverrides', JSON.stringify(nextPortfolio));
        onSave(nextPortfolio);
        setOpen(false);
    }

    function resetContent() {
        localStorage.removeItem('portfolioOverrides');
        onReset();
        setOpen(false);
    }

    return (
        <section className="admin-editor liquid-glass" aria-label="Admin editor">
            <button className="ghost-button" type="button" onClick={() => setOpen((current) => !current)}>
                <Settings2 size={18} aria-hidden="true" />
                Edit content
            </button>

            {open && (
                <form className="admin-form" onSubmit={saveChanges}>
                    <div className="admin-grid">
                        <label>
                            Nama
                            <input value={draft.name} onChange={(event) => updateDraft('name', event.target.value)} />
                        </label>
                        <label>
                            Lokasi
                            <input value={draft.location} onChange={(event) => updateDraft('location', event.target.value)} />
                        </label>
                        <label>
                            Email
                            <input type="email" value={draft.email} onChange={(event) => updateDraft('email', event.target.value)} />
                        </label>
                    </div>

                    <label>
                        Riwayat sekolah
                        <textarea value={draft.education} onChange={(event) => updateDraft('education', event.target.value)} />
                    </label>

                    <label>
                        Skill
                        <input value={draft.skills} onChange={(event) => updateDraft('skills', event.target.value)} />
                    </label>

                    <label>
                        Hobi
                        <textarea value={draft.hobbies} onChange={(event) => updateDraft('hobbies', event.target.value)} />
                    </label>

                    <div className="admin-actions">
                        <button className="primary-button" type="submit">
                            <Save size={18} aria-hidden="true" />
                            Simpan
                        </button>
                        <button className="ghost-button" type="button" onClick={resetContent}>
                            <RotateCcw size={18} aria-hidden="true" />
                            Reset
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
}
