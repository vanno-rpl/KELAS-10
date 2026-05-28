import AdminEditor from '../components/AdminEditor';
import ContactStrip from '../components/ContactStrip';
import EducationTimeline from '../components/EducationTimeline';
import HeroProfile from '../components/HeroProfile';
import HobbyGrid from '../components/HobbyGrid';
import ProfileNav from '../components/ProfileNav';
import SectionHeader from '../components/SectionHeader';
import SkillShowcase from '../components/SkillShowcase';
import { portfolioFallback } from '../data/profile';

export default function Portfolio({
    profile = portfolioFallback.profile,
    education = portfolioFallback.education,
    skills = portfolioFallback.skills,
    hobbies = portfolioFallback.hobbies,
    dashboardMode = false,
    user = null,
    onLogout,
    onNavigate,
    onSavePortfolio,
    onResetPortfolio,
}) {
    const sectionLabels = ['riwayat sekolah', 'skill', 'hobi'];

    return (
        <main className="site-shell">
            <ProfileNav user={user} onLogout={onLogout} onNavigate={onNavigate} />
            {user && (
                <AdminEditor
                    portfolio={{ profile, education, skills, hobbies }}
                    onSave={onSavePortfolio}
                    onReset={onResetPortfolio}
                />
            )}
            <HeroProfile profile={profile} dashboardMode={dashboardMode} />

            <section className="content-band intro-band" aria-labelledby="about-heading">
                <SectionHeader eyebrow="tentang" title="Clean, santai, dan cukup personal." titleId="about-heading" />
                <p className="lead-text">
                    Ini bukan CV yang kaku. Halaman ini dibuat buat nunjukin gambaran diri secara rapi:
                    {` ${sectionLabels[0]}, ${sectionLabels[1]} yang lagi diasah, dan ${sectionLabels[2]} yang bikin proses belajar tetap enak.`}
                </p>
            </section>

            <EducationTimeline education={education} />
            <SkillShowcase skills={skills} />
            <HobbyGrid hobbies={hobbies} />
            <ContactStrip profile={profile} />
        </main>
    );
}
