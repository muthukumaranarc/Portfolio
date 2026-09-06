<div align="center">

# ✨ Muthukumaran's Full-Stack Portfolio

### A modern, interactive, and high-performance developer portfolio built with **React 19**, **Spring Boot**, and **Vite**.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-muthukumaran--portfolio.web.app-10b981?style=for-the-badge&labelColor=073827)](https://muthukumaran-portfolio.web.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black&labelColor=073827)](https://react.dev/)
[![Build Tool](https://img.shields.io/badge/Bundler-Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=073827)](https://vitejs.dev/)
[![Backend](https://img.shields.io/badge/Backend-Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white&labelColor=073827)](https://spring.io/projects/spring-boot)
[![Hosting](https://img.shields.io/badge/Hosting-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black&labelColor=073827)](https://firebase.google.com/)

<br/>

> *"I am a Computer Science student and Full-Stack Developer passionate about architecting scalable web applications, solving real-world challenges in hackathons, and applying AI to practical engineering workflows."*

<br/>

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Meet Kutty — Interactive Portfolio Companion](#-meet-kutty--the-interactive-portfolio-companion)
- [Key Features & Sections](#-key-features--sections)
- [Repository Architecture](#-repository-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Connect with Me](#-connect-with-me)

---

## 📸 Overview

This portfolio website is an interactive web experience engineered to showcase real-world full-stack projects, competitive hackathon prototypes, machine learning internships, and verified credentials.

Unlike standard static portfolios, this site is **data-driven**, **content-reactive**, and introduces **Kutty** — an autonomous, interactive mascot companion that travels with the visitor and guides them through every section of the portfolio.

---

## 🦉 Meet "Kutty" — The Interactive Portfolio Companion

One of the standout features of this portfolio is **Kutty**, a custom-animated owl companion who guides visitors across the entire site in real-time.

```
       ,___,
       [O.o]   "Hi there! I'm Kutty, your tour guide.
       /)__)    Let's explore Muthukumaran's portfolio together!"
      --"-"--
```

### 🌟 Kutty's Features & Capabilities

1. **Contextual Emotion Engine (14 Reactive States)**:
   Kutty expresses dynamic personality using 14 handcrafted emotion states based on the viewer's current context:
   - `hi` — Welcoming visitors at the Hero section.
   - `cool` — Inspecting the React & Spring Boot tech stack.
   - `inspired` — Sharing Muthu's philosophy in the About section.
   - `code` — Highlighting production builds in the Projects section.
   - `study` — Exploring the IBM SkillsBuild Machine Learning internship.
   - `excited` — Hype and energy in the Hackathons section.
   - `celebration` — Celebrating verified credentials in Certifications.
   - `wink` — Encouraging connections in the Contact section.
   - `love` — Expressing gratitude at the bottom of the portfolio.
   - `sleepy` — Dozing off if the viewer goes idle for ~18 seconds.
   - `surprised` — Waking up instantly when the viewer scrolls or moves the mouse!
   - `happy`, `normal`, `sad` — Interactive emotional responses.

2. **Interactive Guided Tour (Precision Smooth Scroll)**:
   - Inside Kutty's speech bubble, the **`Next: [Section] ➔`** tour button acts as an automated, guided walkthrough.
   - Clicking **`Next`** triggers smooth, mathematically calculated scrolling that offsets for the fixed navbar, ensuring every section title lands with exact 24px framing.

3. **Pick & Place (Draggable Companion)**:
   - Visitors can **click/touch Kutty and drag him anywhere** on their screen.
   - Features responsive cursor feedback (`grab` & `grabbing`), lifted drop shadows, and automatic bounds clamping so Kutty never gets lost off-screen.

4. **Frosted Glassmorphism Speech Bubble**:
   - Designed with `backdrop-filter: blur(14px)` and translucent emerald styling.
   - Features a clean **`×` close button** that silences the dialogue and displays **only the character** without distracting the reader.
   - Tapping/clicking Kutty at any time pops open a new fun fact or dialogue.

5. **Accompanies Every View**:
   - Kutty even travels alongside the user into the dedicated **"What I Learned"** project analysis pages, offering commentary on debugging and architectural lessons!

---

## 🎯 Key Features & Sections

### 1. Hero Section
- Dynamic personal branding with live status pill: *"Open to Opportunities"*.
- Floating technology badges (Figma, MongoDB, React, Node.js) with fluid CSS physics.
- Quick action buttons with precision smooth scrolling (*"View Projects"*, *"Contact Me"*).

### 2. My Skills
- Categorized presentation of core languages, frameworks, and tools:
  - **Frontend**: HTML5, CSS3, JavaScript, React.js.
  - **Backend & Database**: Java, Spring Boot, Node.js, MongoDB, MySQL.
  - **Tools & DevOps**: Git, GitHub, Maven, Figma, Docker.

### 3. About Section (Bento Grid Overhaul)
- **Interactive Bento Grid**: Highlighting full-stack craft, competitive hackathons, applied AI, and engineering philosophies with interactive micro-tags.
- **2×2 Metrics Grid**: Quick glance statistics:
  - **4+** Hackathons & Challenges (*SIH, GDG, SNS, MSME*)
  - **6+** Production-Ready Builds (*Full-Stack Web Apps*)
  - **3+** IBM Certifications (*AI, GenAI & Agents*)
  - **1** AI / ML Internship (*IBM SkillsBuild*)

### 4. GitHub Projects & Architecture Showcase
- Live project cards integrated with GitHub metadata, repository links, and live demos.
- Dedicated **"What I Learned"** modal drawer (`ProjectLearnings.jsx`) highlighting challenges, architectural decisions, and post-mortem takeaways for each build.

### 5. Activities Suite
- **Internships**: Features the 6-week Virtual **Machine Learning and Applied AI Internship** at **IBM SkillsBuild** in collaboration with **AICTE** and **BharatCares** (watsonx, intelligent agents, supervised/unsupervised ML).
- **Hackathons**: Detailed timeline of competitive sprints:
  - *Smart India Hackathon (SIH 2026)* — AI-driven solution ideation.
  - *Chameleon (GDG × KSRCE)* — Multimodal AI machine troubleshooting.
  - *SNS College 8-Hour Hackathon* — Accessibility navigation prototype.
  - *MSME 6.0* — IT employment & skill-gap matching concept.
- **Certifications**: Industry-recognized credentials verified by IBM SkillsBuild:
  - *Artificial Intelligence Fundamentals*
  - *Generative AI in Action*
  - *Make Agentic AI Work for You*

### 6. Contact & Social Channels
- Direct interactive messaging form with real-time feedback states.
- Direct communication channels via Email, LinkedIn, and WhatsApp.

### 7. Modern Deep Forest Footer
- Custom deep emerald card styling with ambient radial glow.
- Quick navigation links, social channel buttons, smooth back-to-top button, and a special nod to Kutty the mascot.

---

## 🏗️ Repository Architecture

```
Portfolio/
├── Frontend/                          # React 19 + Vite Single Page Application
│   ├── public/                        # Static assets (favicons, logos)
│   ├── src/
│   │   ├── assets/                    # Media assets
│   │   │   ├── Kutty/                 # 14 emotion illustrations of Kutty the Owl
│   │   │   │   ├── hi.png, happy.png, cool.png, code.png, study.png, ...
│   │   │   │   └── celebration.png, wink.png, sleepy.png, surprised.png
│   │   │   ├── MuthuHero.webp         # Hero portrait
│   │   │   └── ...                    # Tech stack logos & badge graphics
│   │   ├── components/                # Modular React components with co-located CSS
│   │   │   ├── Navbar.jsx             # Fixed blur navigation bar
│   │   │   ├── Hero.jsx               # Hero landing section
│   │   │   ├── KuttyCompanion.jsx     # Autonomous interactive owl guide
│   │   │   ├── KuttyCompanion.css     # Kutty styling, animations & frosted glass
│   │   │   ├── Skills.jsx             # Technical stack showcase
│   │   │   ├── About.jsx              # Bento grid about section
│   │   │   ├── GithubProjects.jsx     # Production project cards
│   │   │   ├── ProjectLearnings.jsx   # "What I Learned" deep-dive page
│   │   │   ├── Activities.jsx         # Internships, Hackathons & Certifications
│   │   │   ├── Internships.jsx        # IBM SkillsBuild internship card
│   │   │   ├── Hackathons.jsx         # SIH, GDG, SNS, MSME hackathon timeline
│   │   │   ├── Certifications.jsx     # IBM SkillsBuild verified credentials
│   │   │   ├── ContactSection.jsx     # Contact form and social cards
│   │   │   ├── SiteFooter.jsx         # Deep emerald footer card
│   │   │   └── MobileNav.jsx          # Mobile bottom navigation bar
│   │   ├── data/                      # Data-driven JSON/JS sources
│   │   │   ├── internships.js         # Internship records & company logos
│   │   │   ├── hackathons.js          # Hackathon cards & poster assets
│   │   │   ├── certifications.js      # Credentials & issuer logos
│   │   │   └── projects/              # GitHub repos & learning post-mortems
│   │   ├── styles/
│   │   │   └── global.css             # Design tokens, variables & scroll anchors
│   │   ├── utils/
│   │   │   └── scrollUtils.js         # Precision smooth-scroll calculation engine
│   │   ├── App.jsx                    # Root composition & section tracking
│   │   └── main.jsx                   # Entry point
│   ├── package.json                   # Dependencies & scripts
│   └── vite.config.js                 # Vite build & chunking configuration
│
├── Portfolio-backend/                 # Spring Boot backend service
└── README.md                          # Repository documentation
```

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ESNext-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/Modern_CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![React Markdown](https://img.shields.io/badge/React_Markdown-000000?style=flat-square)

### Backend & Cloud
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java_17-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)

</div>

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/muthukumaranarc/Portfolio.git
cd Portfolio/Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The site will be running locally at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

### 5. Run linting
```bash
npm run lint
```

---

## 🌐 Deployment

- **Hosting**: Deployed on **Firebase Hosting**.
- **Build Distribution**: Configured via `firebase.json` pointing to `Frontend/dist`.
- **Automated CI/CD**: Automatic previews on Pull Requests and live deployment on push to `main` via GitHub Actions.

---

## 📬 Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muthukumaranarc00)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muthukumaranarc)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muthukumaran.freelance@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/8610760407)

<br/>

Designed & Developed with ❤️ by **Muthukumaran M** &bull; Guided by **Kutty** 🦉

</div>
