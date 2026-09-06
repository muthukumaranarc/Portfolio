# 💻 Muthukumaran's Portfolio — Frontend

A modern, highly responsive full-stack developer portfolio built with **React 19 + Vite 6**, styled with bespoke modern CSS modules, and powered by data-driven dynamic components.

Featuring **Kutty the Owl 🦉**, an interactive autonomous tour guide companion who walks visitors through every section of the portfolio with real-time emotion states, drag-and-drop mechanics, and smooth tour scrolling.

---

## 🦉 Meet "Kutty" — The Interactive Mascot Guide

The frontend features a persistent, interactive owl companion named **Kutty** located at `src/components/KuttyCompanion.jsx`:

- **14 Dynamic Emotion States**: `hi`, `happy`, `cool`, `code`, `study`, `excited`, `celebration`, `inspired`, `love`, `normal`, `sad`, `sleepy`, `surprised`, and `wink` located under `src/assets/Kutty/`.
- **Interactive Guided Tour**: Clicking `Next: [Section] ➔` inside Kutty's speech bubble smoothly glides the page to that section using `src/utils/scrollUtils.js` with exact navbar offset framing.
- **Draggable (Pick & Place)**: Users can grab Kutty, drag him anywhere across the viewport, and drop him wherever they prefer.
- **Frosted Glassmorphism Speech Bubble**: Built with `backdrop-filter: blur(14px)`, dismissible with the `×` button to display only the character.
- **Idle & Wake-up Detection**: After 18 seconds without mouse/touch/scroll activity, Kutty dozes off (`sleepy`). When the viewer returns, Kutty perks up surprised (`surprised`) before continuing to guide.
- **Accompanies Every View**: Kutty even travels with the visitor into the dedicated "What I Learned" project drawer!

---

## 🚀 Getting Started

```bash
npm install     # Install dependencies
npm run dev     # Start local development server (vite --host)
```

The app will be accessible at `http://localhost:5173`.

---

## 📜 Available Scripts

| Script            | Command         | Description                                    |
| ----------------- | --------------- | ---------------------------------------------- |
| **Development**   | `npm run dev`   | Starts the Vite development server with HMR    |
| **Build**         | `npm run build` | Bundles and optimizes the production build     |
| **Preview**       | `npm run preview` | Locally serves and previews the `dist/` bundle |
| **Lint**          | `npm run lint`  | Runs ESLint to check for code quality          |

---

## 📁 Project Structure

```
Frontend/
├── public/                     # Static files (favicon, logo)
├── src/
│   ├── assets/                 # Graphics & character illustrations
│   │   ├── Kutty/              # 14 emotion illustrations of Kutty
│   │   ├── MuthuHero.webp      # Developer portrait
│   │   └── ...                 # Technology icons & badges
│   ├── components/             # React components with co-located CSS
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── KuttyCompanion.jsx  # Interactive owl mascot companion
│   │   ├── KuttyCompanion.css  # Kutty styles, animations & blur effect
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── About.jsx           # Bento grid about section
│   │   ├── GithubProjects.jsx  # Live GitHub projects
│   │   ├── ProjectLearnings.jsx# "What I Learned" deep-dive page
│   │   ├── Activities.jsx      # Activities container
│   │   ├── Internships.jsx     # IBM SkillsBuild internship details
│   │   ├── Hackathons.jsx      # SIH, GDG, SNS, MSME hackathons
│   │   ├── Certifications.jsx  # IBM SkillsBuild certifications
│   │   ├── ContactSection.jsx  # Interactive contact form
│   │   ├── SiteFooter.jsx      # Modern deep emerald footer
│   │   └── MobileNav.jsx       # Bottom navigation bar for mobile
│   ├── data/                   # Data sources driving site content
│   │   ├── internships.js      # Internship records & logos
│   │   ├── hackathons.js       # Hackathons timeline & posters
│   │   ├── certifications.js   # Certified credentials
│   │   └── projects/           # GitHub repos & learning post-mortems
│   ├── styles/
│   │   └── global.css          # Design variables & scroll-margin anchors
│   ├── utils/
│   │   └── scrollUtils.js      # Precision smooth-scroll calculation engine
│   ├── App.jsx                 # Page composition & IntersectionObserver
│   └── main.jsx                # Application root entry point
├── package.json
└── vite.config.js
```

---

## ✏️ Editing Site Content

- **Internships**: Edit `src/data/internships.js` (add company, role, dates, tech, and drop logos in `src/data/internships/images/`).
- **Hackathons**: Edit `src/data/hackathons.js` (add event names, roles, tech, badges, and drop posters in `src/data/hackathons/images/`).
- **Certifications**: Edit `src/data/certifications.js` (add credential title, issuer, issue date, credential URL, and drop logos in `src/data/certifications/images/`).
- **Projects**: Edit `src/data/projects/projectData.js`.
- **Contact Details**: Edit `contactData` in `src/components/ContactSection.jsx`.

---

## 🌐 Deployment

The frontend is deployed to **Firebase Hosting** from the `dist/` directory via GitHub Actions workflows defined in `.github/workflows/`.