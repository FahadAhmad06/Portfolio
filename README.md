# Fahad Ahmad — Portfolio (3D / Awwwards edition)

Multi-page React portfolio with GSAP, a Three.js/React Three Fiber 3D hero, a custom cursor,
magnetic buttons, CV download, and a real Gmail-powered contact form via Express + Nodemailer.

## ⚠️ Two things to fill in yourself

1. **Profile photo** — no image was uploaded with this brief, so the hero and About page use a
   placeholder "FA" monogram frame. Drop your real photo into `frontend/src/assets/profile/`,
   import it in `Home.jsx` / `About.jsx`, and swap the placeholder `<div>` for an `<img>`.
2. **CV PDF** — `frontend/public/Fahad-Ahmad-CV.pdf` is currently a one-page placeholder.
   Replace that file with your real CV (keep the same filename, or update the `href` in
   `Home.jsx` and `Resume.jsx` if you rename it).

## Project structure

```
frontend/
  src/
    components/   Navbar, Footer, CustomCursor, PageTransition, AnimatedText,
                   MagneticButton, FloatingBadge, ScrollProgress, AnimatedCounter,
                   SkillCard, ProjectCard, ContactForm, Loader, AnimatedBackground
    three/         HeroScene, FloatingObject, Particles, Lights (R3F + drei)
    pages/         Home, About, Skills, Projects, Resume, Contact
    assets/        profile/, projects/
  public/          Fahad-Ahmad-CV.pdf (replace with your real CV)

backend/
  server.js
  routes/contact.js
  controllers/contactController.js
  config/mail.js
  .env.example
```

## Run the frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build       # production build in frontend/dist
```

## Run the backend (Gmail SMTP)

```bash
cd backend
npm install
cp .env.example .env
```

Then fill in `backend/.env`:

1. Turn on 2-Step Verification on your Google account: https://myaccount.google.com/security
2. Generate an App Password: https://myaccount.google.com/apppasswords (name it something like
   "Portfolio Contact Form"). Google gives you a 16-character password.
3. Set `EMAIL_USER` to your Gmail address and `EMAIL_PASSWORD` to that app password (no spaces —
   your normal Gmail login password will be rejected).
4. Set `RECEIVER_EMAIL` to the inbox that should receive messages (can be the same address).
5. `FRONTEND_ORIGIN` should match wherever the frontend runs (`http://localhost:5173` in dev).

```bash
npm start           # http://localhost:5000
```

The frontend calls `/api/contact`, which Vite proxies to `http://localhost:5000` in dev (see
`frontend/vite.config.js`). In production, either deploy both on the same domain behind a
reverse proxy, or update the `fetch` URL in `ContactForm.jsx` to your backend's full URL and set
`FRONTEND_ORIGIN` on the backend to your deployed frontend's domain.

The backend includes input validation, a honeypot spam field, and rate limiting (5 submissions /
15 min / IP) via `express-rate-limit`. Never commit `backend/.env` — only `.env.example` (with
placeholder values) belongs in version control.

## About the 3D hero

`HeroScene.jsx` renders an abstract wireframe/distort-material icosahedron ("digital core") that
rotates continuously, floats gently, follows the cursor with subtle lerped rotation, and scales
down slightly as you scroll past the hero. It's disabled automatically when the browser reports
`prefers-reduced-motion`, and particle count/pixel ratio drop on mobile. Since this is a true
multi-page app (each route unmounts on navigation), the 3D object lives on the Home hero rather
than persisting/moving across every route — a single continuous 3D scene spanning six separate
pages isn't compatible with real page-level routing, so this keeps the impressive 3D moment where
it has the most impact (first impression) without fighting the multi-page requirement.

## Deployment notes

- Deploy `frontend/` (after `npm run build`) to Vercel/Netlify/etc.
- Deploy `backend/` separately (Render, Railway, Fly.io, a VPS) as a Node service, with
  `EMAIL_USER`, `EMAIL_PASSWORD`, `RECEIVER_EMAIL`, `FRONTEND_ORIGIN` set as environment
  variables in that platform's dashboard — never in frontend code.
