# PRD Portfolio Profile Kevin

## Ringkasan
Portfolio profile personal untuk tugas sekolah. Website dibuat dengan dua folder terpisah: Laravel sebagai backend API di `backend/` dan React.js sebagai frontend Vite di `frontend/`. Fitur Login Auth tetap tersedia agar ada akses akun yang rapi. Gaya visual harus clean, santai, tidak terlalu formal, tidak compact, dan memakai burgundy dark theme.

## Tujuan
- Menampilkan profil singkat yang terasa personal dan mudah dibaca.
- Menampilkan riwayat sekolah, skill, dan hobi sebagai konten utama.
- Menyediakan halaman login dan register di React yang terhubung ke Laravel API auth.
- Menjaga layout lapang, responsif, dan nyaman dilihat di desktop maupun mobile.

## Target Pengguna
- Guru atau penilai tugas yang ingin melihat profil dengan cepat.
- Teman atau rekan sekolah yang membuka portfolio dari link.
- Pemilik portfolio yang ingin login ke halaman dashboard/profil.

## Fitur Utama
### Portfolio Profile
- Hero profile dengan nama, headline, dan ringkasan santai.
- Section riwayat sekolah dengan timeline sederhana.
- Section skill dengan badge/kartu kecil.
- Section hobi dengan deskripsi singkat.
- Section kontak singkat.

### Login Auth
- User dapat register akun.
- User dapat login menggunakan email dan password.
- User dapat logout.
- Endpoint user/logout protected untuk user yang sudah login.
- User guest tetap bisa melihat portfolio publik.

## Desain UI
- Tema: burgundy dark.
- Warna utama: deep burgundy, near-black, rose, soft gold, dan muted teal sebagai aksen kecil.
- Layout tidak compact: spacing besar, section jelas, line-height nyaman.
- Komponen menggunakan radius kecil sampai sedang, maksimal 8px untuk kartu.
- Tombol dan input minimal 44px tinggi agar nyaman di klik.
- Fokus keyboard terlihat jelas.

## Tech Stack
- Backend: Laravel.
- Frontend: React.js dengan Vite.
- API: Laravel JSON API.
- Bundler: Vite.
- Auth: Laravel session auth dengan Sanctum stateful API.
- Styling: CSS custom properties.

## Acceptance Criteria
- Frontend portfolio publik tampil di `/`.
- Frontend login tampil di `/login`.
- Frontend register tampil di `/register`.
- Backend profile tersedia di `/api/profile`.
- Backend user/logout memakai protected route `auth:sanctum`.
- Portfolio memuat riwayat sekolah, skill, dan hobi.
- Tema burgundy dark konsisten.
- Static contract test `tests/static-contract.sh` lulus.
- Laravel feature tests tersedia untuk portfolio dan auth routes.
