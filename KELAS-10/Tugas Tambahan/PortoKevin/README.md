# Kevin Portfolio Profile

Portfolio profile casual dengan folder terpisah: Laravel API di `backend/`, React.js Vite app di `frontend/`, Login Auth, dan burgundy dark theme.

## Setup Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Backend berjalan di `http://localhost:8000`.

## Database SQL
File SQL untuk penilaian ada di:

```bash
backend/database/portfolio_kevin.sql
```

Kalau ingin memakai SQL tersebut secara manual:

```bash
cd backend
touch database/database.sqlite
sqlite3 database/database.sqlite < database/portfolio_kevin.sql
php artisan serve
```

## Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:5173`.

## Test
```bash
./tests/static-contract.sh

cd backend
php artisan test

cd ../frontend
npm run build
```

## Run Bersamaan
Terminal 1:
```bash
cd backend
php artisan serve
```

Terminal 2:
```bash
cd frontend
npm run dev
```

Kalau terminal VS Code tidak mengenali `php`, pakai helper dari root project:
```bash
./serve-backend.sh
```

Atau dari folder backend:
```bash
./serve.sh
```

Seeder membuat user awal:
- Email: `kevin@example.com`
- Password: `password`
