<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    public function show(): JsonResponse
    {
        return response()->json($this->profilePayload());
    }

    private function profilePayload(): array
    {
        return [
            'profile' => [
                'name' => 'Kevin',
                'location' => 'Indonesia',
                'email' => 'kevin@example.com',
            ],
            'education' => [
                [
                    'period' => 'SD',
                    'school' => 'SD Larangan',
                    'detail' => 'Masa awal belajar dasar-dasar sekolah dan mulai membangun rasa ingin tahu.',
                ],
                [
                    'period' => 'SMP',
                    'school' => 'SMPN 1 Candi',
                    'detail' => 'Mulai aktif belajar teknologi, desain sederhana, dan kerja kelompok.',
                ],
                [
                    'period' => 'SMK',
                    'school' => 'SMKN 2 Buduran',
                    'detail' => 'Fokus mengembangkan dasar web development, problem solving, dan portfolio pribadi.',
                ],
            ],
            'skills' => [
                'HTML',
                'CSS',
                'JavaScript',
                'React.js',
                'Laravel',
                'UI Layout',
            ],
            'hobbies' => [
                [
                    'name' => 'Olahraga',
                    'detail' => 'Menjaga badan tetap aktif dan bikin pikiran lebih fresh setelah belajar.',
                ],
                [
                    'name' => 'Main game',
                    'detail' => 'Tempat santai, latihan strategi, dan reset sebentar dari tugas sekolah.',
                ],
                [
                    'name' => 'Membaca buku',
                    'detail' => 'Cari ide baru, nambah wawasan, dan melatih fokus pelan-pelan.',
                ],
            ],
        ];
    }
}
