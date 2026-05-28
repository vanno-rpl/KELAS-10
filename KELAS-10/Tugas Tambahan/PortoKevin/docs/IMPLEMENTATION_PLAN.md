# Portfolio Profile Implementation Plan

**Goal:** Build a separated Laravel backend and React frontend portfolio profile with login auth and a burgundy dark visual system.

**Architecture:** Laravel in `backend/` owns JSON API routes, session auth, and profile data. React in `frontend/` renders the portfolio and auth forms through Vite. CSS variables define a burgundy dark theme with spacious responsive layout.

**Tech Stack:** Laravel, Sanctum, React.js, Vite, CSS.

---

## Tasks
- Create a static contract test for required files and content.
- Add PRD and implementation notes.
- Scaffold Laravel project files under `backend/` without vendor dependencies.
- Add API auth controllers, routes, and protected user/logout endpoints.
- Add React pages under `frontend/` for portfolio, login, and register.
- Add burgundy dark CSS and generated hero image.
- Run available static verification and document unavailable runtime checks.
