<?php

namespace Database\Seeders;

use App\Models\Experience;
use App\Models\Hobby;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate([
            'email' => 'admin@vano.test',
        ], [
            'name' => 'Vano Admin',
            'password' => Hash::make('password'),
        ]);

        Profile::updateOrCreate(['id' => 1], [
            'name' => 'Vano',
            'headline' => 'Web Developer & UI Builder',
            'bio' => 'Developer yang fokus membangun website portfolio, dashboard, dan aplikasi web yang rapi, cepat, dan mudah digunakan.',
            'email' => 'hello@vano.test',
            'phone' => '+62 812 0000 0000',
            'location' => 'Jakarta, Indonesia',
            'avatar_url' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
            'social_links' => [
                'github' => 'https://github.com/vano',
                'linkedin' => 'https://linkedin.com/in/vano',
                'instagram' => 'https://instagram.com/vano',
            ],
        ]);

        $skills = [
            ['name' => 'ReactJS', 'category' => 'Frontend', 'level' => 'Advanced', 'sort_order' => 1],
            ['name' => 'Laravel', 'category' => 'Backend', 'level' => 'Advanced', 'sort_order' => 2],
            ['name' => 'REST API', 'category' => 'Backend', 'level' => 'Advanced', 'sort_order' => 3],
            ['name' => 'UI Implementation', 'category' => 'Frontend', 'level' => 'Intermediate', 'sort_order' => 4],
            ['name' => 'Database Design', 'category' => 'Backend', 'level' => 'Intermediate', 'sort_order' => 5],
        ];

        foreach ($skills as $skill) {
            Skill::updateOrCreate(['name' => $skill['name']], $skill);
        }

        $hobbies = [
            [
                'name' => 'Ngoding',
                'description' => 'Mencoba ide web baru, membangun komponen UI, dan belajar pola backend yang lebih rapi.',
                'icon' => 'Code',
                'sort_order' => 1,
            ],
            [
                'name' => 'Desain UI',
                'description' => 'Merapikan layout, warna, dan interaksi agar pengalaman website terasa lebih nyaman.',
                'icon' => 'Palette',
                'sort_order' => 2,
            ],
            [
                'name' => 'Game',
                'description' => 'Bermain game untuk refreshing sekaligus melatih strategi dan problem solving.',
                'icon' => 'Gamepad2',
                'sort_order' => 3,
            ],
        ];

        foreach ($hobbies as $hobby) {
            Hobby::updateOrCreate(['name' => $hobby['name']], $hobby);
        }

        Project::updateOrCreate(['slug' => 'portfolio-react-laravel'], [
            'title' => 'Portfolio React + Laravel',
            'summary' => 'Portfolio personal Vano dengan admin CMS dan auth Laravel.',
            'description' => 'Website portfolio full-stack untuk Vano yang memisahkan frontend React Vite dan backend Laravel API. Admin dapat mengelola project, skill, experience, profil, dan pesan kontak.',
            'tech_stack' => ['ReactJS', 'Vite', 'Laravel', 'Sanctum', 'SQLite'],
            'demo_url' => 'https://example.com',
            'repository_url' => 'https://github.com/example/portfolio',
            'image_url' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
            'is_featured' => true,
            'sort_order' => 1,
        ]);

        Project::updateOrCreate(['slug' => 'booking-dashboard'], [
            'title' => 'Booking Dashboard',
            'summary' => 'Dashboard reservasi dengan laporan dan manajemen jadwal.',
            'description' => 'Aplikasi dashboard untuk memantau booking, status pembayaran, jadwal, dan laporan operasional.',
            'tech_stack' => ['ReactJS', 'Laravel', 'MySQL'],
            'demo_url' => null,
            'repository_url' => null,
            'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
            'is_featured' => false,
            'sort_order' => 2,
        ]);

        Experience::updateOrCreate([
            'title' => 'Full Stack Developer',
            'organization' => 'Freelance',
        ], [
            'location' => 'Remote',
            'start_date' => '2024',
            'end_date' => 'Present',
            'description' => 'Membangun website, dashboard, dan API untuk kebutuhan bisnis kecil sampai menengah.',
            'type' => 'work',
            'sort_order' => 1,
        ]);
    }
}
