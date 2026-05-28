#!/usr/bin/env sh
set -eu

require_file() {
    if [ ! -f "$1" ]; then
        echo "Missing required file: $1"
        exit 1
    fi
}

require_text() {
    file="$1"
    text="$2"
    if ! grep -Fq -- "$text" "$file"; then
        echo "Missing expected text in $file: $text"
        exit 1
    fi
}

reject_text() {
    file="$1"
    text="$2"
    if grep -Fq -- "$text" "$file"; then
        echo "Unexpected text in $file: $text"
        exit 1
    fi
}

require_file "docs/PRD.md"
require_file "backend/composer.json"
require_file "backend/routes/api.php"
require_file "backend/routes/web.php"
require_file "backend/app/Http/Controllers/Api/ProfileController.php"
require_file "backend/app/Http/Controllers/Api/AuthController.php"
require_file "backend/tests/Feature/ProfileApiTest.php"
require_file "backend/tests/Feature/AuthApiTest.php"
require_file "frontend/package.json"
require_file "frontend/index.html"
require_file "frontend/vite.config.js"
require_file "frontend/src/App.jsx"
require_file "frontend/src/main.jsx"
require_file "frontend/src/pages/Portfolio.jsx"
require_file "frontend/src/pages/Login.jsx"
require_file "frontend/src/pages/Register.jsx"
require_file "frontend/src/components/ProfileNav.jsx"
require_file "frontend/src/components/AdminEditor.jsx"
require_file "frontend/src/components/LoadingScreen.jsx"
require_file "frontend/src/components/HeroProfile.jsx"
require_file "frontend/src/components/EducationTimeline.jsx"
require_file "frontend/src/components/SkillShowcase.jsx"
require_file "frontend/src/components/HobbyGrid.jsx"
require_file "frontend/src/components/ContactStrip.jsx"
require_file "frontend/src/components/FormField.jsx"
require_file "frontend/src/data/profile.js"
require_file "frontend/src/services/api.js"
require_file "frontend/src/styles/app.css"
require_file "frontend/public/images/hero-burgundy.png"

require_text "backend/composer.json" "laravel/framework"
require_text "backend/routes/api.php" "Route::post('/login'"
require_text "backend/routes/api.php" "Route::middleware('auth:sanctum')"
require_text "backend/app/Http/Controllers/Api/ProfileController.php" "profilePayload"
require_text "backend/app/Http/Controllers/Api/AuthController.php" "Auth::attempt"
require_text "frontend/package.json" "\"react\""
require_text "frontend/package.json" "\"vite\""
require_text "frontend/src/pages/Portfolio.jsx" "riwayat sekolah"
require_text "frontend/src/pages/Portfolio.jsx" "skill"
require_text "frontend/src/pages/Portfolio.jsx" "hobi"
require_text "frontend/src/components/ProfileNav.jsx" "aria-label=\"Navigasi utama\""
require_text "frontend/src/components/AdminEditor.jsx" "localStorage"
require_text "frontend/src/components/AdminEditor.jsx" "Edit content"
require_text "frontend/src/components/LoadingScreen.jsx" "macos-loader"
require_text "frontend/src/components/LoadingScreen.jsx" "boot-progress"
require_text "frontend/src/App.jsx" "initialLoading"
require_text "frontend/src/App.jsx" "portfolioOverrides"
require_text "frontend/src/components/HeroProfile.jsx" "hero-wide"
require_text "frontend/src/components/HeroProfile.jsx" "hero-kicker"
require_text "frontend/src/components/HeroProfile.jsx" "full stack"
reject_text "frontend/src/components/HeroProfile.jsx" "hero-media"
reject_text "frontend/src/components/HeroProfile.jsx" "hero-summary"
require_text "frontend/src/components/ContactStrip.jsx" "contact-strip"
require_text "frontend/src/components/FormField.jsx" "showPassword"
require_text "frontend/src/data/profile.js" "portfolioFallback"
require_text "frontend/src/services/api.js" "API_BASE_URL"
require_text "frontend/src/services/api.js" "window.location.hostname"
require_text "frontend/src/services/api.js" "ensureCsrfCookie"
require_text "frontend/src/services/api.js" "X-XSRF-TOKEN"
require_text "backend/config/cors.php" "FRONTEND_URLS"
require_text "backend/.env.example" "127.0.0.1:5174"
require_text "frontend/src/styles/app.css" "--burgundy"
require_text "frontend/src/styles/app.css" "--glass-surface"
require_text "frontend/src/styles/app.css" ".liquid-glass"
require_text "frontend/src/styles/app.css" ".macos-loader"
require_text "frontend/src/styles/app.css" ".boot-progress"
require_text "frontend/src/styles/app.css" "backdrop-filter"
require_text "frontend/src/styles/app.css" "saturate(145%)"
require_text "frontend/src/styles/app.css" ".hero-wide"
require_text "frontend/src/styles/app.css" ".contact-strip"
require_text "frontend/src/styles/app.css" "min-height: 100dvh"
require_text "docs/PRD.md" "Login Auth"

echo "Static contract passed."
