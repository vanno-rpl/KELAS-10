# Web Portfolio Vano

Full-stack portfolio MVP with React Vite frontend and Laravel API backend.

## Stack

- Frontend: React, Vite, React Router, Axios, Lucide icons
- Backend: Laravel 9, Sanctum token auth, SQLite
- Palette: dark navy gradient `#020817` to `#0B1F3A`, panel navy `#081628`, text `#EDF6FF`, muted slate `#9FB2C8`, aqua `#38BDF8`, cyan `#22D3EE`

## Local Run

Backend:

```bash
cd backend
composer install
php artisan migrate:fresh --seed
php artisan serve --host=127.0.0.1 --port=8000
```

Frontend:

```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Open `http://127.0.0.1:5173`.

## Admin Login

- Email: `admin@vano.test`
- Password: `password`

## Verification

```bash
cd backend
php artisan test

cd ../frontend
npm run lint
npm run build
```
