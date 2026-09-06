import{j as x,r as ye,G as en,a as gt,P as yt,c as Ci,s as nn,p as Ei,F as tn,g as bt}from"./index-C8iw7tOa.js";import{g as cr}from"./react-vendor-COd4auuD.js";const Ai=`# Chameleon
An AI-powered adaptive workspace that lets users create and transform custom applications simply by describing what they need in natural language.
`,Ti=`# EduPlus 🚀

**EduPlus** is a next-generation, AI-driven educational and study platform designed to revolutionize the way students interact with learning material. By perfectly blending personal study progression with gamification and generative AI, EduPlus acts as a personalized, 24/7 tutor, analyst, and motivator.

This application uses the power of **Google's Gemini AI** to understand your specific syllabus, generate dynamic tests in real-time, instantly grade your answers, provide analytics on your weak areas, and gamify the whole process to keep you coming back every day!

---

## 🌟 Core Features

### 🧩 1. The Study AI Arsenal

- **Smart Test Builder**: Automatically construct practice tests specifically around your uploaded syllabus material. Generate Multiple Choice Questions (MCQs), Short Answers (2-Marks), or Detailed Essays (10-Marks) dynamically.
- **AI Analytics Engine**: The system interprets your submitted test results over time and securely passes the history to Gemini. It returns a personalized breakdown of your **"Strong Topics"**, **"Weak Topics"**, and actionable **"Recommendations"** to focus your future sessions.
- **AI Revision Notes**: Input a topic or unit, and EduPlus produces formatted, concise, exam-ready revision notes that abstract the fluff into pure study value.
- **AI Chat Assistant**: An interactive study buddy built right into the platform. Ask complex educational queries without ever opening a new tab.

### 🎮 2. Gamification & Progression

- **Trophy System**: Nothing drives motivation like achievement. EduPlus tracks criteria like "Tests Completed" and "Current Day Streak" to unlock exclusive user trophies automatically.
- **Dynamic Dashboard**: A beautiful daily hub tracking your task completion strip, your current day streak, your trophies earned, and a progress bar of your daily custom-defined tasks.
- **Social & Friends**: Search for friends by username and compare your trophy counts and study habits!

### 🔐 3. Security & Seamless Access

- **Passwordless Google OAuth 2.0**: Completely skip the registration hurdle. Users can seamlessly create accounts, merge profiles, and fetch their Google profile picture out of the box.
- **Cross-Origin JWT Cookies**: Authenticated sessions utilize Spring Security 6 stateless JWT tokens delivered via \`HttpOnly\`, \`Secure=true\`, \`SameSite=None\` cookies for impenetrable cross-domain security.

### 📚 4. Custom Syllabus Configuration

- **Syllabus Manager**: EduPlus is only as smart as you tell it to be. Upload your precise \`.txt\` materials or manually type your syllabus structure. The backend parses this exact text to boundary the AI, ensuring it only generates tests based on what your professor actually teaches.

---

## 🛠 Tech Stack Details

**EduPlus is built completely on a decoupled Modern Web Architecture (SPA client + REST server).**

### 💻 Frontend (Client)

- **Framework**: React.js (Bootstrapped rapidly via Vite)
- **Styling**: Highly responsive **Vanilla CSS** featuring modern interactive elements: Glassmorphism, smooth micro-animations, theme-aware inputs, and complex flex/grid layouts.
- **State & Navigation**: React Router DOM (with isolated \`<Outlet/>\` contexts), and Context API (\`UserContext\`).
- **HTTP Client**: \`axios\` injected with \`withCredentials: true\` globally via interceptors to smoothly securely process authentication cookies without CORS issues across domains.

### ⚙️ Backend (Server)

- **Framework**: Java Spring Boot 3 / JDK 21
- **Data Persistence**: Spring Data MongoDB (\`spring-boot-starter-data-mongodb\`) cleanly organized into Repositories and Document Models.
- **Security Architecture**: Spring Security 6 completely customized for REST architecture. Drops default session states (\`SessionCreationPolicy.STATELESS\`), establishes a custom \`JwtFilter\`, intercepts unauthorized exceptions to return HTTP \`401\` gracefully instead of redirects, and seamlessly merges OAuth2 user parameters dynamically into the internal User ecosystem via \`OAuth2SuccessHandler.java\`.
- **AI Provider Integration**: Direct REST logic parsing \`Google Gemini API\` requests synchronously returning JSON schemas natively formatted back to the client (\`AiAnalysisResponse.java\`, \`GeminiResponse.java\`).

---

## 🏗 Domain Models & Architecture

The application abstracts functionality into explicitly decoupled collections in MongoDB:

- **\`User\` & \`AboutUser\`**: Manages credentials, OAuth providers, profile data, linked friends, and tokens.
- **\`Test\` & \`Question\` & \`UserTest\`**: Complex abstraction of user-generated study materials categorized by complexity.
- **\`Syllabus\`**: Holds the dynamic context text needed by Gemini API's prompt engineering to frame test generation.
- **\`ProgressTrack\` & \`Task\`**: Modulates the daily checklist displayed directly on the Dashboard.
- **\`UserTrophy\`**: A master ledger storing boolean state unlocks of various tracked gamification achievements.

---

## 🚀 Getting Started (Local Development)

To run this application, ensure you have **Node.js**, **Java 21**, **Maven**, and a **MongoDB instance** (local or Atlas) ready.

### 1️⃣ Clone the Repository

\`\`\`bash
git clone https://github.com/muthukumaranarc/EduPlus.git
cd EduPlus
\`\`\`

### 2️⃣ Backend Configuration & Startup

1. Move to the Backend: \`cd Backend/EduPlus\`
2. Configure **Environment Variables**. You can plug these right into \`application-dev.properties\` or your IDE's run configuration:
   - \`MONGODB_URL\`: The full connection string for your MongoDB database (e.g., \`mongodb+srv://...\`)
   - \`GEMINI_API_KEY\`: Your Google Developer Gemini API Key
   - \`JWT_SECRET\`: A highly secure 256-bit base64 alphanumeric string used to sign user tokens.
   - \`EDUPLUS_OAUTH2_CLIENT_ID\` & \`EDUPLUS_OAUTH2_CLIENT_SECRET\`: Generated securely from the Google Cloud Console credential manager.
3. Run the Spring Boot application utilizing the DEV profile:
   \`\`\`bash
   mvn spring-boot:run -Dspring-boot.run.profiles=dev
   \`\`\`
   _The server spins up isolated on \`http://localhost:5000\`_

### 3️⃣ Frontend Configuration & Startup

1. Move to the Frontend: \`cd Frount/EduPlus\`
2. Install package dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Establish your Development Environment \`.env.development\` file globally at the root of \`Frount/EduPlus\`:
   \`\`\`env
   VITE_API_URL=http://localhost:5000
   VITE_ENV=development
   \`\`\`
4. Start the Vite server:
   \`\`\`bash
   npm run dev
   \`\`\`
   _The React Web-App spins up on \`http://localhost:5173\`. CORS logic is intrinsically bound to trust these ports!_

---

## 🚢 Publishing & Deployment (Production Ready)

EduPlus is pre-configured for aggressive cross-origin production deployment.

### Backend (Render / Docker Hub / Heroku)

There is a fully working \`Dockerfile\` at the root of the backend utilizing \`eclipse-temurin:21-jdk-alpine\`.

1. Make sure to package the project using Maven: \`mvn clean package -DskipTests\`
2. Build the Docker image natively: \`docker build -t your-org/eduplus-application:latest .\`
3. Push the image or auto-deploy using Render pipelines.
   _Note: In Production, Spring Boot naturally falls back to \`application.properties\`/\`application-prod.properties\` ensuring cookies enforce strictly securely (\`Secure=true; SameSite=None\`) so cross-site domain APIs aren't dropped._

### Frontend (Firebase Hosting / Vercel / Netlify)

The React client operates perfectly under SPA parameters.

1. Run \`npm run build\` in the \`Frount/EduPlus\` folder referencing your \`.env.production\` URLs.
2. Push your \`dist\` uncompiled folder to Firebase using the \`firebase deploy --only hosting\` CLI or simply attach your repository CI/CD.
3. Verify your routing rewrites (\`"rewrites": [ { "source": "**", "destination": "/index.html" } ]\`) to prevent \`404\` refresh issues.

---

## ✨ Endpoint Map Preview

A highly robust REST layer maps traffic accordingly:

- \`GET /oauth2/authorization/google\` ➜ Intercepts authentication directly via Spring Security Filter Chain.
- \`POST /user/login\` ➜ Authenticates raw passwords and attaches Bearer Tokens to response cookies.
- \`GET /pro/ensure-defaults\` ➜ Ensures new user dashboards populate tasks to start tracking their progress.
- \`GET /trophy/get-user-trophies\` ➜ Validates unlocked trophies instantly.
- \`POST /syllabus/extract-unit\` ➜ Takes uploaded \`.txt\` files and seamlessly converts structure into MongoDB nodes.
- \`POST /ai/analyze-progress\` ➜ Executes generative prompt logic and awaits structural AI payload returns on performance topics.

---

## 🤝 Contributing / Found an Issue?

We’re always accepting pull requests or problem evaluations! Simply submit an issue clearly outlining the bug or the feature request to track implementations.

## 📄 License

This open-source project is available free under the [MIT License](LICENSE).
`,Pi=`\uFEFF# Freelance Website — Full-Stack Client Platform

A modern full-stack web application designed for freelance client showcases, service presentations, and portfolio demonstrations, engineered with a decoupled React frontend and a Spring Boot REST API backend.

---

## 📌 Overview

This repository provides a comprehensive full-stack solution built specifically for freelance client delivery. It demonstrates professional software engineering practices including responsive UI architecture, RESTful API design, and clean separation between client and server layers.

* **Repository:** [https://github.com/muthukumaranarc/Freelance-Website](https://github.com/muthukumaranarc/Freelance-Website)
* **Frontend:** React, Vite, Modern CSS3
* **Backend:** Java, Spring Boot, Maven, REST APIs

---

## 🏗️ Architecture & Modules

The repository is structured as a production-grade multi-module project:

### 1. \`Frontend/\` (Client Layer)
* **Framework:** React with Vite build tooling for fast HMR and optimized production bundles.
* **Component Architecture:** Modular, reusable UI components for landing pages, portfolio galleries, client testimonials, and inquiry forms.
* **Responsive Design:** Mobile-first responsive layouts supporting phone, tablet, laptop, and ultra-wide screens.
* **API Integration:** Asynchronous client communication for dynamic content loading and form submissions.

### 2. \`Freelance-backend/\` (Server Layer)
* **Framework:** Java Spring Boot with Maven dependency management.
* **API Design:** RESTful endpoints for handling client inquiries, service catalog management, and contact requests.
* **Layered Architecture:** Strict separation across Controller, Service, and Repository layers for maintainability and scalability.
* **Configuration:** Clean environment-based properties and CORS configuration for secure cross-origin communication.

---

## ✨ Key Features

* **Full-Stack Integration:** Seamless end-to-end data flow from user interaction in React to backend processing in Spring Boot.
* **Client Demonstration Suite:** Includes interactive prototypes and UI reference templates tailored for diverse freelance clients.
* **Mobile-First UX:** Fluid animations, responsive layouts, and touch-friendly navigation across all viewport sizes.
* **Production-Ready Structure:** Clean code standards, ESLint compliance, Maven build scripts, and structured logging.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, JavaScript (ES6+), Vite, CSS3, HTML5 |
| **Backend** | Java, Spring Boot, Maven, REST APIs |
| **Tooling** | Git, GitHub, ESLint, VS Code |

---

## 📂 Project Purpose

* **Client Demos:** Showcasing full-stack capabilities to prospective freelance clients.
* **Architectural Blueprint:** Reusable starting template for commercial freelance contracts.
* **Production Delivery:** Real-world demonstration of modern web engineering standards.\r
`,Ii=`<div align="center">

# ✨ Muthukumaran's Portfolio

### A modern, full-stack developer portfolio — designed to impress.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-muthukumaran--portfolio.web.app-6C63FF?style=for-the-badge&labelColor=1a1a2e)](https://muthukumaran-portfolio.web.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=1a1a2e)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Spring_Boot_3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white&labelColor=1a1a2e)](https://spring.io/projects/spring-boot)
[![Hosted on](https://img.shields.io/badge/Hosting-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white&labelColor=1a1a2e)](https://firebase.google.com/)
[![Backend on](https://img.shields.io/badge/API-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white&labelColor=1a1a2e)](https://render.com/)

<br/>

> _"I'm a computer science student with 9.8 CGPA. I actively engage in tech competitions and focus on building innovative solutions that solve real-world problems effectively."_

<br/>

</div>

---

## 📸 Overview

A **feature-rich, fully responsive** portfolio website that goes beyond a static resume. It integrates **real-time LeetCode statistics**, an **automated email feedback system**, **GSAP-powered animations**, and a **smooth typewriter intro** — all wrapped in a polished, modern UI.

Built with **React 19 + Vite** on the frontend and **Spring Boot 3** on the backend, this portfolio is designed for performance, interactivity, and a premium user experience.

---

## 🏗️ Architecture

\`\`\`
Portfolio/
├── 📂 Frount/                    # Frontend — React + Vite SPA
│   ├── src/
│   │   ├── App.jsx               # Main app with scroll-to-top & zoom lock
│   │   ├── Components/
│   │   │   ├── Head.jsx          # Navigation bar with smooth-scroll links
│   │   │   ├── Profile.jsx       # Hero section with typewriter intro
│   │   │   ├── TextType.jsx      # Custom GSAP-powered typewriter component
│   │   │   ├── Skills.jsx        # Frontend / Backend / Tools skill grid
│   │   │   ├── Journey.jsx       # Visual learning timeline
│   │   │   ├── LeetCode.jsx      # Live LeetCode stats with circular progress
│   │   │   ├── Visionary.jsx     # Career vision with scroll-reveal animations
│   │   │   ├── Projects.jsx      # Featured project showcase
│   │   │   ├── ProjectBlock.jsx  # Reusable project card component
│   │   │   ├── Feedback.jsx      # Feedback form with star rating
│   │   │   ├── Footer.jsx        # Contact links & social icons
│   │   │   └── useScrollReveal.jsx  # Custom hook for scroll animations
│   │   └── assets/               # Images, icons, and project screenshots
│   ├── firebase.json             # Firebase Hosting configuration
│   └── package.json
│
├── 📂 sendMail/                  # Backend — Spring Boot 3 API
│   ├── src/main/java/com/muthu/sendMail/
│   │   ├── Collections/
│   │   │   └── MailController.java   # REST endpoints (/send, /leetcode)
│   │   ├── Services/
│   │   │   └── MainService.java      # Email service + LeetCode stats proxy
│   │   ├── Configuration/
│   │   │   └── CorsConfig.java       # CORS configuration
│   │   └── Data/
│   │       └── UserInput.java        # Feedback form DTO
│   ├── Dockerfile                    # Docker image for Render deployment
│   └── pom.xml
│
└── 📂 .github/workflows/        # CI/CD
    ├── firebase-hosting-merge.yml       # Auto-deploy on push to main
    └── firebase-hosting-pull-request.yml # Preview on PR
\`\`\`

---

## ✨ Key Features

### 🎨 Frontend Highlights

| Feature                          | Description                                                                                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⌨️ Typewriter Intro**          | Custom-built GSAP-animated text component that cycles through roles — _Full Stack Developer, React Developer, Spring Boot Developer_ — with cursor blink and configurable typing speed |
| **📊 Live LeetCode Stats**       | Real-time problem-solving statistics fetched from the backend API, displayed with animated circular progress bars (Easy / Medium / Hard breakdown)                                     |
| **🌀 Scroll Reveal Animations**  | Custom \`useScrollReveal\` hook powered by \`IntersectionObserver\` triggers smooth entrance animations as sections come into view                                                         |
| **⭐ Interactive Feedback Form** | Full contact form with star rating, real-time button states (_Submit → Processing → Submitted_), and automated email notifications via the Spring Boot backend                         |
| **🧭 Smooth Navigation**         | Sticky header with hash-based smooth scrolling, plus a floating scroll-to-top button that appears after 600px scroll depth                                                             |
| **📱 Fully Responsive**          | Adaptive layouts with dedicated mobile breakpoints, separate journey timeline images for mobile, and touch-optimized interactions                                                      |
| **🎆 Particle Effects**          | Background particle animations using \`react-tsparticles\` for a dynamic, premium feel                                                                                                   |
| **🔒 Zoom Lock**                 | Prevents accidental zoom via \`Ctrl+Scroll\`, pinch gestures, and keyboard shortcuts for a controlled viewing experience                                                                 |

### ⚙️ Backend Highlights

| Feature                   | Description                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **📧 Dual Email System**  | On feedback submission, sends a styled HTML notification to the portfolio owner AND a personalized thank-you email to the visitor |
| **📈 LeetCode Proxy API** | \`GET /leetcode\` — proxies the LeetCode Stats API to avoid CORS issues and provides real-time problem-solving data                 |
| **🐳 Dockerized**         | Production-ready \`Dockerfile\` for seamless deployment on Render                                                                   |
| **🌐 CORS Configured**    | Proper cross-origin setup to allow requests from the Firebase-hosted frontend                                                     |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![tsParticles](https://img.shields.io/badge/tsParticles-000000?style=flat-square&logo=typescript&logoColor=white)
![Canvas Confetti](https://img.shields.io/badge/Canvas_Confetti-FF6B6B?style=flat-square)

### Backend

![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.4-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Java 17](https://img.shields.io/badge/Java_17-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=flat-square&logo=apachemaven&logoColor=white)
![Spring Mail](https://img.shields.io/badge/Spring_Mail-6DB33F?style=flat-square&logo=spring&logoColor=white)

### DevOps & Hosting

![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 & **npm**
- **Java 17** & **Maven**
- **Docker** _(optional, for backend containerization)_

### 1️⃣ Clone the repository

\`\`\`bash
git clone https://github.com/muthukumaranarc/Portfolio.git
cd Portfolio
\`\`\`

### 2️⃣ Frontend Setup

\`\`\`bash
cd Frount
npm install
npm run dev
\`\`\`

> The development server starts at \`http://localhost:5173\` with hot module replacement enabled.

### 3️⃣ Backend Setup

\`\`\`bash
cd sendMail

# Configure email credentials in application.properties
# spring.mail.username=your-email@gmail.com
# spring.mail.password=your-app-password

./mvnw spring-boot:run
\`\`\`

> The backend API starts at \`http://localhost:8080\`.

### 4️⃣ Docker (Optional)

\`\`\`bash
cd sendMail
./mvnw clean package -DskipTests
docker build -t portfolio-backend .
docker run -p 8080:8080 portfolio-backend
\`\`\`

---

## 🌐 Deployment

| Layer        | Platform         | Config                                             |
| ------------ | ---------------- | -------------------------------------------------- |
| **Frontend** | Firebase Hosting | Auto-deployed via GitHub Actions on push to \`main\` |
| **Backend**  | Render (Docker)  | Containerized with \`openjdk:17-jdk-alpine\`         |
| **CI/CD**    | GitHub Actions   | Preview deploys on PRs, live deploy on merge       |

---

## 📡 API Endpoints

| Method | Endpoint    | Description                                              |
| ------ | ----------- | -------------------------------------------------------- |
| \`POST\` | \`/send\`     | Submit feedback form — triggers dual email notifications |
| \`GET\`  | \`/leetcode\` | Fetch real-time LeetCode statistics                      |

---

## 📬 Connect with Me

<div align="center">

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:muthukumaranarc00@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muthukumaranarc00)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muthukumaranarc)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Jq4H1BglTL/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=8610760407&text=Hi%20Muthukumaran)
[![Portfolio](https://img.shields.io/badge/Portfolio-6C63FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://muthukumaran-portfolio.web.app/)

</div>

---

<div align="center">

### ⭐ If you like this project, give it a star!

Made with ❤️ by **Muthukumaran M**

</div>
`,ji=`# Product-Designs
Collection of UI/UX designs, Figma projects, and product concepts for future full-stack applications.
`,Di=`<p align="center">
  <img src="frount/src/assets/Only_Logo_NoBackground.png" alt="Tunez Logo" width="120" />
</p>

<h1 align="center">🎵 Tunez</h1>

<p align="center">
  <strong>A modern, full-stack music streaming web application</strong><br/>
  Stream songs, explore collections, discover artists — all from the browser.
</p>

<p align="center">
  <a href="https://tunez-online.web.app"><img alt="Live Demo" src="https://img.shields.io/badge/🌐_Live_Demo-tunez--online.web.app-blueviolet?style=for-the-badge"/></a>
  <img alt="React 19" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img alt="Spring Boot 3.5" src="https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Developer](#-developer)
- [License](#-license)

---

## 🌟 Overview

**Tunez** is a full-stack music streaming platform built with **React 19** and **Spring Boot 3.5**, backed by **MongoDB Atlas**. It delivers a seamless, Spotify-inspired experience where users can browse songs, explore curated collections, discover artists, search across the entire catalog, and manage personal playlists — all wrapped in a sleek, responsive UI.

---

## 🔗 Live Demo

| Component       | URL                                                        |
| --------------- | ---------------------------------------------------------- |
| **Frontend**    | [tunez-online.web.app](https://tunez-online.web.app)       |
| **Backend API** | [tunez-2frv.onrender.com](https://tunez-2frv.onrender.com) |

> **Note:** The backend is hosted on Render's free tier and may take ~30 seconds to cold start on the first request.

---

## ✨ Features

### 🎧 Music Playback

- **Audio Streaming** — Stream songs directly in the browser with a custom audio player
- **Play / Pause / Seek** — Full playback controls with progress slider
- **Play All** — Queue and auto-play an entire song list
- **Previous / Next** — Navigate between songs in a queue
- **Auto-advance** — Automatically plays the next song when the current one ends

### 🏠 Home Dashboard

- **Quick Picks** — Horizontally scrollable song list with smooth carousel navigation
- **Daily Beat** — Featured collection updated daily
- **New Collection** — Discover the latest curated playlists
- **Collections For You** — Personalized collection recommendations
- **Artist Spotlight** — Browse popular artists with circular avatar cards

### 🔍 Universal Search

- **Real-time search** across songs, collections, and artists simultaneously
- **Categorized results** — Results are grouped by type for easy browsing
- **Live debounced input** — Search updates every 500ms as you type

### 📁 Collections & Playlists

- **Curated Collections** — Browse public, admin-curated playlists
- **Private Collections** — Create, manage, and add songs to your personal playlists
- **Add to Collection** — Add any currently playing song to your private collections
- **Collection Viewer** — Detailed view of collection contents with full playback controls

### 🗺️ Explorer

- **Discover** — Browse shuffled collections and artists to find something new
- **Category filtering** — Explore content organized by music categories
- **Top Search Collections** — Browse the most popular playlists
- **Popular Artists** — Discover trending artists

### 🔐 Authentication & Security

- **Multi-provider OAuth2** — One-click login via **Google** or **GitHub**
- **Username/Password** — Traditional account creation with password strength meter (zxcvbn)
- **JWT-based sessions** — Secure, stateless authentication with HTTP-only cookies
- **BCrypt hashing** — Industry-standard password encryption
- **Profile pictures** — Pulled automatically from OAuth provider

### 📱 Responsive Design

- **Mobile-first** — Fully responsive layout for phones, tablets, and desktops
- **Collapsible sidebar** — Auto-hides on mobile, toggle on desktop
- **Touch-friendly** — Optimized interactions for touch screens
- **Zoom prevention** — Disables browser zoom for consistent mobile UX

### ⚙️ User Settings

- **Profile management** — View profile picture and username
- **Account switching** — Switch between accounts seamlessly
- **Account deletion** — Full account removal with data cleanup
- **Logout** — Secure session termination

---

## 🛠️ Tech Stack

### Frontend

| Technology                | Purpose                                |
| ------------------------- | -------------------------------------- |
| **React 19**              | UI framework with hooks                |
| **Vite 6**                | Lightning-fast dev server & build tool |
| **Vanilla CSS**           | Custom responsive styling              |
| **Lottie React**          | Animated loading screen                |
| **react-h5-audio-player** | Audio playback component               |
| **zxcvbn**                | Password strength estimation           |
| **Firebase Hosting**      | Production deployment                  |

### Backend

| Technology              | Purpose                        |
| ----------------------- | ------------------------------ |
| **Spring Boot 3.5**     | REST API framework             |
| **Java 21**             | Runtime environment            |
| **Spring Security**     | Authentication & authorization |
| **Spring Data MongoDB** | Database ORM layer             |
| **JWT (jjwt 0.12.5)**   | Token-based authentication     |
| **OAuth2 Client**       | Google & GitHub login          |
| **Maven**               | Build & dependency management  |

### Database & Infrastructure

| Technology        | Purpose                          |
| ----------------- | -------------------------------- |
| **MongoDB Atlas** | Cloud-hosted NoSQL database      |
| **Docker**        | Containerized backend deployment |
| **Render**        | Backend cloud hosting            |
| **Firebase**      | Frontend static hosting          |

---

## 🏗️ Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                        Client                           │
│              React 19 + Vite (SPA)                      │
│         Hosted on Firebase Hosting                      │
└──────────────────────┬──────────────────────────────────┘
                       │  HTTPS REST API
                       ▼
┌─────────────────────────────────────────────────────────┐
│                    Backend API                          │
│             Spring Boot 3.5 (Java 21)                   │
│           Hosted on Render (Docker)                     │
│                                                         │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│   │ Controllers  │  │  Services    │  │   Security   │  │
│   │  • Song      │  │  • Song      │  │  • JWT       │  │
│   │  • Artist    │  │  • Artist    │  │  • OAuth2    │  │
│   │  • Collection│  │  • Collection│  │  • CORS      │  │
│   │  • User      │  │  • User      │  │  • Filters   │  │
│   │  • Search    │  │  • Search    │  │              │  │
│   │  • Private   │  │  • Private   │  │              │  │
│   │    Collection│  │    Collection│  │              │  │
│   └──────────────┘  └──────────────┘  └──────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │  MongoDB Driver
                       ▼
┌─────────────────────────────────────────────────────────┐
│                   MongoDB Atlas                         │
│                                                         │
│   ┌──────────┐ ┌───────────┐ ┌────────────┐             │
│   │  Songs   │ │Collections│ │   Users    │             │
│   ├──────────┤ ├───────────┤ ├────────────┤             │
│   │  Artists │ │  Private  │ │            │             │
│   │          │ │Collections│ │            │             │
│   └──────────┘ └───────────┘ └────────────┘             │
└─────────────────────────────────────────────────────────┘
\`\`\`

---

## 📂 Project Structure

\`\`\`
Tunez/
├── 📁 Tunez/                          # Backend (Spring Boot)
│   ├── 📁 src/main/java/com/muthu/Tunez/
│   │   ├── 📁 controller/            # REST API endpoints
│   │   │   ├── SongsController.java
│   │   │   ├── ArtistsController.java
│   │   │   ├── CollectionController.java
│   │   │   ├── PrivateCollectionController.java
│   │   │   ├── SearchController.java
│   │   │   └── UserController.java
│   │   ├── 📁 service/               # Business logic
│   │   │   ├── SongsService.java
│   │   │   ├── ArtistsService.java
│   │   │   ├── CollectionsService.java
│   │   │   ├── PrivateCollectionService.java
│   │   │   ├── SearchService.java
│   │   │   ├── UserService.java
│   │   │   ├── JWTService.java
│   │   │   └── MyUserDetailsService.java
│   │   ├── 📁 model/                 # Data models
│   │   │   ├── Songs.java
│   │   │   ├── Artists.java
│   │   │   ├── Collections.java
│   │   │   ├── PrivateCollection.java
│   │   │   ├── Users.java
│   │   │   └── UserPrincipal.java
│   │   ├── 📁 Repo/                  # MongoDB repositories
│   │   │   ├── SongsRepo.java
│   │   │   ├── ArtistsRepo.java
│   │   │   ├── CollectionsRepo.java
│   │   │   ├── PrivateCollectionRepo.java
│   │   │   └── UsersRepo.java
│   │   └── 📁 configuration/         # Security & config
│   │       ├── AuthConfiguration.java
│   │       ├── CorsConfiguration.java
│   │       ├── JwtFilter.java
│   │       ├── JwtAuthFilter.java
│   │       └── OAuth2SuccessHandler.java
│   ├── Dockerfile
│   └── pom.xml
│
├── 📁 frount/                         # Frontend (React + Vite)
│   ├── 📁 src/
│   │   ├── 📁 Components/
│   │   │   ├── Land.jsx               # Main layout shell
│   │   │   ├── Head.jsx               # Header & search bar
│   │   │   ├── Menu.jsx               # Sidebar navigation
│   │   │   ├── Content.jsx            # Page router & state manager
│   │   │   ├── Home.jsx               # Homepage with quick picks
│   │   │   ├── Explorer.jsx           # Explore page
│   │   │   ├── Category.jsx           # Category filters
│   │   │   ├── Search.jsx             # Search results page
│   │   │   ├── PlaySong.jsx           # Music player component
│   │   │   ├── AudioSlider.jsx        # Custom audio progress bar
│   │   │   ├── Song.jsx               # Song card component
│   │   │   ├── Collection.jsx         # Collection card component
│   │   │   ├── Collections.jsx        # Collections page
│   │   │   ├── CollectionsViewer.jsx   # Collection detail viewer
│   │   │   ├── PrivateCollections.jsx  # Private playlist component
│   │   │   ├── Artist.jsx             # Artist card component
│   │   │   ├── Login.jsx              # Auth page (login/register)
│   │   │   ├── Setings.jsx            # User settings page
│   │   │   └── Loader.jsx             # Loading animation
│   │   ├── 📁 assets/                 # Images, icons, animations
│   │   ├── App.jsx                    # Root component
│   │   └── main.jsx                   # Entry point
│   ├── .env.development               # Dev API URL
│   ├── .env.production                # Prod API URL
│   ├── firebase.json                  # Firebase hosting config
│   ├── vite.config.js
│   └── package.json
│
├── Tunez-Data.xlsx                     # Song metadata spreadsheet
└── README.md
\`\`\`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **Java** 21
- **Maven** 3.9+
- **MongoDB** Atlas cluster (or local MongoDB)

### 1️⃣ Clone the Repository

\`\`\`bash
git clone https://github.com/muthukumaranarc/Tunez.git
cd Tunez
\`\`\`

### 2️⃣ Backend Setup

\`\`\`bash
cd Tunez

# Configure your MongoDB and OAuth credentials in:
# src/main/resources/application.properties

# Build and run
./mvnw spring-boot:run
\`\`\`

The backend will start on **http://localhost:7001**

### 3️⃣ Frontend Setup

\`\`\`bash
cd frount

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

The frontend will start on **http://localhost:5173**

### 4️⃣ Environment Variables

**Frontend** (\`frount/.env.development\`):

\`\`\`env
VITE_API_URL=http://localhost:7001
\`\`\`

**Backend** (\`Tunez/src/main/resources/application.properties\`):

\`\`\`properties
spring.data.mongodb.uri=<your-mongodb-connection-string>
spring.data.mongodb.database=Tunez

# OAuth2 credentials
spring.security.oauth2.client.registration.google.client-id=<your-google-client-id>
spring.security.oauth2.client.registration.google.client-secret=<your-google-secret>
spring.security.oauth2.client.registration.github.client-id=<your-github-client-id>
spring.security.oauth2.client.registration.github.client-secret=<your-github-secret>
\`\`\`

---

## 📡 API Endpoints

### Songs

| Method   | Endpoint                | Description               |
| -------- | ----------------------- | ------------------------- |
| \`GET\`    | \`/song/get/all/{limit}\` | Get all songs (paginated) |
| \`GET\`    | \`/song/get/{id}\`        | Get song by ID            |
| \`GET\`    | \`/song/play/{id}\`       | Stream audio by song ID   |
| \`GET\`    | \`/song/get/image/{id}\`  | Get song cover art        |
| \`GET\`    | \`/song/shuffle/{input}\` | Shuffle songs by input    |
| \`POST\`   | \`/song/create\`          | Create a new song         |
| \`DELETE\` | \`/song/delete/{id}\`     | Delete a song             |

### Collections

| Method | Endpoint                        | Description               |
| ------ | ------------------------------- | ------------------------- |
| \`GET\`  | \`/collection/get/all/{limit}\`   | Get all collections       |
| \`GET\`  | \`/collection/get/DailyBeat\`     | Get Daily Beat collection |
| \`GET\`  | \`/collection/get/NewCollection\` | Get newest collection     |

### Artists

| Method | Endpoint                  | Description     |
| ------ | ------------------------- | --------------- |
| \`GET\`  | \`/artist/get/all/{limit}\` | Get all artists |

### Search

| Method | Endpoint          | Description                         |
| ------ | ----------------- | ----------------------------------- |
| \`GET\`  | \`/search/{query}\` | Search songs, collections & artists |

### Private Collections 🔒

| Method | Endpoint                      | Description                    |
| ------ | ----------------------------- | ------------------------------ |
| \`GET\`  | \`/privateCollection/get/all\`  | Get user's private collections |
| \`POST\` | \`/privateCollection/create\`   | Create a private collection    |
| \`POST\` | \`/privateCollection/add/song\` | Add song to private collection |

### Users 🔒

| Method   | Endpoint              | Description             |
| -------- | --------------------- | ----------------------- |
| \`POST\`   | \`/user/create\`        | Register new user       |
| \`POST\`   | \`/user/loginUser\`     | Login with credentials  |
| \`GET\`    | \`/user/get/user\`      | Get current user info   |
| \`GET\`    | \`/user/profile-pic\`   | Get profile picture URL |
| \`DELETE\` | \`/user/delete\`        | Delete user account     |
| \`DELETE\` | \`/user/delete/cookie\` | Logout (clear session)  |

> 🔒 = Requires authentication (JWT cookie)

---

## 🐳 Deployment

### Docker (Backend)

\`\`\`bash
cd Tunez

# Build the JAR
./mvnw clean package -DskipTests

# Build Docker image
docker build -t tunez-backend .

# Run container
docker run -p 7001:7001 tunez-backend
\`\`\`

### Firebase (Frontend)

\`\`\`bash
cd frount

# Build for production
npm run build

# Deploy to Firebase
firebase deploy
\`\`\`

### Production Architecture

| Component | Platform         | URL                       |
| --------- | ---------------- | ------------------------- |
| Frontend  | Firebase Hosting | \`tunez-online.web.app\`    |
| Backend   | Render (Docker)  | \`tunez-2frv.onrender.com\` |
| Database  | MongoDB Atlas    | Cloud cluster             |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (\`git checkout -b feature/amazing-feature\`)
3. **Commit** your changes (\`git commit -m 'Add amazing feature'\`)
4. **Push** to the branch (\`git push origin feature/amazing-feature\`)
5. **Open** a Pull Request

---

## 👨‍💻 Developer

<p align="center">
  <strong>Muthukumaran</strong><br/>
  <a href="https://muthukumaran-portfolio.web.app">📄 Portfolio</a> •
  <a href="https://github.com/muthukumaranarc">🐙 GitHub</a>
</p>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with ❤️ by Muthukumaran</sub><br/>
  <sub>⭐ Star this repo if you found it useful!</sub>
</p>
`,Fi=`# Business Consulting Landing Page

A modern and responsive business consulting landing page built with React.js. This project was created as a UI prototype and design reference for potential freelance clients.

## 📌 About the Project

This is **not a full-stack application**. It is a frontend-only prototype built using **React.js**.

All sections and components in this project use **dummy/static content** and are intended solely to showcase the UI design, layout, responsiveness, and reusable component structure.

The purpose of this project is to serve as a **reference portfolio project** that demonstrates my frontend development skills to freelance clients.

## ✨ Features

- Modern business consulting website UI
- Responsive design for all devices
- Component-based React architecture
- Reusable UI components
- Professional landing page layout
- Smooth and clean user experience

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## 📂 Project Purpose

This repository is intended for:

- Portfolio showcase
- Freelance client demonstrations
- UI/UX inspiration
- React component architecture practice

> **Note:** This project is a frontend prototype only. It does not include a backend, authentication, database, or real business functionality.

## 📄 License

This project was created for educational, portfolio, and freelance showcase purposes.
`,_i=`# Furniture Landing Page

A modern and responsive furniture landing page built with React.js. This project was created as a UI prototype and design reference for potential freelance clients.

## About the Project

This is **not a full-stack application**. It is a frontend-only prototype built using **React.js**.

All sections and components in this project use **dummy/static content** and are intended only to showcase the UI design, layout, responsiveness, and reusable component structure.

The main purpose of this project is to serve as a **reference portfolio project** that demonstrates my frontend development skills to freelance clients.

## Features

- Modern furniture website UI
- Responsive design for all devices
- Component-based React architecture
- Reusable UI components
- Clean and elegant landing page layout
- Smooth user experience

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## Project Purpose

This repository is intended for:

- Portfolio showcase
- Freelance client demonstrations
- UI/UX inspiration
- React component architecture practice

> **Note:** This project is a frontend prototype only. It does not include a backend, authentication, database, or real business functionality.

## License

This project was created for educational, portfolio, and freelance showcase purposes.
`,Li=`\`\`\`
███╗   ███╗██╗   ██╗████████╗██╗  ██╗██╗   ██╗██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗  █████╗ ███╗   ██╗
████╗ ████║██║   ██║╚══██╔══╝██║  ██║██║   ██║██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗██╔══██╗████╗  ██║
██╔████╔██║██║   ██║   ██║   ███████║██║   ██║█████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝███████║██╔██╗ ██║
██║╚██╔╝██║██║   ██║   ██║   ██╔══██║██║   ██║██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗██╔══██║██║╚██╗██║
██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██║██║ ╚████║
╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
\`\`\`
<h3 align="center">
Full Stack Java Developer | React JS Developer | Spring Boot Developer
</h3>

<p align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=24&pause=1000&color=E14E1D&center=true&vCenter=true&random=false&width=700&lines=Full+Stack+Java+Developer;Spring+Boot+Developer;React+JS+Developer;Building+Modern+Web+Applications;Always+Learning+New+Technologies"/>

</p>

<p align="center">

<a href="https://linkedin.com/in/muthukumaranarc00">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin"/>
</a>

<a href="mailto:muthukumaranarc00@gmail.com">
<img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail"/>
</a>

<a href="https://leetcode.com/u/Jq4H1BglTL">
<img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black"/>
</a>

<a href="https://muthukumaran-portfolio.web.app">
<img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=googlechrome"/>
</a>

</p>

---

# 💫 About Me

<img align="right" width="320" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Fsazk1cHM5aXF4dmZhNXV6Ync5aGV2cmhuMW5iOG1hdGpoc3AyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MeJgB3yMMwIaHmKD4z/giphy.gif"/>

I'm an aspiring **Full Stack Java Developer** passionate about building modern, scalable, and user-friendly web applications.

#### 🎓 **B.Tech AIDS Student**

#### 💎 **Specializing in**

- Java
- Spring Boot
- React JS
- REST APIs
- MongoDB
- MySQL

#### 🌱 **Currently Learning**

\`\`\`text
Spring Security
JWT Authentication
Docker
AWS
Microservices
CI/CD
Kubernetes (Basics)
\`\`\`

#### 🎯 **Goal**

To become a Software Engineer at a top product-based company while continuously improving my problem-solving and development skills.


---

# 💻 Tech Stack

##### Languages 
<a href="https://www.google.com/search?q=Java+programming+language" target="_blank"><img src="https://skillicons.dev/icons?i=java"/></a>
<a href="https://www.google.com/search?q=JavaScript" target="_blank"><img src="https://skillicons.dev/icons?i=js"/></a>
<a href="https://www.google.com/search?q=Python+programming" target="_blank"><img src="https://skillicons.dev/icons?i=python"/></a>

##### Frontend 
<a href="https://www.google.com/search?q=React+JS" target="_blank"><img src="https://skillicons.dev/icons?i=react"/></a>
<a href="https://www.google.com/search?q=Vite+build+tool" target="_blank"><img src="https://skillicons.dev/icons?i=vite"/></a>
<a href="https://www.google.com/search?q=Tailwind+CSS" target="_blank"><img src="https://skillicons.dev/icons?i=tailwind"/></a>

##### Backend
<a href="https://www.google.com/search?q=Spring+Boot+framework" target="_blank"><img src="https://skillicons.dev/icons?i=spring" alt="Spring"/></a>
<a href="https://www.google.com/search?q=Hibernate+ORM" target="_blank"><img src="https://skillicons.dev/icons?i=hibernate" alt="Hibernate"/></a>
<a href="https://www.google.com/search?q=Apache+Maven" target="_blank"><img src="https://skillicons.dev/icons?i=maven" alt="Maven"/></a>

##### Database
<a href="https://www.google.com/search?q=MySQL+database" target="_blank"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL"/></a>
<a href="https://www.google.com/search?q=MongoDB" target="_blank"><img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB"/></a>

##### Tools
<a href="https://www.google.com/search?q=Git+version+control" target="_blank"><img src="https://skillicons.dev/icons?i=git" alt="Git"/></a>
<a href="https://www.google.com/search?q=GitHub" target="_blank"><img src="https://skillicons.dev/icons?i=github" alt="GitHub"/></a>
<a href="https://www.google.com/search?q=Visual+Studio+Code" target="_blank"><img src="https://skillicons.dev/icons?i=vscode" alt="VSCode"/></a>
<a href="https://www.google.com/search?q=IntelliJ+IDEA" target="_blank"><img src="https://skillicons.dev/icons?i=idea" alt="IntelliJ IDEA"/></a>
<a href="https://www.google.com/search?q=Google+Firebase" target="_blank"><img src="https://skillicons.dev/icons?i=firebase" alt="Firebase"/></a>
<a href="https://www.google.com/search?q=Postman+API" target="_blank"><img src="https://skillicons.dev/icons?i=postman" alt="Postman"/></a>
<a href="https://www.google.com/search?q=Figma+design+tool" target="_blank"><img src="https://skillicons.dev/icons?i=figma" alt="Figma"/></a>


---

# 📌 Currently Working On

- 🚀 Full Stack Web Applications
- ☕ Advanced Spring Boot
- 📚 Data Structures & Algorithms
- ☁ Cloud Deployment
- 🐳 Docker
- ⚡ System Design

---

# 💡 Quote I Live By

> "Success isn't about being the smartest. It's about showing up consistently, learning continuously, and never giving up."

---

# 📈 Goals for 2026

- ✅ Master Spring Boot
- ✅ Build impactful Full Stack Projects
- ✅ Solve 500+ LeetCode Problems
- ✅ Contribute to Open Source
- ✅ Earn AWS Certification
- ✅ Land a Software Engineering Internship
- ✅ Grow as a Full Stack Developer

---

<div align="center">

### Thanks for visiting my profile! 👋

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6a11cb,100:2575fc&height=120&section=footer"/>

</div>
`,Ri=`# Restaurant Landing Page

A modern and responsive restaurant landing page built with React.js. This project was created as a UI prototype and design reference for potential freelance clients.

## 📌 About the Project

This is **not a full-stack application**. It is a frontend-only prototype built using **React.js**.

All sections and components in this project use **dummy/static content** and are intended solely to showcase the UI design, layout, responsiveness, and reusable component structure.

The purpose of this project is to serve as a **reference portfolio project** that demonstrates my frontend development skills to freelance clients.

## ✨ Features

- Modern restaurant website UI
- Responsive design for all screen sizes
- Component-based React architecture
- Reusable UI components
- Attractive landing page layout
- Smooth user experience

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## 📂 Project Purpose

This repository is intended for:

- Portfolio showcase
- Freelance client demonstrations
- UI/UX inspiration
- React component architecture practice

> **Note:** This project is a frontend prototype only. It does not include a backend, authentication, database, or real business functionality.

## 📄 License

This project was created for educational, portfolio, and freelance showcase purposes.
`,Mi=`# Textile Landing Page

A modern and responsive textile landing page built with React.js. This project was created as a UI prototype and design reference for potential freelance clients.

## About the Project

This is **not a full-stack application**. It is a frontend-only prototype built using **React.js**.

All sections and components in this project use **dummy/static content** and are intended only to showcase the UI design, layout, responsiveness, and reusable component structure.

The main purpose of this project is to serve as a **reference portfolio project** that demonstrates my frontend development skills to freelance clients.

## Features

- Modern textile website UI
- Responsive design for all devices
- Component-based React architecture
- Reusable UI components
- Clean and professional landing page layout
- Smooth user experience

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## Project Purpose

This repository is intended for:

- Portfolio showcase
- Freelance client demonstrations
- UI/UX inspiration
- React component architecture practice

> **Note:** This project is a frontend prototype only. It does not include a backend, authentication, database, or real business functionality.

## License

This project was created for educational, portfolio, and freelance showcase purposes.
`,zi=`# Travel Agency Landing Page

A modern and responsive travel agency landing page built with React.js. This project was created as a UI prototype and design reference for potential freelance clients.

## 📌 About the Project

This is **not a full-stack application**. It is a frontend-only prototype built using **React.js**.

All sections and components in this project use **dummy/static content** and are intended solely to showcase the overall UI design, layout, responsiveness, and component structure.

The primary purpose of this project is to serve as a **reference portfolio project** that demonstrates my frontend development skills to freelance clients.

## ✨ Features

- Modern and clean UI
- Fully responsive design
- Component-based architecture
- Smooth layout and user experience
- Reusable React components
- Prototype suitable for client demonstrations

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## 📂 Project Purpose

This repository is intended for:

- Portfolio showcase
- Freelance client demonstrations
- UI/UX reference
- React component architecture practice

It is **not intended for production use** and does not include backend services, authentication, databases, or real business functionality.

## 📄 License

This project is created for educational and portfolio purposes.
`;function Ni(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Bi=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Oi=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Hi={};function kt(e,t){return(Hi.jsx?Oi:Bi).test(e)}const Ui=/[ \t\n\f\r]/g;function qi(e){return typeof e=="object"?e.type==="text"?xt(e.value):!1:xt(e)}function xt(e){return e.replace(Ui,"")===""}class Xe{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Xe.prototype.normal={};Xe.prototype.property={};Xe.prototype.space=void 0;function pr(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Xe(n,r,t)}function Mn(e){return e.toLowerCase()}class ne{constructor(t,n){this.attribute=n,this.property=t}}ne.prototype.attribute="";ne.prototype.booleanish=!1;ne.prototype.boolean=!1;ne.prototype.commaOrSpaceSeparated=!1;ne.prototype.commaSeparated=!1;ne.prototype.defined=!1;ne.prototype.mustUseProperty=!1;ne.prototype.number=!1;ne.prototype.overloadedBoolean=!1;ne.prototype.property="";ne.prototype.spaceSeparated=!1;ne.prototype.space=void 0;let Vi=0;const z=Ae(),J=Ae(),zn=Ae(),A=Ae(),W=Ae(),_e=Ae(),re=Ae();function Ae(){return 2**++Vi}const Nn=Object.freeze(Object.defineProperty({__proto__:null,boolean:z,booleanish:J,commaOrSpaceSeparated:re,commaSeparated:_e,number:A,overloadedBoolean:zn,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),bn=Object.keys(Nn);class Wn extends ne{constructor(t,n,r,i){let l=-1;if(super(t,n),wt(this,"space",i),typeof r=="number")for(;++l<bn.length;){const o=bn[l];wt(this,bn[l],(r&Nn[o])===Nn[o])}}}Wn.prototype.defined=!0;function wt(e,t,n){n&&(e[t]=n)}function Re(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const l=new Wn(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),t[r]=l,n[Mn(r)]=r,n[Mn(l.attribute)]=r}return new Xe(t,n,e.space)}const hr=Re({properties:{ariaActiveDescendant:null,ariaAtomic:J,ariaAutoComplete:null,ariaBusy:J,ariaChecked:J,ariaColCount:A,ariaColIndex:A,ariaColSpan:A,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:J,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:J,ariaFlowTo:W,ariaGrabbed:J,ariaHasPopup:null,ariaHidden:J,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:A,ariaLive:null,ariaModal:J,ariaMultiLine:J,ariaMultiSelectable:J,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:A,ariaPressed:J,ariaReadOnly:J,ariaRelevant:null,ariaRequired:J,ariaRoleDescription:W,ariaRowCount:A,ariaRowIndex:A,ariaRowSpan:A,ariaSelected:J,ariaSetSize:A,ariaSort:null,ariaValueMax:A,ariaValueMin:A,ariaValueNow:A,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function fr(e,t){return t in e?e[t]:t}function dr(e,t){return fr(e,t.toLowerCase())}const Gi=Re({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_e,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:z,allowPaymentRequest:z,allowUserMedia:z,alt:null,as:null,async:z,autoCapitalize:null,autoComplete:W,autoFocus:z,autoPlay:z,blocking:W,capture:null,charSet:null,checked:z,cite:null,className:W,cols:A,colSpan:null,content:null,contentEditable:J,controls:z,controlsList:W,coords:A|_e,crossOrigin:null,data:null,dateTime:null,decoding:null,default:z,defer:z,dir:null,dirName:null,disabled:z,download:zn,draggable:J,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:z,formTarget:null,headers:W,height:A,hidden:zn,high:A,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:z,inputMode:null,integrity:null,is:null,isMap:z,itemId:null,itemProp:W,itemRef:W,itemScope:z,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:z,low:A,manifest:null,max:null,maxLength:A,media:null,method:null,min:null,minLength:A,multiple:z,muted:z,name:null,nonce:null,noModule:z,noValidate:z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:z,optimum:A,pattern:null,ping:W,placeholder:null,playsInline:z,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:z,referrerPolicy:null,rel:W,required:z,reversed:z,rows:A,rowSpan:A,sandbox:W,scope:null,scoped:z,seamless:z,selected:z,shadowRootClonable:z,shadowRootDelegatesFocus:z,shadowRootMode:null,shape:null,size:A,sizes:null,slot:null,span:A,spellCheck:J,src:null,srcDoc:null,srcLang:null,srcSet:null,start:A,step:null,style:null,tabIndex:A,target:null,title:null,translate:null,type:null,typeMustMatch:z,useMap:null,value:J,width:A,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:A,borderColor:null,bottomMargin:A,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:z,declare:z,event:null,face:null,frame:null,frameBorder:null,hSpace:A,leftMargin:A,link:null,longDesc:null,lowSrc:null,marginHeight:A,marginWidth:A,noResize:z,noHref:z,noShade:z,noWrap:z,object:null,profile:null,prompt:null,rev:null,rightMargin:A,rules:null,scheme:null,scrolling:J,standby:null,summary:null,text:null,topMargin:A,valueType:null,version:null,vAlign:null,vLink:null,vSpace:A,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:z,disableRemotePlayback:z,prefix:null,property:null,results:A,security:null,unselectable:null},space:"html",transform:dr}),$i=Re({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:re,accentHeight:A,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:A,amplitude:A,arabicForm:null,ascent:A,attributeName:null,attributeType:null,azimuth:A,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:A,by:null,calcMode:null,capHeight:A,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:A,diffuseConstant:A,direction:null,display:null,dur:null,divisor:A,dominantBaseline:null,download:z,dx:null,dy:null,edgeMode:null,editable:null,elevation:A,enableBackground:null,end:null,event:null,exponent:A,externalResourcesRequired:null,fill:null,fillOpacity:A,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_e,g2:_e,glyphName:_e,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:A,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:A,horizOriginX:A,horizOriginY:A,id:null,ideographic:A,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:A,k:A,k1:A,k2:A,k3:A,k4:A,kernelMatrix:re,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:A,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:A,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:A,overlineThickness:A,paintOrder:null,panose1:null,path:null,pathLength:A,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:A,pointsAtY:A,pointsAtZ:A,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:re,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:re,rev:re,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:re,requiredFeatures:re,requiredFonts:re,requiredFormats:re,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:A,specularExponent:A,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:A,strikethroughThickness:A,string:null,stroke:null,strokeDashArray:re,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:A,strokeOpacity:A,strokeWidth:null,style:null,surfaceScale:A,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:re,tabIndex:A,tableValues:null,target:null,targetX:A,targetY:A,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:re,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:A,underlineThickness:A,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:A,values:null,vAlphabetic:A,vMathematical:A,vectorEffect:null,vHanging:A,vIdeographic:A,version:null,vertAdvY:A,vertOriginX:A,vertOriginY:A,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:A,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fr}),mr=Re({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),gr=Re({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:dr}),yr=Re({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Wi={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ji=/[A-Z]/g,vt=/-[a-z]/g,Qi=/^data[-\w.:]+$/i;function Xi(e,t){const n=Mn(t);let r=t,i=ne;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Qi.test(t)){if(t.charAt(4)==="-"){const l=t.slice(5).replace(vt,Ki);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=t.slice(4);if(!vt.test(l)){let o=l.replace(Ji,Yi);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Wn}return new i(r,t)}function Yi(e){return"-"+e.toLowerCase()}function Ki(e){return e.charAt(1).toUpperCase()}const Zi=pr([hr,Gi,mr,gr,yr],"html"),Jn=pr([hr,$i,mr,gr,yr],"svg");function eo(e){return e.join(" ").trim()}var je={},kn,St;function no(){if(St)return kn;St=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,a=/^\s+|\s+$/g,s=`
`,u="/",p="*",c="",f="comment",h="declaration";function y(C,g){if(typeof C!="string")throw new TypeError("First argument must be a string");if(!C)return[];g=g||{};var E=1,v=1;function _(F){var P=F.match(t);P&&(E+=P.length);var V=F.lastIndexOf(s);v=~V?F.length-V:v+F.length}function L(){var F={line:E,column:v};return function(P){return P.position=new k(F),O(),P}}function k(F){this.start=F,this.end={line:E,column:v},this.source=g.source}k.prototype.content=C;function R(F){var P=new Error(g.source+":"+E+":"+v+": "+F);if(P.reason=F,P.filename=g.source,P.line=E,P.column=v,P.source=C,!g.silent)throw P}function U(F){var P=F.exec(C);if(P){var V=P[0];return _(V),C=C.slice(V.length),P}}function O(){U(n)}function b(F){var P;for(F=F||[];P=I();)P!==!1&&F.push(P);return F}function I(){var F=L();if(!(u!=C.charAt(0)||p!=C.charAt(1))){for(var P=2;c!=C.charAt(P)&&(p!=C.charAt(P)||u!=C.charAt(P+1));)++P;if(P+=2,c===C.charAt(P-1))return R("End of comment missing");var V=C.slice(2,P-2);return v+=2,_(V),C=C.slice(P),v+=2,F({type:f,comment:V})}}function j(){var F=L(),P=U(r);if(P){if(I(),!U(i))return R("property missing ':'");var V=U(l),Q=F({type:h,property:S(P[0].replace(e,c)),value:V?S(V[0].replace(e,c)):c});return U(o),Q}}function q(){var F=[];b(F);for(var P;P=j();)P!==!1&&(F.push(P),b(F));return F}return O(),q()}function S(C){return C?C.replace(a,c):c}return kn=y,kn}var Ct;function to(){if(Ct)return je;Ct=1;var e=je&&je.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(je,"__esModule",{value:!0}),je.default=n;const t=e(no());function n(r,i){let l=null;if(!r||typeof r!="string")return l;const o=(0,t.default)(r),a=typeof i=="function";return o.forEach(s=>{if(s.type!=="declaration")return;const{property:u,value:p}=s;a?i(u,p,s):p&&(l=l||{},l[u]=p)}),l}return je}var Oe={},Et;function ro(){if(Et)return Oe;Et=1,Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,l=function(u){return!u||n.test(u)||e.test(u)},o=function(u,p){return p.toUpperCase()},a=function(u,p){return"".concat(p,"-")},s=function(u,p){return p===void 0&&(p={}),l(u)?u:(u=u.toLowerCase(),p.reactCompat?u=u.replace(i,a):u=u.replace(r,a),u.replace(t,o))};return Oe.camelCase=s,Oe}var He,At;function io(){if(At)return He;At=1;var e=He&&He.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},t=e(to()),n=ro();function r(i,l){var o={};return!i||typeof i!="string"||(0,t.default)(i,function(a,s){a&&s&&(o[(0,n.camelCase)(a,l)]=s)}),o}return r.default=r,He=r,He}var oo=io();const lo=cr(oo),br=kr("end"),Qn=kr("start");function kr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function ao(e){const t=Qn(e),n=br(e);if(t&&n)return{start:t,end:n}}function Ge(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Tt(e.position):"start"in e||"end"in e?Tt(e):"line"in e||"column"in e?Bn(e):""}function Bn(e){return Pt(e&&e.line)+":"+Pt(e&&e.column)}function Tt(e){return Bn(e&&e.start)+"-"+Bn(e&&e.end)}function Pt(e){return e&&typeof e=="number"?e:1}class K extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",l={},o=!1;if(n&&("line"in n&&"column"in n?l={place:n}:"start"in n&&"end"in n?l={place:n}:"type"in n?l={ancestors:[n],place:n.position}:l={...n}),typeof t=="string"?i=t:!l.cause&&t&&(o=!0,i=t.message,l.cause=t),!l.ruleId&&!l.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){const s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}const a=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Ge(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}K.prototype.file="";K.prototype.name="";K.prototype.reason="";K.prototype.message="";K.prototype.stack="";K.prototype.column=void 0;K.prototype.line=void 0;K.prototype.ancestors=void 0;K.prototype.cause=void 0;K.prototype.fatal=void 0;K.prototype.place=void 0;K.prototype.ruleId=void 0;K.prototype.source=void 0;const Xn={}.hasOwnProperty,so=new Map,uo=/[A-Z]/g,co=new Set(["table","tbody","thead","tfoot","tr"]),po=new Set(["td","th"]),xr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ho(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=wo(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=xo(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Jn:Zi,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},l=wr(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function wr(e,t,n){if(t.type==="element")return fo(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return mo(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return yo(e,t,n);if(t.type==="mdxjsEsm")return go(e,t);if(t.type==="root")return bo(e,t,n);if(t.type==="text")return ko(e,t)}function fo(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Jn,e.schema=i),e.ancestors.push(t);const l=Sr(e,t.tagName,!1),o=vo(e,t);let a=Kn(e,t);return co.has(t.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!qi(s):!0})),vr(e,o,l,t),Yn(o,a),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function mo(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Je(e,t.position)}function go(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Je(e,t.position)}function yo(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Jn,e.schema=i),e.ancestors.push(t);const l=t.name===null?e.Fragment:Sr(e,t.name,!0),o=So(e,t),a=Kn(e,t);return vr(e,o,l,t),Yn(o,a),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}function bo(e,t,n){const r={};return Yn(r,Kn(e,t)),e.create(t,e.Fragment,r,n)}function ko(e,t){return t.value}function vr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Yn(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function xo(e,t,n){return r;function r(i,l,o,a){const u=Array.isArray(o.children)?n:t;return a?u(l,o,a):u(l,o)}}function wo(e,t){return n;function n(r,i,l,o){const a=Array.isArray(l.children),s=Qn(r);return t(i,l,o,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function vo(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Xn.call(t.properties,i)){const l=Co(e,i,t.properties[i]);if(l){const[o,a]=l;e.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&po.has(t.tagName)?r=a:n[o]=a}}if(r){const l=n.style||(n.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function So(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const o=l.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Je(e,t.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,l=e.evaluater.evaluateExpression(a.expression)}else Je(e,t.position);else l=r.value===null?!0:r.value;n[i]=l}return n}function Kn(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:so;for(;++r<t.children.length;){const l=t.children[r];let o;if(e.passKeys){const s=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const a=wr(e,l,o);a!==void 0&&n.push(a)}return n}function Co(e,t,n){const r=Xi(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ni(n):eo(n)),r.property==="style"){let i=typeof n=="object"?n:Eo(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Ao(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Wi[r.property]||r.property:r.attribute,n]}}function Eo(e,t){try{return lo(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new K("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=xr+"#cannot-parse-style-attribute",i}}function Sr(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let l=-1,o;for(;++l<i.length;){const a=kt(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(l&&a.type==="Literal"),optional:!1}:a}r=o}else r=kt(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Xn.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Je(e)}function Je(e,t){const n=new K("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=xr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ao(e){const t={};let n;for(n in e)Xn.call(e,n)&&(t[To(n)]=e[n]);return t}function To(e){let t=e.replace(uo,Po);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Po(e){return"-"+e.toLowerCase()}const xn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Io={};function Zn(e,t){const n=Io,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Cr(e,r,i)}function Cr(e,t,n){if(jo(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return It(e.children,t,n)}return Array.isArray(e)?It(e,t,n):""}function It(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Cr(e[i],t,n);return r.join("")}function jo(e){return!!(e&&typeof e=="object")}const jt=document.createElement("i");function et(e){const t="&"+e+";";jt.innerHTML=t;const n=jt.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ie(e,t,n,r){const i=e.length;let l=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)o=r.slice(l,l+1e4),o.unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function oe(e,t){return e.length>0?(ie(e,e.length,0,t),e):t}const Dt={}.hasOwnProperty;function Er(e){const t={};let n=-1;for(;++n<e.length;)Do(t,e[n]);return t}function Do(e,t){let n;for(n in t){const i=(Dt.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];let o;if(l)for(o in l){Dt.call(i,o)||(i[o]=[]);const a=l[o];Fo(i[o],Array.isArray(a)?a:a?[a]:[])}}}function Fo(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ie(e,0,0,r)}function Ar(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ce(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Z=we(/[A-Za-z]/),Y=we(/[\dA-Za-z]/),_o=we(/[#-'*+\--9=?A-Z^-~]/);function un(e){return e!==null&&(e<32||e===127)}const On=we(/\d/),Lo=we(/[\dA-Fa-f]/),Ro=we(/[!-/:-@[-`{-~]/);function D(e){return e!==null&&e<-2}function $(e){return e!==null&&(e<0||e===32)}function N(e){return e===-2||e===-1||e===32}const fn=we(new RegExp("\\p{P}|\\p{S}","u")),Ee=we(/\s/);function we(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Me(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const l=e.charCodeAt(n);let o="";if(l===37&&Y(e.charCodeAt(n+1))&&Y(e.charCodeAt(n+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const a=e.charCodeAt(n+1);l<56320&&a>56319&&a<57344?(o=String.fromCharCode(l,a),i=1):o="�"}else o=String.fromCharCode(l);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function H(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(s){return N(s)?(e.enter(n),a(s)):t(s)}function a(s){return N(s)&&l++<i?(e.consume(s),a):(e.exit(n),t(s))}}const Mo={tokenize:zo};function zo(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),H(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),l(a)}function l(a){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(a)}function o(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return D(a)?(e.consume(a),e.exit("chunkText"),l):(e.consume(a),o)}}const No={tokenize:Bo},Ft={tokenize:Oo};function Bo(e){const t=this,n=[];let r=0,i,l,o;return a;function a(v){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,s,u)(v)}return u(v)}function s(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&E();const _=t.events.length;let L=_,k;for(;L--;)if(t.events[L][0]==="exit"&&t.events[L][1].type==="chunkFlow"){k=t.events[L][1].end;break}g(r);let R=_;for(;R<t.events.length;)t.events[R][1].end={...k},R++;return ie(t.events,L+1,0,t.events.slice(_)),t.events.length=R,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return y(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ft,p,c)(v)}function p(v){return i&&E(),g(r),f(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,y(v)}function f(v){return t.containerState={},e.attempt(Ft,h,y)(v)}function h(v){return r++,n.push([t.currentConstruct,t.containerState]),f(v)}function y(v){if(v===null){i&&E(),g(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),S(v)}function S(v){if(v===null){C(e.exit("chunkFlow"),!0),g(0),e.consume(v);return}return D(v)?(e.consume(v),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),S)}function C(v,_){const L=t.sliceStream(v);if(_&&L.push(null),v.previous=l,l&&(l.next=v),l=v,i.defineSkip(v.start),i.write(L),t.parser.lazy[v.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<o&&(!i.events[k][1].end||i.events[k][1].end.offset>o))return;const R=t.events.length;let U=R,O,b;for(;U--;)if(t.events[U][0]==="exit"&&t.events[U][1].type==="chunkFlow"){if(O){b=t.events[U][1].end;break}O=!0}for(g(r),k=R;k<t.events.length;)t.events[k][1].end={...b},k++;ie(t.events,U+1,0,t.events.slice(R)),t.events.length=k}}function g(v){let _=n.length;for(;_-- >v;){const L=n[_];t.containerState=L[1],L[0].exit.call(t,e)}n.length=v}function E(){i.write([null]),l=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Oo(e,t,n){return H(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Le(e){if(e===null||$(e)||Ee(e))return 1;if(fn(e))return 2}function dn(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(t=l(t,n),r.push(l))}return t}const Hn={name:"attention",resolveAll:Ho,tokenize:Uo};function Ho(e,t){let n=-1,r,i,l,o,a,s,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},f={...e[n][1].start};_t(c,-s),_t(f,s),o={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},e[r][1].end={...o.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=oe(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=oe(u,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",l,t]]),u=oe(u,dn(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=oe(u,[["exit",l,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=oe(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,ie(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Uo(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Le(r);let l;return o;function o(s){return l=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===l)return e.consume(s),a;const u=e.exit("attentionSequence"),p=Le(s),c=!p||p===2&&i||n.includes(s),f=!i||i===2&&p||n.includes(r);return u._open=!!(l===42?c:c&&(i||!f)),u._close=!!(l===42?f:f&&(p||!c)),t(s)}}function _t(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const qo={name:"autolink",tokenize:Vo};function Vo(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return Z(h)?(e.consume(h),o):h===64?n(h):u(h)}function o(h){return h===43||h===45||h===46||Y(h)?(r=1,a(h)):u(h)}function a(h){return h===58?(e.consume(h),r=0,s):(h===43||h===45||h===46||Y(h))&&r++<32?(e.consume(h),a):(r=0,u(h))}function s(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||un(h)?n(h):(e.consume(h),s)}function u(h){return h===64?(e.consume(h),p):_o(h)?(e.consume(h),u):n(h)}function p(h){return Y(h)?c(h):n(h)}function c(h){return h===46?(e.consume(h),r=0,p):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Y(h))&&r++<63){const y=h===45?f:c;return e.consume(h),y}return n(h)}}const Ye={partial:!0,tokenize:Go};function Go(e,t,n){return r;function r(l){return N(l)?H(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||D(l)?t(l):n(l)}}const Tr={continuation:{tokenize:Wo},exit:Jo,name:"blockQuote",tokenize:$o};function $o(e,t,n){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return n(o)}function l(o){return N(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Wo(e,t,n){const r=this;return i;function i(o){return N(o)?H(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(Tr,t,n)(o)}}function Jo(e){e.exit("blockQuote")}const Pr={name:"characterEscape",tokenize:Qo};function Qo(e,t,n){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Ro(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(l)}}const Ir={name:"characterReference",tokenize:Xo};function Xo(e,t,n){const r=this;let i=0,l,o;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,o=Y,p(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=Lo,p):(e.enter("characterReferenceValue"),l=7,o=On,p(c))}function p(c){if(c===59&&i){const f=e.exit("characterReferenceValue");return o===Y&&!et(r.sliceSerialize(f))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(c)&&i++<l?(e.consume(c),p):n(c)}}const Lt={partial:!0,tokenize:Ko},Rt={concrete:!0,name:"codeFenced",tokenize:Yo};function Yo(e,t,n){const r=this,i={partial:!0,tokenize:L};let l=0,o=0,a;return s;function s(k){return u(k)}function u(k){const R=r.events[r.events.length-1];return l=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===a?(o++,e.consume(k),p):o<3?n(k):(e.exit("codeFencedFenceSequence"),N(k)?H(e,c,"whitespace")(k):c(k))}function c(k){return k===null||D(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(Lt,S,_)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(k))}function f(k){return k===null||D(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):N(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),H(e,h,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),f)}function h(k){return k===null||D(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(k))}function y(k){return k===null||D(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===a?n(k):(e.consume(k),y)}function S(k){return e.attempt(i,_,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),g}function g(k){return l>0&&N(k)?H(e,E,"linePrefix",l+1)(k):E(k)}function E(k){return k===null||D(k)?e.check(Lt,S,_)(k):(e.enter("codeFlowValue"),v(k))}function v(k){return k===null||D(k)?(e.exit("codeFlowValue"),E(k)):(e.consume(k),v)}function _(k){return e.exit("codeFenced"),t(k)}function L(k,R,U){let O=0;return b;function b(P){return k.enter("lineEnding"),k.consume(P),k.exit("lineEnding"),I}function I(P){return k.enter("codeFencedFence"),N(P)?H(k,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):j(P)}function j(P){return P===a?(k.enter("codeFencedFenceSequence"),q(P)):U(P)}function q(P){return P===a?(O++,k.consume(P),q):O>=o?(k.exit("codeFencedFenceSequence"),N(P)?H(k,F,"whitespace")(P):F(P)):U(P)}function F(P){return P===null||D(P)?(k.exit("codeFencedFence"),R(P)):U(P)}}}function Ko(e,t,n){const r=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const wn={name:"codeIndented",tokenize:el},Zo={partial:!0,tokenize:nl};function el(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),H(e,l,"linePrefix",5)(u)}function l(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?s(u):D(u)?e.attempt(Zo,o,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||D(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),t(u)}}function nl(e,t,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):D(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):H(e,l,"linePrefix",5)(o)}function l(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):D(o)?i(o):n(o)}}const tl={name:"codeText",previous:il,resolve:rl,tokenize:ol};function rl(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function il(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ol(e,t,n){let r=0,i,l;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(l=e.enter("codeTextSequence"),i=0,p(c)):D(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||D(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function p(c){return c===96?(e.consume(c),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(l.type="codeTextData",u(c))}}class ll{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ue(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ue(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ue(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ue(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ue(this.left,n.reverse())}}}function Ue(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function jr(e){const t={};let n=-1,r,i,l,o,a,s,u;const p=new ll(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,al(p,n)),n=t[n],u=!0);else if(r[1]._container){for(l=n,i=void 0;l--;)if(o=p.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},a=p.slice(i,n),a.unshift(r),p.splice(i,n-i+1,a))}}return ie(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function al(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const l=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,s=[],u={};let p,c,f=-1,h=n,y=0,S=0;const C=[S];for(;h;){for(;e.get(++i)[1]!==h;);l.push(i),h._tokenizer||(p=r.sliceStream(h),h.next||p.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(p),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(S=f+1,C.push(S),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):C.pop(),f=C.length;f--;){const g=a.slice(C[f],C[f+1]),E=l.pop();s.push([E,E+g.length-1]),e.splice(E,2,g)}for(s.reverse(),f=-1;++f<s.length;)u[y+s[f][0]]=y+s[f][1],y+=s[f][1]-s[f][0]-1;return u}const sl={resolve:cl,tokenize:pl},ul={partial:!0,tokenize:hl};function cl(e){return jr(e),e}function pl(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?l(a):D(a)?e.check(ul,o,l)(a):(e.consume(a),i)}function l(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function o(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function hl(e,t,n){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),H(e,l,"linePrefix")}function l(o){if(o===null||D(o))return n(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Dr(e,t,n,r,i,l,o,a,s){const u=s||Number.POSITIVE_INFINITY;let p=0;return c;function c(g){return g===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(g),e.exit(l),f):g===null||g===32||g===41||un(g)?n(g):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),S(g))}function f(g){return g===62?(e.enter(l),e.consume(g),e.exit(l),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(a),f(g)):g===null||g===60||D(g)?n(g):(e.consume(g),g===92?y:h)}function y(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function S(g){return!p&&(g===null||g===41||$(g))?(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),t(g)):p<u&&g===40?(e.consume(g),p++,S):g===41?(e.consume(g),p--,S):g===null||g===32||g===40||un(g)?n(g):(e.consume(g),g===92?C:S)}function C(g){return g===40||g===41||g===92?(e.consume(g),S):S(g)}}function Fr(e,t,n,r,i,l){const o=this;let a=0,s;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),p}function p(h){return a>999||h===null||h===91||h===93&&!s||h===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):D(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||D(h)||a++>999?(e.exit("chunkString"),p(h)):(e.consume(h),s||(s=!N(h)),h===92?f:c)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}}function _r(e,t,n,r,i,l){let o;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),o=f===40?41:f,s):n(f)}function s(f){return f===o?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(l),u(f))}function u(f){return f===o?(e.exit(l),s(o)):f===null?n(f):D(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),H(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===o||f===null||D(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?c:p)}function c(f){return f===o||f===92?(e.consume(f),p):p(f)}}function $e(e,t){let n;return r;function r(i){return D(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):N(i)?H(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const fl={name:"definition",tokenize:ml},dl={partial:!0,tokenize:gl};function ml(e,t,n){const r=this;let i;return l;function l(h){return e.enter("definition"),o(h)}function o(h){return Fr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),s):n(h)}function s(h){return $(h)?$e(e,u)(h):u(h)}function u(h){return Dr(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function p(h){return e.attempt(dl,c,c)(h)}function c(h){return N(h)?H(e,f,"whitespace")(h):f(h)}function f(h){return h===null||D(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function gl(e,t,n){return r;function r(a){return $(a)?$e(e,i)(a):n(a)}function i(a){return _r(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function l(a){return N(a)?H(e,o,"whitespace")(a):o(a)}function o(a){return a===null||D(a)?t(a):n(a)}}const yl={name:"hardBreakEscape",tokenize:bl};function bl(e,t,n){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return D(l)?(e.exit("hardBreakEscape"),t(l)):n(l)}}const kl={name:"headingAtx",resolve:xl,tokenize:wl};function xl(e,t){let n=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},l={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ie(e,r,n-r+1,[["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t]])),e}function wl(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),l(p)}function l(p){return e.enter("atxHeadingSequence"),o(p)}function o(p){return p===35&&r++<6?(e.consume(p),o):p===null||$(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),s(p)):p===null||D(p)?(e.exit("atxHeading"),t(p)):N(p)?H(e,a,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function s(p){return p===35?(e.consume(p),s):(e.exit("atxHeadingSequence"),a(p))}function u(p){return p===null||p===35||$(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),u)}}const vl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Mt=["pre","script","style","textarea"],Sl={concrete:!0,name:"htmlFlow",resolveTo:Al,tokenize:Tl},Cl={partial:!0,tokenize:Il},El={partial:!0,tokenize:Pl};function Al(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Tl(e,t,n){const r=this;let i,l,o,a,s;return u;function u(m){return p(m)}function p(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),l=!0,S):m===63?(e.consume(m),i=3,r.interrupt?t:d):Z(m)?(e.consume(m),o=String.fromCharCode(m),C):n(m)}function f(m){return m===45?(e.consume(m),i=2,h):m===91?(e.consume(m),i=5,a=0,y):Z(m)?(e.consume(m),i=4,r.interrupt?t:d):n(m)}function h(m){return m===45?(e.consume(m),r.interrupt?t:d):n(m)}function y(m){const se="CDATA[";return m===se.charCodeAt(a++)?(e.consume(m),a===se.length?r.interrupt?t:j:y):n(m)}function S(m){return Z(m)?(e.consume(m),o=String.fromCharCode(m),C):n(m)}function C(m){if(m===null||m===47||m===62||$(m)){const se=m===47,ve=o.toLowerCase();return!se&&!l&&Mt.includes(ve)?(i=1,r.interrupt?t(m):j(m)):vl.includes(o.toLowerCase())?(i=6,se?(e.consume(m),g):r.interrupt?t(m):j(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):l?E(m):v(m))}return m===45||Y(m)?(e.consume(m),o+=String.fromCharCode(m),C):n(m)}function g(m){return m===62?(e.consume(m),r.interrupt?t:j):n(m)}function E(m){return N(m)?(e.consume(m),E):b(m)}function v(m){return m===47?(e.consume(m),b):m===58||m===95||Z(m)?(e.consume(m),_):N(m)?(e.consume(m),v):b(m)}function _(m){return m===45||m===46||m===58||m===95||Y(m)?(e.consume(m),_):L(m)}function L(m){return m===61?(e.consume(m),k):N(m)?(e.consume(m),L):v(m)}function k(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),s=m,R):N(m)?(e.consume(m),k):U(m)}function R(m){return m===s?(e.consume(m),s=null,O):m===null||D(m)?n(m):(e.consume(m),R)}function U(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||$(m)?L(m):(e.consume(m),U)}function O(m){return m===47||m===62||N(m)?v(m):n(m)}function b(m){return m===62?(e.consume(m),I):n(m)}function I(m){return m===null||D(m)?j(m):N(m)?(e.consume(m),I):n(m)}function j(m){return m===45&&i===2?(e.consume(m),V):m===60&&i===1?(e.consume(m),Q):m===62&&i===4?(e.consume(m),ae):m===63&&i===3?(e.consume(m),d):m===93&&i===5?(e.consume(m),fe):D(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Cl,de,q)(m)):m===null||D(m)?(e.exit("htmlFlowData"),q(m)):(e.consume(m),j)}function q(m){return e.check(El,F,de)(m)}function F(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),P}function P(m){return m===null||D(m)?q(m):(e.enter("htmlFlowData"),j(m))}function V(m){return m===45?(e.consume(m),d):j(m)}function Q(m){return m===47?(e.consume(m),o="",le):j(m)}function le(m){if(m===62){const se=o.toLowerCase();return Mt.includes(se)?(e.consume(m),ae):j(m)}return Z(m)&&o.length<8?(e.consume(m),o+=String.fromCharCode(m),le):j(m)}function fe(m){return m===93?(e.consume(m),d):j(m)}function d(m){return m===62?(e.consume(m),ae):m===45&&i===2?(e.consume(m),d):j(m)}function ae(m){return m===null||D(m)?(e.exit("htmlFlowData"),de(m)):(e.consume(m),ae)}function de(m){return e.exit("htmlFlow"),t(m)}}function Pl(e,t,n){const r=this;return i;function i(o){return D(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):n(o)}function l(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Il(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ye,t,n)}}const jl={name:"htmlText",tokenize:Dl};function Dl(e,t,n){const r=this;let i,l,o;return a;function a(d){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(d),s}function s(d){return d===33?(e.consume(d),u):d===47?(e.consume(d),L):d===63?(e.consume(d),v):Z(d)?(e.consume(d),U):n(d)}function u(d){return d===45?(e.consume(d),p):d===91?(e.consume(d),l=0,y):Z(d)?(e.consume(d),E):n(d)}function p(d){return d===45?(e.consume(d),h):n(d)}function c(d){return d===null?n(d):d===45?(e.consume(d),f):D(d)?(o=c,Q(d)):(e.consume(d),c)}function f(d){return d===45?(e.consume(d),h):c(d)}function h(d){return d===62?V(d):d===45?f(d):c(d)}function y(d){const ae="CDATA[";return d===ae.charCodeAt(l++)?(e.consume(d),l===ae.length?S:y):n(d)}function S(d){return d===null?n(d):d===93?(e.consume(d),C):D(d)?(o=S,Q(d)):(e.consume(d),S)}function C(d){return d===93?(e.consume(d),g):S(d)}function g(d){return d===62?V(d):d===93?(e.consume(d),g):S(d)}function E(d){return d===null||d===62?V(d):D(d)?(o=E,Q(d)):(e.consume(d),E)}function v(d){return d===null?n(d):d===63?(e.consume(d),_):D(d)?(o=v,Q(d)):(e.consume(d),v)}function _(d){return d===62?V(d):v(d)}function L(d){return Z(d)?(e.consume(d),k):n(d)}function k(d){return d===45||Y(d)?(e.consume(d),k):R(d)}function R(d){return D(d)?(o=R,Q(d)):N(d)?(e.consume(d),R):V(d)}function U(d){return d===45||Y(d)?(e.consume(d),U):d===47||d===62||$(d)?O(d):n(d)}function O(d){return d===47?(e.consume(d),V):d===58||d===95||Z(d)?(e.consume(d),b):D(d)?(o=O,Q(d)):N(d)?(e.consume(d),O):V(d)}function b(d){return d===45||d===46||d===58||d===95||Y(d)?(e.consume(d),b):I(d)}function I(d){return d===61?(e.consume(d),j):D(d)?(o=I,Q(d)):N(d)?(e.consume(d),I):O(d)}function j(d){return d===null||d===60||d===61||d===62||d===96?n(d):d===34||d===39?(e.consume(d),i=d,q):D(d)?(o=j,Q(d)):N(d)?(e.consume(d),j):(e.consume(d),F)}function q(d){return d===i?(e.consume(d),i=void 0,P):d===null?n(d):D(d)?(o=q,Q(d)):(e.consume(d),q)}function F(d){return d===null||d===34||d===39||d===60||d===61||d===96?n(d):d===47||d===62||$(d)?O(d):(e.consume(d),F)}function P(d){return d===47||d===62||$(d)?O(d):n(d)}function V(d){return d===62?(e.consume(d),e.exit("htmlTextData"),e.exit("htmlText"),t):n(d)}function Q(d){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),le}function le(d){return N(d)?H(e,fe,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):fe(d)}function fe(d){return e.enter("htmlTextData"),o(d)}}const nt={name:"labelEnd",resolveAll:Rl,resolveTo:Ml,tokenize:zl},Fl={tokenize:Nl},_l={tokenize:Bl},Ll={tokenize:Ol};function Rl(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&ie(e,0,e.length,n),e}function Ml(e,t){let n=e.length,r=0,i,l,o,a;for(;n--;)if(i=e[n][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},p={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[o-2][1].start}};return a=[["enter",s,t],["enter",u,t]],a=oe(a,e.slice(l+1,l+r+3)),a=oe(a,[["enter",p,t]]),a=oe(a,dn(t.parser.constructs.insideSpan.null,e.slice(l+r+4,o-3),t)),a=oe(a,[["exit",p,t],e[o-2],e[o-1],["exit",u,t]]),a=oe(a,e.slice(o+1)),a=oe(a,[["exit",s,t]]),ie(e,l,e.length,a),e}function zl(e,t,n){const r=this;let i=r.events.length,l,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return a;function a(f){return l?l._inactive?c(f):(o=r.parser.defined.includes(ce(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):n(f)}function s(f){return f===40?e.attempt(Fl,p,o?p:c)(f):f===91?e.attempt(_l,p,o?u:c)(f):o?p(f):c(f)}function u(f){return e.attempt(Ll,p,c)(f)}function p(f){return t(f)}function c(f){return l._balanced=!0,n(f)}}function Nl(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return $(c)?$e(e,l)(c):l(c)}function l(c){return c===41?p(c):Dr(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return $(c)?$e(e,s)(c):p(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?_r(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):p(c)}function u(c){return $(c)?$e(e,p)(c):p(c)}function p(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function Bl(e,t,n){const r=this;return i;function i(a){return Fr.call(r,e,l,o,"reference","referenceMarker","referenceString")(a)}function l(a){return r.parser.defined.includes(ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function o(a){return n(a)}}function Ol(e,t,n){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),t):n(l)}}const Hl={name:"labelStartImage",resolveAll:nt.resolveAll,tokenize:Ul};function Ul(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),l}function l(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ql={name:"labelStartLink",resolveAll:nt.resolveAll,tokenize:Vl};function Vl(e,t,n){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const vn={name:"lineEnding",tokenize:Gl};function Gl(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),H(e,t,"linePrefix")}}const sn={name:"thematicBreak",tokenize:$l};function $l(e,t,n){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||D(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),N(u)?H(e,a,"whitespace")(u):a(u))}}const ee={continuation:{tokenize:Xl},exit:Kl,name:"list",tokenize:Ql},Wl={partial:!0,tokenize:Zl},Jl={partial:!0,tokenize:Yl};function Ql(e,t,n){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(h){const y=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:On(h)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(sn,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return n(h)}function s(h){return On(h)&&++o<10?(e.consume(h),s):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Ye,r.interrupt?n:p,e.attempt(Wl,f,c))}function p(h){return r.containerState.initialBlankLine=!0,l++,f(h)}function c(h){return N(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Xl(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ye,i,l);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,H(e,t,"listItemIndent",r.containerState.size+1)(a)}function l(a){return r.containerState.furtherBlankLines||!N(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Jl,t,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,H(e,e.attempt(ee,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Yl(e,t,n){const r=this;return H(e,i,"listItemIndent",r.containerState.size+1);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(l):n(l)}}function Kl(e){e.exit(this.containerState.type)}function Zl(e,t,n){const r=this;return H(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const o=r.events[r.events.length-1];return!N(l)&&o&&o[1].type==="listItemPrefixWhitespace"?t(l):n(l)}}const zt={name:"setextUnderline",resolveTo:ea,tokenize:na};function ea(e,t){let n=e.length,r,i,l;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!l&&e[n][1].type==="definition"&&(l=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",o,t]),e.splice(l+1,0,["exit",e[r][1],t]),e[r][1].end={...e[l][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function na(e,t,n){const r=this;let i;return l;function l(u){let p=r.events.length,c;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){c=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,o(u)):n(u)}function o(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),N(u)?H(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||D(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const ta={tokenize:ra};function ra(e){const t=this,n=e.attempt(Ye,r,e.attempt(this.parser.constructs.flowInitial,i,H(e,e.attempt(this.parser.constructs.flow,i,e.attempt(sl,i)),"linePrefix")));return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const ia={resolveAll:Rr()},oa=Lr("string"),la=Lr("text");function Lr(e){return{resolveAll:Rr(e==="text"?aa:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],l=n.attempt(i,o,a);return o;function o(p){return u(p)?l(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),s}function s(p){return u(p)?(n.exit("data"),l(p)):(n.consume(p),s)}function u(p){if(p===null)return!0;const c=i[p];let f=-1;if(c)for(;++f<c.length;){const h=c[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Rr(e){return t;function t(n,r){let i=-1,l;for(;++i<=n.length;)l===void 0?n[i]&&n[i][1].type==="data"&&(l=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(n,r):n}}function aa(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let l=i.length,o=-1,a=0,s;for(;l--;){const u=i[l];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)s=!0,a++;else if(u!==-1){l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:r.start._bufferIndex+o,_index:r.start._index+l,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const sa={42:ee,43:ee,45:ee,48:ee,49:ee,50:ee,51:ee,52:ee,53:ee,54:ee,55:ee,56:ee,57:ee,62:Tr},ua={91:fl},ca={[-2]:wn,[-1]:wn,32:wn},pa={35:kl,42:sn,45:[zt,sn],60:Sl,61:zt,95:sn,96:Rt,126:Rt},ha={38:Ir,92:Pr},fa={[-5]:vn,[-4]:vn,[-3]:vn,33:Hl,38:Ir,42:Hn,60:[qo,jl],91:ql,92:[yl,Pr],93:nt,95:Hn,96:tl},da={null:[Hn,ia]},ma={null:[42,95]},ga={null:[]},ya=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ma,contentInitial:ua,disable:ga,document:sa,flow:pa,flowInitial:ca,insideSpan:da,string:ha,text:fa},Symbol.toStringTag,{value:"Module"}));function ba(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},l=[];let o=[],a=[];const s={attempt:R(L),check:R(k),consume:E,enter:v,exit:_,interrupt:R(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:S,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:c};let p=t.tokenize.call(u,s);return t.resolveAll&&l.push(t),u;function c(I){return o=oe(o,I),C(),o[o.length-1]!==null?[]:(U(t,0),u.events=dn(l,u.events,u),u.events)}function f(I,j){return xa(h(I),j)}function h(I){return ka(o,I)}function y(){const{_bufferIndex:I,_index:j,line:q,column:F,offset:P}=r;return{_bufferIndex:I,_index:j,line:q,column:F,offset:P}}function S(I){i[I.line]=I.column,b()}function C(){let I;for(;r._index<o.length;){const j=o[r._index];if(typeof j=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<j.length;)g(j.charCodeAt(r._bufferIndex));else g(j)}}function g(I){p=p(I)}function E(I){D(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,b()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function v(I,j){const q=j||{};return q.type=I,q.start=y(),u.events.push(["enter",q,u]),a.push(q),q}function _(I){const j=a.pop();return j.end=y(),u.events.push(["exit",j,u]),j}function L(I,j){U(I,j.from)}function k(I,j){j.restore()}function R(I,j){return q;function q(F,P,V){let Q,le,fe,d;return Array.isArray(F)?de(F):"tokenize"in F?de([F]):ae(F);function ae(X){return ze;function ze(ke){const Te=ke!==null&&X[ke],Pe=ke!==null&&X.null,Ze=[...Array.isArray(Te)?Te:Te?[Te]:[],...Array.isArray(Pe)?Pe:Pe?[Pe]:[]];return de(Ze)(ke)}}function de(X){return Q=X,le=0,X.length===0?V:m(X[le])}function m(X){return ze;function ze(ke){return d=O(),fe=X,X.partial||(u.currentConstruct=X),X.name&&u.parser.constructs.disable.null.includes(X.name)?ve():X.tokenize.call(j?Object.assign(Object.create(u),j):u,s,se,ve)(ke)}}function se(X){return I(fe,d),P}function ve(X){return d.restore(),++le<Q.length?m(Q[le]):V}}}function U(I,j){I.resolveAll&&!l.includes(I)&&l.push(I),I.resolve&&ie(u.events,j,u.events.length-j,I.resolve(u.events.slice(j),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function O(){const I=y(),j=u.previous,q=u.currentConstruct,F=u.events.length,P=Array.from(a);return{from:F,restore:V};function V(){r=I,u.previous=j,u.currentConstruct=q,u.events.length=F,a=P,b()}}function b(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ka(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(r,l)];else{if(o=e.slice(n,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}l>0&&o.push(e[i].slice(0,l))}return o}function xa(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const l=e[n];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(l)}i=l===-2,r.push(o)}return r.join("")}function wa(e){const r={constructs:Er([ya,...(e||{}).extensions||[]]),content:i(Mo),defined:[],document:i(No),flow:i(ta),lazy:{},string:i(oa),text:i(la)};return r;function i(l){return o;function o(a){return ba(r,l,a)}}}function va(e){for(;!jr(e););return e}const Nt=/[\0\t\n\r]/g;function Sa(){let e=1,t="",n=!0,r;return i;function i(l,o,a){const s=[];let u,p,c,f,h;for(l=t+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),c=0,t="",n&&(l.charCodeAt(0)===65279&&c++,n=void 0);c<l.length;){if(Nt.lastIndex=c,u=Nt.exec(l),f=u&&u.index!==void 0?u.index:l.length,h=l.charCodeAt(f),!u){t=l.slice(c);break}if(h===10&&c===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<f&&(s.push(l.slice(c,f)),e+=f-c),h){case 0:{s.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,s.push(-2);e++<p;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=f+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const Ca=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ea(e){return e.replace(Ca,Aa)}function Aa(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),l=i===120||i===88;return Ar(n.slice(l?2:1),l?16:10)}return et(n)||e}const Mr={}.hasOwnProperty;function Ta(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Pa(n)(va(wa(n).document().write(Sa()(e,t,!0))))}function Pa(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(dt),autolinkProtocol:O,autolinkEmail:O,atxHeading:l(pt),blockQuote:l(Pe),characterEscape:O,characterReference:O,codeFenced:l(Ze),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(Ze,o),codeText:l(mi,o),codeTextData:O,data:O,codeFlowValue:O,definition:l(gi),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(yi),hardBreakEscape:l(ht),hardBreakTrailing:l(ht),htmlFlow:l(ft,o),htmlFlowData:O,htmlText:l(ft,o),htmlTextData:O,image:l(bi),label:o,link:l(dt),listItem:l(ki),listItemValue:f,listOrdered:l(mt,c),listUnordered:l(mt),paragraph:l(xi),reference:m,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(pt),strong:l(wi),thematicBreak:l(Si)},exit:{atxHeading:s(),atxHeadingSequence:L,autolink:s(),autolinkEmail:Te,autolinkProtocol:ke,blockQuote:s(),characterEscapeValue:b,characterReferenceMarkerHexadecimal:ve,characterReferenceMarkerNumeric:ve,characterReferenceValue:X,characterReference:ze,codeFenced:s(C),codeFencedFence:S,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:b,codeIndented:s(g),codeText:s(P),codeTextData:b,data:b,definition:s(),definitionDestinationString:_,definitionLabelString:E,definitionTitleString:v,emphasis:s(),hardBreakEscape:s(j),hardBreakTrailing:s(j),htmlFlow:s(q),htmlFlowData:b,htmlText:s(F),htmlTextData:b,image:s(Q),label:fe,labelText:le,lineEnding:I,link:s(V),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:se,resourceDestinationString:d,resourceTitleString:ae,resource:de,setextHeading:s(U),setextHeadingLineSequence:R,setextHeadingText:k,strong:s(),thematicBreak:s()}};zr(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(w){let T={type:"root",children:[]};const M={stack:[T],tokenStack:[],config:t,enter:a,exit:u,buffer:o,resume:p,data:n},B=[];let G=-1;for(;++G<w.length;)if(w[G][1].type==="listOrdered"||w[G][1].type==="listUnordered")if(w[G][0]==="enter")B.push(G);else{const ue=B.pop();G=i(w,ue,G)}for(G=-1;++G<w.length;){const ue=t[w[G][0]];Mr.call(ue,w[G][1].type)&&ue[w[G][1].type].call(Object.assign({sliceSerialize:w[G][2].sliceSerialize},M),w[G][1])}if(M.tokenStack.length>0){const ue=M.tokenStack[M.tokenStack.length-1];(ue[1]||Bt).call(M,void 0,ue[0])}for(T.position={start:xe(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:xe(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},G=-1;++G<t.transforms.length;)T=t.transforms[G](T)||T;return T}function i(w,T,M){let B=T-1,G=-1,ue=!1,Se,me,Ne,Be;for(;++B<=M;){const te=w[B];switch(te[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{te[0]==="enter"?G++:G--,Be=void 0;break}case"lineEndingBlank":{te[0]==="enter"&&(Se&&!Be&&!G&&!Ne&&(Ne=B),Be=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Be=void 0}if(!G&&te[0]==="enter"&&te[1].type==="listItemPrefix"||G===-1&&te[0]==="exit"&&(te[1].type==="listUnordered"||te[1].type==="listOrdered")){if(Se){let Ie=B;for(me=void 0;Ie--;){const ge=w[Ie];if(ge[1].type==="lineEnding"||ge[1].type==="lineEndingBlank"){if(ge[0]==="exit")continue;me&&(w[me][1].type="lineEndingBlank",ue=!0),ge[1].type="lineEnding",me=Ie}else if(!(ge[1].type==="linePrefix"||ge[1].type==="blockQuotePrefix"||ge[1].type==="blockQuotePrefixWhitespace"||ge[1].type==="blockQuoteMarker"||ge[1].type==="listItemIndent"))break}Ne&&(!me||Ne<me)&&(Se._spread=!0),Se.end=Object.assign({},me?w[me][1].start:te[1].end),w.splice(me||B,0,["exit",Se,te[2]]),B++,M++}if(te[1].type==="listItemPrefix"){const Ie={type:"listItem",_spread:!1,start:Object.assign({},te[1].start),end:void 0};Se=Ie,w.splice(B,0,["enter",Ie,te[2]]),B++,M++,Ne=void 0,Be=!0}}}return w[T][1]._spread=ue,M}function l(w,T){return M;function M(B){a.call(this,w(B),B),T&&T.call(this,B)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(w,T,M){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([T,M||void 0]),w.position={start:xe(T.start),end:void 0}}function s(w){return T;function T(M){w&&w.call(this,M),u.call(this,M)}}function u(w,T){const M=this.stack.pop(),B=this.tokenStack.pop();if(B)B[0].type!==w.type&&(T?T.call(this,w,B[0]):(B[1]||Bt).call(this,w,B[0]));else throw new Error("Cannot close `"+w.type+"` ("+Ge({start:w.start,end:w.end})+"): it’s not open");M.position.end=xe(w.end)}function p(){return Zn(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function f(w){if(this.data.expectingFirstListItemValue){const T=this.stack[this.stack.length-2];T.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function h(){const w=this.resume(),T=this.stack[this.stack.length-1];T.lang=w}function y(){const w=this.resume(),T=this.stack[this.stack.length-1];T.meta=w}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w.replace(/(\r?\n|\r)$/g,"")}function E(w){const T=this.resume(),M=this.stack[this.stack.length-1];M.label=T,M.identifier=ce(this.sliceSerialize(w)).toLowerCase()}function v(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function _(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function L(w){const T=this.stack[this.stack.length-1];if(!T.depth){const M=this.sliceSerialize(w).length;T.depth=M}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function R(w){const T=this.stack[this.stack.length-1];T.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function U(){this.data.setextHeadingSlurpLineEnding=void 0}function O(w){const M=this.stack[this.stack.length-1].children;let B=M[M.length-1];(!B||B.type!=="text")&&(B=vi(),B.position={start:xe(w.start),end:void 0},M.push(B)),this.stack.push(B)}function b(w){const T=this.stack.pop();T.value+=this.sliceSerialize(w),T.position.end=xe(w.end)}function I(w){const T=this.stack[this.stack.length-1];if(this.data.atHardBreak){const M=T.children[T.children.length-1];M.position.end=xe(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(T.type)&&(O.call(this,w),b.call(this,w))}function j(){this.data.atHardBreak=!0}function q(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function F(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function P(){const w=this.resume(),T=this.stack[this.stack.length-1];T.value=w}function V(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function Q(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const T=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=T,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function le(w){const T=this.sliceSerialize(w),M=this.stack[this.stack.length-2];M.label=Ea(T),M.identifier=ce(T).toLowerCase()}function fe(){const w=this.stack[this.stack.length-1],T=this.resume(),M=this.stack[this.stack.length-1];if(this.data.inReference=!0,M.type==="link"){const B=w.children;M.children=B}else M.alt=T}function d(){const w=this.resume(),T=this.stack[this.stack.length-1];T.url=w}function ae(){const w=this.resume(),T=this.stack[this.stack.length-1];T.title=w}function de(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function se(w){const T=this.resume(),M=this.stack[this.stack.length-1];M.label=T,M.identifier=ce(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function ve(w){this.data.characterReferenceType=w.type}function X(w){const T=this.sliceSerialize(w),M=this.data.characterReferenceType;let B;M?(B=Ar(T,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):B=et(T);const G=this.stack[this.stack.length-1];G.value+=B}function ze(w){const T=this.stack.pop();T.position.end=xe(w.end)}function ke(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url=this.sliceSerialize(w)}function Te(w){b.call(this,w);const T=this.stack[this.stack.length-1];T.url="mailto:"+this.sliceSerialize(w)}function Pe(){return{type:"blockquote",children:[]}}function Ze(){return{type:"code",lang:null,meta:null,value:""}}function mi(){return{type:"inlineCode",value:""}}function gi(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function yi(){return{type:"emphasis",children:[]}}function pt(){return{type:"heading",depth:0,children:[]}}function ht(){return{type:"break"}}function ft(){return{type:"html",value:""}}function bi(){return{type:"image",title:null,url:"",alt:null}}function dt(){return{type:"link",title:null,url:"",children:[]}}function mt(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function ki(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function xi(){return{type:"paragraph",children:[]}}function wi(){return{type:"strong",children:[]}}function vi(){return{type:"text",value:""}}function Si(){return{type:"thematicBreak"}}}function xe(e){return{line:e.line,column:e.column,offset:e.offset}}function zr(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?zr(e,r):Ia(e,r)}}function Ia(e,t){let n;for(n in t)if(Mr.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Bt(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ge({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is still open")}function ja(e){const t=this;t.parser=n;function n(r){return Ta(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Da(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Fa(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function _a(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(l.data={meta:t.meta}),e.patch(t,l),l=e.applyData(t,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(t,l),l}function La(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ra(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ma(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Me(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let o,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=l+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function za(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Na(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Nr(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Ba(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nr(e,t);const i={src:Me(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,l),e.applyData(t,l)}function Oa(e,t){const n={src:Me(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Ha(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Ua(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nr(e,t);const i={href:Me(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)}function qa(e,t){const n={href:Me(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Va(e,t,n){const r=e.all(t),i=n?Ga(n):Br(t),l={},o=[];if(typeof t.checked=="boolean"){const p=r[0];let c;p&&p.type==="element"&&p.tagName==="p"?c=p:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&o.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?o.push(...p.children):o.push(p)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:o};return e.patch(t,u),e.applyData(t,u)}function Ga(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Br(n[r])}return t}function Br(e){const t=e.spread;return t??e.children.length>1}function $a(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const l={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,l),e.applyData(t,l)}function Wa(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ja(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Qa(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xa(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Qn(t.children[1]),s=br(t.children[t.children.length-1]);a&&s&&(o.position={start:a,end:s}),i.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,l),e.applyData(t,l)}function Ya(e,t,n){const r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:t.children.length;let s=-1;const u=[];for(;++s<a;){const c=t.children[s],f={},h=o?o[s]:void 0;h&&(f.align=h);let y={type:"element",tagName:l,properties:f,children:[]};c&&(y.children=e.all(c),e.patch(c,y),y=e.applyData(c,y)),u.push(y)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,p),e.applyData(t,p)}function Ka(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ot=9,Ht=32;function Za(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const l=[];for(;r;)l.push(Ut(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return l.push(Ut(t.slice(i),i>0,!1)),l.join("")}function Ut(e,t,n){let r=0,i=e.length;if(t){let l=e.codePointAt(r);for(;l===Ot||l===Ht;)r++,l=e.codePointAt(r)}if(n){let l=e.codePointAt(i-1);for(;l===Ot||l===Ht;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function es(e,t){const n={type:"text",value:Za(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function ns(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const ts={blockquote:Da,break:Fa,code:_a,delete:La,emphasis:Ra,footnoteReference:Ma,heading:za,html:Na,imageReference:Ba,image:Oa,inlineCode:Ha,linkReference:Ua,link:qa,listItem:Va,list:$a,paragraph:Wa,root:Ja,strong:Qa,table:Xa,tableCell:Ka,tableRow:Ya,text:es,thematicBreak:ns,toml:rn,yaml:rn,definition:rn,footnoteDefinition:rn};function rn(){}const Or=-1,mn=0,We=1,cn=2,tt=3,rt=4,it=5,ot=6,Hr=7,Ur=8,qt=typeof self=="object"?self:globalThis,rs=(e,t)=>{const n=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,o]=t[i];switch(l){case mn:case Or:return n(o,i);case We:{const a=n([],i);for(const s of o)a.push(r(s));return a}case cn:{const a=n({},i);for(const[s,u]of o)a[r(s)]=r(u);return a}case tt:return n(new Date(o),i);case rt:{const{source:a,flags:s}=o;return n(new RegExp(a,s),i)}case it:{const a=n(new Map,i);for(const[s,u]of o)a.set(r(s),r(u));return a}case ot:{const a=n(new Set,i);for(const s of o)a.add(r(s));return a}case Hr:{const{name:a,message:s}=o;return n(new qt[a](s),i)}case Ur:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n(new qt[l](o),i)};return r},Vt=e=>rs(new Map,e)(0),De="",{toString:is}={},{keys:os}=Object,qe=e=>{const t=typeof e;if(t!=="object"||!e)return[mn,t];const n=is.call(e).slice(8,-1);switch(n){case"Array":return[We,De];case"Object":return[cn,De];case"Date":return[tt,De];case"RegExp":return[rt,De];case"Map":return[it,De];case"Set":return[ot,De];case"DataView":return[We,n]}return n.includes("Array")?[We,n]:n.includes("Error")?[Hr,n]:[cn,n]},on=([e,t])=>e===mn&&(t==="function"||t==="symbol"),ls=(e,t,n,r)=>{const i=(o,a)=>{const s=r.push(o)-1;return n.set(a,s),s},l=o=>{if(n.has(o))return n.get(o);let[a,s]=qe(o);switch(a){case mn:{let p=o;switch(s){case"bigint":a=Ur,p=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);p=null;break;case"undefined":return i([Or],o)}return i([a,p],o)}case We:{if(s){let f=o;return s==="DataView"?f=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(f=new Uint8Array(o)),i([s,[...f]],o)}const p=[],c=i([a,p],o);for(const f of o)p.push(l(f));return c}case cn:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return l(o.toJSON());const p=[],c=i([a,p],o);for(const f of os(o))(e||!on(qe(o[f])))&&p.push([l(f),l(o[f])]);return c}case tt:return i([a,o.toISOString()],o);case rt:{const{source:p,flags:c}=o;return i([a,{source:p,flags:c}],o)}case it:{const p=[],c=i([a,p],o);for(const[f,h]of o)(e||!(on(qe(f))||on(qe(h))))&&p.push([l(f),l(h)]);return c}case ot:{const p=[],c=i([a,p],o);for(const f of o)(e||!on(qe(f)))&&p.push(l(f));return c}}const{message:u}=o;return i([a,{name:s,message:u}],o)};return l},Gt=(e,{json:t,lossy:n}={})=>{const r=[];return ls(!(t||n),!!t,new Map,r)(e),r},pn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Vt(Gt(e,t)):structuredClone(e):(e,t)=>Vt(Gt(e,t));function as(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ss(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function us(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||as,r=e.options.footnoteBackLabel||ss,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const p=e.all(u),c=String(u.identifier).toUpperCase(),f=Me(c.toLowerCase());let h=0;const y=[],S=e.footnoteCounts.get(c);for(;S!==void 0&&++h<=S;){y.length>0&&y.push({type:"text",value:" "});let E=typeof n=="string"?n:n(s,h);typeof E=="string"&&(E={type:"text",value:E}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,h),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const C=p[p.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const E=C.children[C.children.length-1];E&&E.type==="text"?E.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...y)}else p.push(...y);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(p,!0)};e.patch(u,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...pn(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const gn=(function(e){if(e==null)return fs;if(typeof e=="function")return yn(e);if(typeof e=="object")return Array.isArray(e)?cs(e):ps(e);if(typeof e=="string")return hs(e);throw new Error("Expected function, string, or object as test")});function cs(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=gn(e[n]);return yn(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].apply(this,i))return!0;return!1}}function ps(e){const t=e;return yn(n);function n(r){const i=r;let l;for(l in e)if(i[l]!==t[l])return!1;return!0}}function hs(e){return yn(t);function t(n){return n&&n.type===e}}function yn(e){return t;function t(n,r,i){return!!(ds(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function fs(){return!0}function ds(e){return e!==null&&typeof e=="object"&&"type"in e}const qr=[],ms=!0,Un=!1,gs="skip";function Vr(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const l=gn(i),o=r?-1:1;a(e,void 0,[])();function a(s,u,p){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=qr,y,S,C;if((!t||l(s,u,p[p.length-1]||void 0))&&(h=ys(n(s,p)),h[0]===Un))return h;if("children"in s&&s.children){const g=s;if(g.children&&h[0]!==gs)for(S=(r?g.children.length:-1)+o,C=p.concat(g);S>-1&&S<g.children.length;){const E=g.children[S];if(y=a(E,S,C)(),y[0]===Un)return y;S=typeof y[1]=="number"?y[1]:S+o}}return h}}}function ys(e){return Array.isArray(e)?e:typeof e=="number"?[ms,e]:e==null?qr:[e]}function lt(e,t,n,r){let i,l,o;typeof t=="function"&&typeof n!="function"?(l=void 0,o=t,i=n):(l=t,o=n,i=r),Vr(e,l,a,i);function a(s,u){const p=u[u.length-1],c=p?p.children.indexOf(s):void 0;return o(s,c,p)}}const qn={}.hasOwnProperty,bs={};function ks(e,t){const n=t||bs,r=new Map,i=new Map,l=new Map,o={...ts,...n.handlers},a={all:u,applyData:ws,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:o,one:s,options:n,patch:xs,wrap:Ss};return lt(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const c=p.type==="definition"?r:i,f=String(p.identifier).toUpperCase();c.has(f)||c.set(f,p)}}),a;function s(p,c){const f=p.type,h=a.handlers[f];if(qn.call(a.handlers,f)&&h)return h(a,p,c);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in p){const{children:S,...C}=p,g=pn(C);return g.children=a.all(p),g}return pn(p)}return(a.options.unknownHandler||vs)(a,p,c)}function u(p){const c=[];if("children"in p){const f=p.children;let h=-1;for(;++h<f.length;){const y=a.one(f[h],p);if(y){if(h&&f[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=$t(y.value)),!Array.isArray(y)&&y.type==="element")){const S=y.children[0];S&&S.type==="text"&&(S.value=$t(S.value))}Array.isArray(y)?c.push(...y):c.push(y)}}}return c}}function xs(e,t){e.position&&(t.position=ao(e))}function ws(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&l&&Object.assign(n.properties,pn(l)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function vs(e,t){const n=t.data||{},r="value"in t&&!(qn.call(n,"hProperties")||qn.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ss(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function $t(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wt(e,t){const n=ks(e,t),r=n.one(e,void 0),i=us(n),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function Cs(e,t){return e&&"run"in e?async function(n,r){const i=Wt(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Wt(n,{file:r,...e||t})}}function Jt(e){if(e)throw e}var Sn,Qt;function Es(){if(Qt)return Sn;Qt=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(u){return typeof Array.isArray=="function"?Array.isArray(u):t.call(u)==="[object Array]"},l=function(u){if(!u||t.call(u)!=="[object Object]")return!1;var p=e.call(u,"constructor"),c=u.constructor&&u.constructor.prototype&&e.call(u.constructor.prototype,"isPrototypeOf");if(u.constructor&&!p&&!c)return!1;var f;for(f in u);return typeof f>"u"||e.call(u,f)},o=function(u,p){n&&p.name==="__proto__"?n(u,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):u[p.name]=p.newValue},a=function(u,p){if(p==="__proto__")if(e.call(u,p)){if(r)return r(u,p).value}else return;return u[p]};return Sn=function s(){var u,p,c,f,h,y,S=arguments[0],C=1,g=arguments.length,E=!1;for(typeof S=="boolean"&&(E=S,S=arguments[1]||{},C=2),(S==null||typeof S!="object"&&typeof S!="function")&&(S={});C<g;++C)if(u=arguments[C],u!=null)for(p in u)c=a(S,p),f=a(u,p),S!==f&&(E&&f&&(l(f)||(h=i(f)))?(h?(h=!1,y=c&&i(c)?c:[]):y=c&&l(c)?c:{},o(S,{name:p,newValue:s(E,y,f)})):typeof f<"u"&&o(S,{name:p,newValue:f}));return S},Sn}var As=Es();const Cn=cr(As);function Vn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ts(){const e=[],t={run:n,use:r};return t;function n(...i){let l=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(s,...u){const p=e[++l];let c=-1;if(s){o(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,p?Ps(p,a)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Ps(e,t){let n;return r;function r(...o){const a=e.length>o.length;let s;a&&o.push(i);try{s=e.apply(this,o)}catch(u){const p=u;if(a&&n)throw p;return i(p)}a||(s&&s.then&&typeof s.then=="function"?s.then(l,i):s instanceof Error?i(s):l(s))}function i(o,...a){n||(n=!0,t(o,...a))}function l(o){i(null,o)}}const pe={basename:Is,dirname:js,extname:Ds,join:Fs,sep:"/"};function Is(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ke(e);let n=0,r=-1,i=e.length,l;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){n=i+1;break}}else o<0&&(l=!0,o=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function js(e){if(Ke(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Ds(e){Ke(e);let t=e.length,n=-1,r=0,i=-1,l=0,o;for(;t--;){const a=e.codePointAt(t);if(a===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),a===46?i<0?i=t:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||n<0||l===0||l===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Fs(...e){let t=-1,n;for(;++t<e.length;)Ke(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":_s(n)}function _s(e){Ke(e);const t=e.codePointAt(0)===47;let n=Ls(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Ls(e,t){let n="",r=0,i=-1,l=0,o=-1,a,s;for(;++o<=e.length;){if(o<e.length)a=e.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||l===1))if(i!==o-1&&l===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=o,l=0;continue}}else if(n.length>0){n="",r=0,i=o,l=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,l=0}else a===46&&l>-1?l++:l=-1}return n}function Ke(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Rs={cwd:Ms};function Ms(){return"/"}function Gn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function zs(e){if(typeof e=="string")e=new URL(e);else if(!Gn(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Ns(e)}function Ns(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const En=["history","path","basename","stem","extname","dirname"];class Gr{constructor(t){let n;t?Gn(t)?n={path:t}:typeof t=="string"||Bs(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Rs.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<En.length;){const l=En[r];l in n&&n[l]!==void 0&&n[l]!==null&&(this[l]=l==="history"?[...n[l]]:n[l])}let i;for(i in n)En.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?pe.basename(this.path):void 0}set basename(t){Tn(t,"basename"),An(t,"basename"),this.path=pe.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?pe.dirname(this.path):void 0}set dirname(t){Xt(this.basename,"dirname"),this.path=pe.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?pe.extname(this.path):void 0}set extname(t){if(An(t,"extname"),Xt(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=pe.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Gn(t)&&(t=zs(t)),Tn(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?pe.basename(this.path,this.extname):void 0}set stem(t){Tn(t,"stem"),An(t,"stem"),this.path=pe.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new K(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function An(e,t){if(e&&e.includes(pe.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+pe.sep+"`")}function Tn(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Xt(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Bs(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Os=(function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l}),Hs={}.hasOwnProperty;class at extends Os{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Ts()}copy(){const t=new at;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Cn(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(jn("data",this.frozen),this.namespace[t]=n,this):Hs.call(this.namespace,t)&&this.namespace[t]||void 0:t?(jn("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ln(t),r=this.parser||this.Parser;return Pn("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Pn("process",this.parser||this.Parser),In("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(l,o){const a=ln(t),s=r.parse(a);r.run(s,a,function(p,c,f){if(p||!c||!f)return u(p);const h=c,y=r.stringify(h,f);Vs(y)?f.value=y:f.result=y,u(p,f)});function u(p,c){p||!c?o(p):l?l(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Pn("processSync",this.parser||this.Parser),In("processSync",this.compiler||this.Compiler),this.process(t,i),Kt("processSync","process",n),r;function i(l,o){n=!0,Jt(l),r=o}}run(t,n,r){Yt(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?l(void 0,r):new Promise(l);function l(o,a){const s=ln(n);i.run(t,s,u);function u(p,c,f){const h=c||t;p?a(p):o?o(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,l),Kt("runSync","run",r),i;function l(o,a){Jt(o),i=a,r=!0}}stringify(t,n){this.freeze();const r=ln(n),i=this.compiler||this.Compiler;return In("stringify",i),Yt(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(jn("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function l(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[p,...c]=u;s(p,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Cn(!0,i.settings,u.settings))}function a(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){const c=u[p];l(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,p){let c=-1,f=-1;for(;++c<r.length;)if(r[c][0]===u){f=c;break}if(f===-1)r.push([u,...p]);else if(p.length>0){let[h,...y]=p;const S=r[f][1];Vn(S)&&Vn(h)&&(h=Cn(!0,S,h)),r[f]=[u,h,...y]}}}}const Us=new at().freeze();function Pn(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function In(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function jn(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Yt(e){if(!Vn(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Kt(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ln(e){return qs(e)?e:new Gr(e)}function qs(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Vs(e){return typeof e=="string"||Gs(e)}function Gs(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $s="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Zt=[],er={allowDangerousHtml:!0},Ws=/^(https?|ircs?|mailto|xmpp)$/i,Js=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Qs(e){const t=Xs(e),n=Ys(e);return Ks(t.runSync(t.parse(n),n),e)}function Xs(e){const t=e.rehypePlugins||Zt,n=e.remarkPlugins||Zt,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...er}:er;return Us().use(ja).use(n).use(Cs,r).use(t)}function Ys(e){const t=e.children||"",n=new Gr;return typeof t=="string"&&(n.value=t),n}function Ks(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,l=t.disallowedElements,o=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||Zs;for(const p of Js)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+$s+p.id,void 0);return lt(e,u),ho(e,{Fragment:x.Fragment,components:i,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function u(p,c,f){if(p.type==="raw"&&f&&typeof c=="number")return o?f.children.splice(c,1):f.children[c]={type:"text",value:p.value},c;if(p.type==="element"){let h;for(h in xn)if(Object.hasOwn(xn,h)&&Object.hasOwn(p.properties,h)){const y=p.properties[h],S=xn[h];(S===null||S.includes(p.tagName))&&(p.properties[h]=s(String(y||""),h,p))}}if(p.type==="element"){let h=n?!n.includes(p.tagName):l?l.includes(p.tagName):!1;if(!h&&r&&typeof c=="number"&&(h=!r(p,c,f)),h&&f&&typeof c=="number")return a&&p.children?f.children.splice(c,1,...p.children):f.children.splice(c,1),c}}}function Zs(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Ws.test(e.slice(0,t))?e:""}function nr(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function eu(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function nu(e,t,n){const i=gn((n||{}).ignore||[]),l=tu(t);let o=-1;for(;++o<l.length;)Vr(e,"text",a);function a(u,p){let c=-1,f;for(;++c<p.length;){const h=p[c],y=f?f.children:void 0;if(i(h,y?y.indexOf(h):void 0,f))return;f=h}if(f)return s(u,p)}function s(u,p){const c=p[p.length-1],f=l[o][0],h=l[o][1];let y=0;const C=c.children.indexOf(u);let g=!1,E=[];f.lastIndex=0;let v=f.exec(u.value);for(;v;){const _=v.index,L={index:v.index,input:v.input,stack:[...p,u]};let k=h(...v,L);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?f.lastIndex=_+1:(y!==_&&E.push({type:"text",value:u.value.slice(y,_)}),Array.isArray(k)?E.push(...k):k&&E.push(k),y=_+v[0].length,g=!0),!f.global)break;v=f.exec(u.value)}return g?(y<u.value.length&&E.push({type:"text",value:u.value.slice(y)}),c.children.splice(C,1,...E)):E=[u],C+E.length}}function tu(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([ru(i[0]),iu(i[1])])}return t}function ru(e){return typeof e=="string"?new RegExp(eu(e),"g"):e}function iu(e){return typeof e=="function"?e:function(){return e}}const Dn="phrasing",Fn=["autolink","link","image","label"];function ou(){return{transforms:[hu],enter:{literalAutolink:au,literalAutolinkEmail:_n,literalAutolinkHttp:_n,literalAutolinkWww:_n},exit:{literalAutolink:pu,literalAutolinkEmail:cu,literalAutolinkHttp:su,literalAutolinkWww:uu}}}function lu(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Dn,notInConstruct:Fn},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Dn,notInConstruct:Fn},{character:":",before:"[ps]",after:"\\/",inConstruct:Dn,notInConstruct:Fn}]}}function au(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function _n(e){this.config.enter.autolinkProtocol.call(this,e)}function su(e){this.config.exit.autolinkProtocol.call(this,e)}function uu(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function cu(e){this.config.exit.autolinkEmail.call(this,e)}function pu(e){this.exit(e)}function hu(e){nu(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,fu],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),du]],{ignore:["link","linkReference"]})}function fu(e,t,n,r,i){let l="";if(!$r(i)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!mu(n)))return!1;const o=gu(n+r);if(!o[0])return!1;const a={type:"link",title:null,url:l+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function du(e,t,n,r){return!$r(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function mu(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function gu(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=nr(e,"(");let l=nr(e,")");for(;r!==-1&&i>l;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),l++;return[e,n]}function $r(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Ee(n)||fn(n))&&(!t||n!==47)}Wr.peek=Eu;function yu(){this.buffer()}function bu(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function ku(){this.buffer()}function xu(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function wu(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ce(this.sliceSerialize(e)).toLowerCase(),n.label=t}function vu(e){this.exit(e)}function Su(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ce(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Cu(e){this.exit(e)}function Eu(){return"["}function Wr(e,t,n,r){const i=n.createTracker(r);let l=i.move("[^");const o=n.enter("footnoteReference"),a=n.enter("reference");return l+=i.move(n.safe(n.associationId(e),{after:"]",before:l})),a(),o(),l+=i.move("]"),l}function Au(){return{enter:{gfmFootnoteCallString:yu,gfmFootnoteCall:bu,gfmFootnoteDefinitionLabelString:ku,gfmFootnoteDefinition:xu},exit:{gfmFootnoteCallString:wu,gfmFootnoteCall:vu,gfmFootnoteDefinitionLabelString:Su,gfmFootnoteDefinition:Cu}}}function Tu(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Wr},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,l,o){const a=l.createTracker(o);let s=a.move("[^");const u=l.enter("footnoteDefinition"),p=l.enter("label");return s+=a.move(l.safe(l.associationId(r),{before:s,after:"]"})),p(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+l.indentLines(l.containerFlow(r,a.current()),t?Jr:Pu))),u(),s}}function Pu(e,t,n){return t===0?e:Jr(e,t,n)}function Jr(e,t,n){return(n?"":"    ")+e}const Iu=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Qr.peek=Lu;function ju(){return{canContainEols:["delete"],enter:{strikethrough:Fu},exit:{strikethrough:_u}}}function Du(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Iu}],handlers:{delete:Qr}}}function Fu(e){this.enter({type:"delete",children:[]},e)}function _u(e){this.exit(e)}function Qr(e,t,n,r){const i=n.createTracker(r),l=n.enter("strikethrough");let o=i.move("~~");return o+=n.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),l(),o}function Lu(){return"~"}function Ru(e){return e.length}function Mu(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Ru,l=[],o=[],a=[],s=[];let u=0,p=-1;for(;++p<e.length;){const S=[],C=[];let g=-1;for(e[p].length>u&&(u=e[p].length);++g<e[p].length;){const E=zu(e[p][g]);if(n.alignDelimiters!==!1){const v=i(E);C[g]=v,(s[g]===void 0||v>s[g])&&(s[g]=v)}S.push(E)}o[p]=S,a[p]=C}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)l[c]=tr(r[c]);else{const S=tr(r);for(;++c<u;)l[c]=S}c=-1;const f=[],h=[];for(;++c<u;){const S=l[c];let C="",g="";S===99?(C=":",g=":"):S===108?C=":":S===114&&(g=":");let E=n.alignDelimiters===!1?1:Math.max(1,s[c]-C.length-g.length);const v=C+"-".repeat(E)+g;n.alignDelimiters!==!1&&(E=C.length+E+g.length,E>s[c]&&(s[c]=E),h[c]=E),f[c]=v}o.splice(1,0,f),a.splice(1,0,h),p=-1;const y=[];for(;++p<o.length;){const S=o[p],C=a[p];c=-1;const g=[];for(;++c<u;){const E=S[c]||"";let v="",_="";if(n.alignDelimiters!==!1){const L=s[c]-(C[c]||0),k=l[c];k===114?v=" ".repeat(L):k===99?L%2?(v=" ".repeat(L/2+.5),_=" ".repeat(L/2-.5)):(v=" ".repeat(L/2),_=v):_=" ".repeat(L)}n.delimiterStart!==!1&&!c&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&E==="")&&(n.delimiterStart!==!1||c)&&g.push(" "),n.alignDelimiters!==!1&&g.push(v),g.push(E),n.alignDelimiters!==!1&&g.push(_),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&g.push("|")}y.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return y.join(`
`)}function zu(e){return e==null?"":String(e)}function tr(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Nu(e,t,n,r){const i=n.enter("blockquote"),l=n.createTracker(r);l.move("> "),l.shift(2);const o=n.indentLines(n.containerFlow(e,l.current()),Bu);return i(),o}function Bu(e,t,n){return">"+(n?"":" ")+e}function Ou(e,t){return rr(e,t.inConstruct,!0)&&!rr(e,t.notInConstruct,!1)}function rr(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ir(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Ou(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function Hu(e,t){const n=String(e);let r=n.indexOf(t),i=r,l=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>o&&(o=l):l=1,i=r+t.length,r=n.indexOf(t,i);return o}function Uu(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function qu(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Vu(e,t,n,r){const i=qu(n),l=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(Uu(e,n)){const c=n.enter("codeIndented"),f=n.indentLines(l,Gu);return c(),f}const a=n.createTracker(r),s=i.repeat(Math.max(Hu(l,i)+1,3)),u=n.enter("codeFenced");let p=a.move(s);if(e.lang){const c=n.enter(`codeFencedLang${o}`);p+=a.move(n.safe(e.lang,{before:p,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${o}`);p+=a.move(" "),p+=a.move(n.safe(e.meta,{before:p,after:`
`,encode:["`"],...a.current()})),c()}return p+=a.move(`
`),l&&(p+=a.move(l+`
`)),p+=a.move(s),u(),p}function Gu(e,t,n){return(n?"":"    ")+e}function st(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function $u(e,t,n,r){const i=st(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("definition");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),o(),u}function Wu(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Qe(e){return"&#x"+e.toString(16).toUpperCase()+";"}function hn(e,t,n){const r=Le(e),i=Le(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Xr.peek=Ju;function Xr(e,t,n,r){const i=Wu(n),l=n.enter("emphasis"),o=n.createTracker(r),a=o.move(i);let s=o.move(n.containerPhrasing(e,{after:i,before:a,...o.current()}));const u=s.charCodeAt(0),p=hn(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Qe(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=hn(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Qe(c));const h=o.move(i);return l(),n.attentionEncodeSurroundingInfo={after:f.outside,before:p.outside},a+s+h}function Ju(e,t,n){return n.options.emphasis||"*"}function Qu(e,t){let n=!1;return lt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Un}),!!((!e.depth||e.depth<3)&&Zn(e)&&(t.options.setext||n))}function Xu(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),l=n.createTracker(r);if(Qu(e,n)){const p=n.enter("headingSetext"),c=n.enter("phrasing"),f=n.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return c(),p(),f+`
`+(i===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const o="#".repeat(i),a=n.enter("headingAtx"),s=n.enter("phrasing");l.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(u)&&(u=Qe(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),s(),a(),u}Yr.peek=Yu;function Yr(e){return e.value||""}function Yu(){return"<"}Kr.peek=Ku;function Kr(e,t,n,r){const i=st(n),l=i==='"'?"Quote":"Apostrophe",o=n.enter("image");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${l}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),u+=s.move(")"),o(),u}function Ku(){return"!"}Zr.peek=Zu;function Zr(e,t,n,r){const i=e.referenceType,l=n.enter("imageReference");let o=n.enter("label");const a=n.createTracker(r);let s=a.move("![");const u=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),o();const p=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return o(),n.stack=p,l(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function Zu(){return"!"}ei.peek=ec;function ei(e,t,n){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<n.unsafe.length;){const o=n.unsafe[l],a=n.compilePattern(o);let s;if(o.atBreak)for(;s=a.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function ec(){return"`"}function ni(e,t){const n=Zn(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ti.peek=nc;function ti(e,t,n,r){const i=st(n),l=i==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let a,s;if(ni(e,n)){const p=n.stack;n.stack=[],a=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),a(),n.stack=p,c}a=n.enter("link"),s=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(s=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=n.enter(`title${l}`),u+=o.move(" "+i),u+=o.move(n.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),s()),u+=o.move(")"),a(),u}function nc(e,t,n){return ni(e,n)?"<":"["}ri.peek=tc;function ri(e,t,n,r){const i=e.referenceType,l=n.enter("linkReference");let o=n.enter("label");const a=n.createTracker(r);let s=a.move("[");const u=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),o();const p=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return o(),n.stack=p,l(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function tc(){return"["}function ut(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function rc(e){const t=ut(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function ic(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ii(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function oc(e,t,n,r){const i=n.enter("list"),l=n.bulletCurrent;let o=e.ordered?ic(n):ut(n);const a=e.ordered?o==="."?")":".":rc(n);let s=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const p=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&p&&(!p.children||!p.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),ii(n)===o&&p){let c=-1;for(;++c<e.children.length;){const f=e.children[c];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(o=a),n.bulletCurrent=o;const u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=l,i(),u}function lc(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function ac(e,t,n,r){const i=lc(n);let l=n.bulletCurrent||ut(n);t&&t.type==="list"&&t.ordered&&(l=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+l);let o=l.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const a=n.createTracker(r);a.move(l+" ".repeat(o-l.length)),a.shift(o);const s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),p);return s(),u;function p(c,f,h){return f?(h?"":" ".repeat(o))+c:(h?l:l+" ".repeat(o-l.length))+c}}function sc(e,t,n,r){const i=n.enter("paragraph"),l=n.enter("phrasing"),o=n.containerPhrasing(e,r);return l(),i(),o}const uc=gn(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function cc(e,t,n,r){return(e.children.some(function(o){return uc(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function pc(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}oi.peek=hc;function oi(e,t,n,r){const i=pc(n),l=n.enter("strong"),o=n.createTracker(r),a=o.move(i+i);let s=o.move(n.containerPhrasing(e,{after:i,before:a,...o.current()}));const u=s.charCodeAt(0),p=hn(r.before.charCodeAt(r.before.length-1),u,i);p.inside&&(s=Qe(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=hn(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Qe(c));const h=o.move(i+i);return l(),n.attentionEncodeSurroundingInfo={after:f.outside,before:p.outside},a+s+h}function hc(e,t,n){return n.options.strong||"*"}function fc(e,t,n,r){return n.safe(e.value,r)}function dc(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function mc(e,t,n){const r=(ii(n)+(n.options.ruleSpaces?" ":"")).repeat(dc(n));return n.options.ruleSpaces?r.slice(0,-1):r}const li={blockquote:Nu,break:ir,code:Vu,definition:$u,emphasis:Xr,hardBreak:ir,heading:Xu,html:Yr,image:Kr,imageReference:Zr,inlineCode:ei,link:ti,linkReference:ri,list:oc,listItem:ac,paragraph:sc,root:cc,strong:oi,text:fc,thematicBreak:mc};function gc(){return{enter:{table:yc,tableData:or,tableHeader:or,tableRow:kc},exit:{codeText:xc,table:bc,tableData:Ln,tableHeader:Ln,tableRow:Ln}}}function yc(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function bc(e){this.exit(e),this.data.inTable=void 0}function kc(e){this.enter({type:"tableRow",children:[]},e)}function Ln(e){this.exit(e)}function or(e){this.enter({type:"tableCell",children:[]},e)}function xc(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,wc));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function wc(e,t){return t==="|"?t:e}function vc(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,l=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:o,tableCell:s,tableRow:a}};function o(h,y,S,C){return u(p(h,S,C),h.align)}function a(h,y,S,C){const g=c(h,S,C),E=u([g]);return E.slice(0,E.indexOf(`
`))}function s(h,y,S,C){const g=S.enter("tableCell"),E=S.enter("phrasing"),v=S.containerPhrasing(h,{...C,before:l,after:l});return E(),g(),v}function u(h,y){return Mu(h,{align:y,alignDelimiters:r,padding:n,stringLength:i})}function p(h,y,S){const C=h.children;let g=-1;const E=[],v=y.enter("table");for(;++g<C.length;)E[g]=c(C[g],y,S);return v(),E}function c(h,y,S){const C=h.children;let g=-1;const E=[],v=y.enter("tableRow");for(;++g<C.length;)E[g]=s(C[g],h,y,S);return v(),E}function f(h,y,S){let C=li.inlineCode(h,y,S);return S.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function Sc(){return{exit:{taskListCheckValueChecked:lr,taskListCheckValueUnchecked:lr,paragraph:Ec}}}function Cc(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Ac}}}function lr(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function Ec(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let l=-1,o;for(;++l<i.length;){const a=i[l];if(a.type==="paragraph"){o=a;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function Ac(e,t,n,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);l&&a.move(o);let s=li.listItem(e,t,n,{...r,...a.current()});return l&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(p){return p+o}}function Tc(){return[ou(),Au(),ju(),gc(),Sc()]}function Pc(e){return{extensions:[lu(),Tu(e),Du(),vc(e),Cc()]}}const Ic={tokenize:Rc,partial:!0},ai={tokenize:Mc,partial:!0},si={tokenize:zc,partial:!0},ui={tokenize:Nc,partial:!0},jc={tokenize:Bc,partial:!0},ci={name:"wwwAutolink",tokenize:_c,previous:hi},pi={name:"protocolAutolink",tokenize:Lc,previous:fi},be={name:"emailAutolink",tokenize:Fc,previous:di},he={};function Dc(){return{text:he}}let Ce=48;for(;Ce<123;)he[Ce]=be,Ce++,Ce===58?Ce=65:Ce===91&&(Ce=97);he[43]=be;he[45]=be;he[46]=be;he[95]=be;he[72]=[be,pi];he[104]=[be,pi];he[87]=[be,ci];he[119]=[be,ci];function Fc(e,t,n){const r=this;let i,l;return o;function o(c){return!$n(c)||!di.call(r,r.previous)||ct(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return $n(c)?(e.consume(c),a):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(jc,p,u)(c):c===45||c===95||Y(c)?(l=!0,e.consume(c),s):p(c)}function u(c){return e.consume(c),i=!0,s}function p(c){return l&&i&&Z(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function _c(e,t,n){const r=this;return i;function i(o){return o!==87&&o!==119||!hi.call(r,r.previous)||ct(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Ic,e.attempt(ai,e.attempt(si,l),n),n)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function Lc(e,t,n){const r=this;let i="",l=!1;return o;function o(c){return(c===72||c===104)&&fi.call(r,r.previous)&&!ct(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(Z(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const f=i.toLowerCase();if(f==="http"||f==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),l?u:(l=!0,s)):n(c)}function u(c){return c===null||un(c)||$(c)||Ee(c)||fn(c)?n(c):e.attempt(ai,e.attempt(si,p),n)(c)}function p(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function Rc(e,t,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),l):n(o)}function l(o){return o===null?n(o):t(o)}}function Mc(e,t,n){let r,i,l;return o;function o(u){return u===46||u===95?e.check(ui,s,a)(u):u===null||$(u)||Ee(u)||u!==45&&fn(u)?s(u):(l=!0,e.consume(u),o)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),o}function s(u){return i||r||!l?n(u):t(u)}}function zc(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(ui,t,l)(o):o===null||$(o)||Ee(o)?t(o):(e.consume(o),i)}function l(o){return o===41&&r++,e.consume(o),i}}function Nc(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),l):a===93?(e.consume(a),i):a===60||a===null||$(a)||Ee(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||$(a)||Ee(a)?t(a):r(a)}function l(a){return Z(a)?o(a):n(a)}function o(a){return a===59?(e.consume(a),r):Z(a)?(e.consume(a),o):n(a)}}function Bc(e,t,n){return r;function r(l){return e.consume(l),i}function i(l){return Y(l)?n(l):t(l)}}function hi(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$(e)}function fi(e){return!Z(e)}function di(e){return!(e===47||$n(e))}function $n(e){return e===43||e===45||e===46||e===95||Y(e)}function ct(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const Oc={tokenize:Jc,partial:!0};function Hc(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Gc,continuation:{tokenize:$c},exit:Wc}},text:{91:{name:"gfmFootnoteCall",tokenize:Vc},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Uc,resolveTo:qc}}}}function Uc(e,t,n){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!o||!o._balanced)return n(s);const u=ce(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!l.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function qc(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",l,t],["enter",o,t],["exit",o,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function Vc(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,o;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(l>999||c===93&&!o||c===null||c===91||$(c))return n(c);if(c===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return i.includes(ce(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return $(c)||(o=!0),l++,e.consume(c),c===92?p:u}function p(c){return c===91||c===92||c===93?(e.consume(c),l++,u):u(c)}}function Gc(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,o=0,a;return s;function s(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(y){return y===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):n(y)}function p(y){if(o>999||y===93&&!a||y===null||y===91||$(y))return n(y);if(y===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return l=ce(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return $(y)||(a=!0),o++,e.consume(y),y===92?c:p}function c(y){return y===91||y===92||y===93?(e.consume(y),o++,p):p(y)}function f(y){return y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),i.includes(l)||i.push(l),H(e,h,"gfmFootnoteDefinitionWhitespace")):n(y)}function h(y){return t(y)}}function $c(e,t,n){return e.check(Ye,t,e.attempt(Oc,t,n))}function Wc(e){e.exit("gfmFootnoteDefinition")}function Jc(e,t,n){const r=this;return H(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(l):n(l)}}function Qc(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,a){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let u=s;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[s][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const p={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[s][1].start)},f=[["enter",p,a],["enter",o[u][1],a],["exit",o[u][1],a],["enter",c,a]],h=a.parser.constructs.insideSpan.null;h&&ie(f,f.length,0,dn(h,o.slice(u+1,s),a)),ie(f,f.length,0,[["exit",c,a],["enter",o[s][1],a],["exit",o[s][1],a],["exit",p,a]]),ie(o,u-1,s-u+3,f),s=u+f.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function l(o,a,s){const u=this.previous,p=this.events;let c=0;return f;function f(y){return u===126&&p[p.length-1][1].type!=="characterEscape"?s(y):(o.enter("strikethroughSequenceTemporary"),h(y))}function h(y){const S=Le(u);if(y===126)return c>1?s(y):(o.consume(y),c++,h);if(c<2&&!n)return s(y);const C=o.exit("strikethroughSequenceTemporary"),g=Le(y);return C._open=!g||g===2&&!!S,C._close=!S||S===2&&!!g,a(y)}}}class Xc{constructor(){this.map=[]}add(t,n,r){Yc(this,t,n,r)}consume(t){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const l of i)t.push(l);i=r.pop()}this.map.length=0}}function Yc(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function Kc(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function Zc(){return{flow:{null:{name:"table",tokenize:ep,resolveAll:np}}}}function ep(e,t,n){const r=this;let i=0,l=0,o;return a;function a(b){let I=r.events.length-1;for(;I>-1;){const F=r.events[I][1].type;if(F==="lineEnding"||F==="linePrefix")I--;else break}const j=I>-1?r.events[I][1].type:null,q=j==="tableHead"||j==="tableRow"?k:s;return q===k&&r.parser.lazy[r.now().line]?n(b):q(b)}function s(b){return e.enter("tableHead"),e.enter("tableRow"),u(b)}function u(b){return b===124||(o=!0,l+=1),p(b)}function p(b){return b===null?n(b):D(b)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),h):n(b):N(b)?H(e,p,"whitespace")(b):(l+=1,o&&(o=!1,i+=1),b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),o=!0,p):(e.enter("data"),c(b)))}function c(b){return b===null||b===124||$(b)?(e.exit("data"),p(b)):(e.consume(b),b===92?f:c)}function f(b){return b===92||b===124?(e.consume(b),c):c(b)}function h(b){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(b):(e.enter("tableDelimiterRow"),o=!1,N(b)?H(e,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):y(b))}function y(b){return b===45||b===58?C(b):b===124?(o=!0,e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),S):L(b)}function S(b){return N(b)?H(e,C,"whitespace")(b):C(b)}function C(b){return b===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),g):b===45?(l+=1,g(b)):b===null||D(b)?_(b):L(b)}function g(b){return b===45?(e.enter("tableDelimiterFiller"),E(b)):L(b)}function E(b){return b===45?(e.consume(b),E):b===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(b),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(b))}function v(b){return N(b)?H(e,_,"whitespace")(b):_(b)}function _(b){return b===124?y(b):b===null||D(b)?!o||i!==l?L(b):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(b)):L(b)}function L(b){return n(b)}function k(b){return e.enter("tableRow"),R(b)}function R(b){return b===124?(e.enter("tableCellDivider"),e.consume(b),e.exit("tableCellDivider"),R):b===null||D(b)?(e.exit("tableRow"),t(b)):N(b)?H(e,R,"whitespace")(b):(e.enter("data"),U(b))}function U(b){return b===null||b===124||$(b)?(e.exit("data"),R(b)):(e.consume(b),b===92?O:U)}function O(b){return b===92||b===124?(e.consume(b),U):U(b)}}function np(e,t){let n=-1,r=!0,i=0,l=[0,0,0,0],o=[0,0,0,0],a=!1,s=0,u,p,c;const f=new Xc;for(;++n<e.length;){const h=e[n],y=h[1];h[0]==="enter"?y.type==="tableHead"?(a=!1,s!==0&&(ar(f,t,s,u,p),p=void 0,s=0),u={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},f.add(n,0,[["enter",u,t]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(r=!0,c=void 0,l=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,p={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},f.add(n,0,[["enter",p,t]])),i=y.type==="tableDelimiterRow"?2:p?3:1):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],c=an(f,t,l,i,void 0,c),l=[0,0,0,0]),o[2]=n)):y.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(o[0]=o[1],c=an(f,t,l,i,void 0,c)),l=o,o=[l[1],n,0,0])):y.type==="tableHead"?(a=!0,s=n):y.type==="tableRow"||y.type==="tableDelimiterRow"?(s=n,l[1]!==0?(o[0]=o[1],c=an(f,t,l,i,n,c)):o[1]!==0&&(c=an(f,t,o,i,n,c)),i=0):i&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(o[3]=n)}for(s!==0&&ar(f,t,s,u,p),f.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Kc(t.events,n))}return e}function an(e,t,n,r,i,l){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(l.end=Object.assign({},Fe(t.events,n[0])),e.add(n[0],0,[["exit",l,t]]));const s=Fe(t.events,n[1]);if(l={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",l,t]]),n[2]!==0){const u=Fe(t.events,n[2]),p=Fe(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},p)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const f=t.events[n[2]],h=t.events[n[3]];if(f[1].end=Object.assign({},h[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const y=n[2]+1,S=n[3]-n[2]-1;e.add(y,S,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(l.end=Object.assign({},Fe(t.events,i)),e.add(i,0,[["exit",l,t]]),l=void 0),l}function ar(e,t,n,r,i){const l=[],o=Fe(t.events,n);i&&(i.end=Object.assign({},o),l.push(["exit",i,t])),r.end=Object.assign({},o),l.push(["exit",r,t]),e.add(n+1,0,l)}function Fe(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const tp={name:"tasklistCheck",tokenize:ip};function rp(){return{text:{91:tp}}}function ip(e,t,n){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),l)}function l(s){return $(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return D(s)?t(s):N(s)?e.check({tokenize:op},t,n)(s):n(s)}}function op(e,t,n){return H(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function lp(e){return Er([Dc(),Hc(),Qc(e),Zc(),rp()])}const ap={};function sp(e){const t=this,n=e||ap,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(lp(n)),l.push(Tc()),o.push(Pc(n))}const up="/assets/Chameleon-CkGMLAmh.webp",cp="/assets/EduPlus-DWMxSPsP.webp",pp="/assets/Freelance-Website-CtA9Z8yx.webp",hp="/assets/Portfolio-CkyMyu4c.webp",fp="/assets/Tunez-4GBP1FTs.webp",dp="/assets/EduPlus-CKg-9Bso.webp",mp="/assets/Freelance-Website-CQXyxRon.webp",gp="/assets/Portfolio-CzSnR1md.webp",yp=Object.assign({"../data/projects/images/Chameleon.webp":up,"../data/projects/images/EduPlus.webp":cp,"../data/projects/images/Freelance-Website.webp":pp,"../data/projects/images/Portfolio.webp":hp,"../data/projects/images/Tunez.webp":fp}),bp=Object.assign({"../data/projects/images/Mobile/EduPlus.webp":dp,"../data/projects/images/Mobile/Freelance-Website.webp":mp,"../data/projects/images/Mobile/Portfolio.webp":gp});function Rn(e){var t;return((t=e.split("/").pop())==null?void 0:t.replace(/\.[^.]+$/,"").toLowerCase().replace(/[^a-z0-9]/g,""))||""}const kp=["EduPlus","Freelance-Website","Portfolio"];function xp(){const e=Object.entries(yp),t=Object.entries(bp),n=new Map(t.map(([i,l])=>[Rn(i),l]));return kp.map(i=>{var s;const l=Rn(i),o=(s=e.find(([u])=>Rn(u)===l))==null?void 0:s[1],a=n.get(l);return{name:i,desktop:o,mobile:a}})}function wp(){const e=xp(),t=e.length>0,n=t?Array.from({length:3},(i,l)=>e[l%e.length]):[{name:"Project Screens",desktop:null,mobile:null}],r=()=>{const i=document.getElementById("gh-projects-grid");i&&i.scrollIntoView({behavior:"smooth"})};return x.jsxs("div",{className:"device-showcase reveal","aria-label":"Project screen showcase",children:[x.jsxs("div",{className:"device-copy",children:[x.jsx("span",{className:"device-kicker",children:"Project Preview"}),x.jsx("h3",{children:"See every project across desktop and Android."}),x.jsx("p",{children:"Add matching screenshots into the desktop and mobile folders. They will appear here automatically from your GitHub repository."}),x.jsxs("div",{className:"device-actions",children:[x.jsxs("button",{className:"device-btn-primary",onClick:()=>window.open("https://github.com/muthukumaranarc","_blank"),children:["View on GitHub",x.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[x.jsx("path",{d:"M5 12h14"}),x.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),x.jsx("button",{className:"device-btn-secondary",onClick:r,children:"Explore Projects"})]})]}),x.jsxs("div",{className:"device-stage",children:[x.jsx("span",{className:"device-cursive","aria-hidden":"true",children:"Ideas into Reality"}),x.jsx("div",{className:"device-dots","aria-hidden":"true"}),x.jsxs("div",{className:"device-annotation annotation-desktop",children:[x.jsxs("div",{className:"annotation-badge",children:[x.jsx("span",{className:"material-symbols-outlined",children:"laptop_mac"}),x.jsx("span",{children:"Desktop View"})]}),x.jsxs("svg",{className:"annotation-arrow arrow-desktop",viewBox:"0 0 40 56",fill:"none","aria-hidden":"true",children:[x.jsx("path",{d:"M20 2 C 33 15, 33 33, 20 48",stroke:"#166534",strokeWidth:"2",strokeLinecap:"round"}),x.jsx("path",{d:"M20 48 L 28 36 M20 48 L 12 36",stroke:"#166534",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),x.jsxs("div",{className:"laptop-device","aria-hidden":!t,children:[x.jsxs("div",{className:"laptop-lid",children:[x.jsx("div",{className:"laptop-camera"}),x.jsx("div",{className:"laptop-screen",children:x.jsx("div",{className:`screen-track ${t?"":"is-empty"}`,children:n.map((i,l)=>x.jsx("div",{className:"screen-slide",children:i.desktop?x.jsx("img",{src:i.desktop,alt:`${i.name} desktop screenshot`,loading:"lazy",decoding:"async"}):x.jsxs("div",{className:"screen-placeholder",children:[x.jsx("span",{className:"material-symbols-outlined",children:"desktop_windows"}),x.jsx("strong",{children:"Desktop Screenshot"})]})},`${i.name}-desktop-${l}`))})})]}),x.jsx("div",{className:"laptop-base"})]}),x.jsxs("div",{className:"android-phone","aria-hidden":!t,children:[x.jsx("div",{className:"android-speaker"}),x.jsx("div",{className:"android-screen",children:x.jsx("div",{className:`phone-track ${t?"":"is-empty"}`,children:n.map((i,l)=>x.jsx("div",{className:"phone-slide",children:i.mobile?x.jsx("img",{src:i.mobile,alt:`${i.name} mobile screenshot`,loading:"lazy",decoding:"async"}):x.jsxs("div",{className:"screen-placeholder phone-placeholder",children:[x.jsx("span",{className:"material-symbols-outlined",children:"smartphone"}),x.jsx("strong",{children:"Mobile Screenshot"})]})},`${i.name}-mobile-${l}`))})}),x.jsxs("div",{className:"android-nav",children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]})]}),x.jsxs("div",{className:"device-annotation annotation-mobile",children:[x.jsxs("svg",{className:"annotation-arrow arrow-mobile",viewBox:"0 0 56 40",fill:"none","aria-hidden":"true",children:[x.jsx("path",{d:"M54 20 C 42 32, 24 32, 12 20",stroke:"#166534",strokeWidth:"2",strokeLinecap:"round"}),x.jsx("path",{d:"M12 20 L 24 12 M12 20 L 24 28",stroke:"#166534",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),x.jsxs("div",{className:"annotation-badge",children:[x.jsx("span",{className:"material-symbols-outlined",children:"smartphone"}),x.jsx("span",{children:"Mobile View"})]})]})]})]})}const sr=Object.assign({"../data/projects/readmes/Chameleon.md":Ai,"../data/projects/readmes/EduPlus.md":Ti,"../data/projects/readmes/Freelance-Website.md":Pi,"../data/projects/readmes/Portfolio.md":Ii,"../data/projects/readmes/Product-Designs.md":ji,"../data/projects/readmes/Tunez.md":Di,"../data/projects/readmes/business-consulting-langing-page.md":Fi,"../data/projects/readmes/furniture-landing-page.md":_i,"../data/projects/readmes/muthukumaranarc.md":Li,"../data/projects/readmes/restaurant-landing-page.md":Ri,"../data/projects/readmes/textail-landing-page.md":Mi,"../data/projects/readmes/travel-agency-landing-page.md":zi}),Ve=e=>e.title||e.name.replace(/-/g," "),vp=e=>{const t=Object.keys(sr).find(n=>n.includes(`/${e}.md`));return t?sr[t]:null},Sp=new Set(["ai","api","css","html","js","jwt","sql","ui","ux","oauth"]),ur={reactjs:"React",reactapi:"React API",vuejs:"Vue",nodejs:"Node.js",nextjs:"Next.js",javascript:"JavaScript",typescript:"TypeScript",mongodb:"MongoDB",postgresql:"PostgreSQL",mysql:"MySQL",springboot:"Spring Boot"},Cp=e=>e.split(/[-_]+/).map(t=>{const n=t.toLowerCase();return ur[n]?ur[n]:Sp.has(n)?n.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)}).join(" ");function Tp({onOpenLearnings:e}){const[t,n]=ye.useState("loading"),[r,i]=ye.useState([]),[l,o]=ye.useState("All"),[a,s]=ye.useState(null),[u,p]=ye.useState({status:"idle",content:""}),c=["All",...Ei],f=ye.useCallback(async()=>{n("loading");try{const g=await fetch(`https://api.github.com/users/${en}/repos?per_page=100&sort=updated&type=owner`);if(!g.ok)throw new Error(`GitHub API responded ${g.status}`);const E=await g.json(),v=new Map(E.map(L=>[L.name,L])),_=gt.map(L=>{const k=v.get(L),R=yt[L]||{};if(!k&&!R.title)return null;const U=k&&k.description||R.description||"",O=k&&k.homepage||R.homepage||"",b=R.github||k&&k.html_url||`https://github.com/${en}/${L}`,I=k&&k.topics&&k.topics.length>0?k.topics:R.topics||[],j=R.categories||(k?Ci(k):["Others"]);return{name:k&&k.name||L,title:R.title||(k&&k.name||L).replace(/-/g," "),description:U,homepage:O,github:b,topics:I,categories:j}}).filter(Boolean);i(_),n("ready")}catch(g){console.warn("Failed to fetch GitHub projects live, using fallback metadata:",g);const E=gt.map(v=>{const _=yt[v]||{};return{name:v,title:_.title||v.replace(/-/g," "),description:_.description||"",homepage:_.homepage||"",github:_.github||`https://github.com/${en}/${v}`,topics:_.topics||[],categories:_.categories||["Web Projects"]}});i(E),n("ready")}},[]);ye.useEffect(()=>{f()},[f]);const h=ye.useCallback(async g=>{p({status:"loading",content:""});try{const E=await fetch(`https://api.github.com/repos/${en}/${encodeURIComponent(g)}/readme`,{headers:{Accept:"application/vnd.github.raw+json"}});if(!E.ok)throw new Error(`GitHub API responded ${E.status}`);const v=await E.text();p({status:"ready",content:v})}catch(E){const v=vp(g);v?p({status:"ready",content:v}):(console.error("Failed to fetch README:",E),p({status:"error",content:""}))}},[]),y=g=>{s(g),document.body.style.overflow="hidden",h(g.name)},S=()=>{s(null),p({status:"idle",content:""}),document.body.style.overflow="auto"};ye.useEffect(()=>{if(!a)return;const g=E=>{E.key==="Escape"&&S()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[a]);const C=l==="All"?r:r.filter(g=>(g.categories||[]).includes(l));return x.jsxs("section",{className:"gh-projects-section",id:"projects",children:[x.jsxs("div",{className:"gh-projects-container",children:[x.jsxs("div",{className:"work-header reveal",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"work-title",children:nn.title}),x.jsx("p",{className:"work-subtitle",children:nn.subtitle})]}),x.jsxs("button",{className:"work-archive-link",onClick:()=>window.open(nn.archiveUrl,"_blank"),children:[nn.archiveLabel,x.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[x.jsx("path",{d:"M5 12h14"}),x.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),x.jsx(wp,{}),t==="loading"&&x.jsxs("div",{className:"gh-projects-grid","aria-live":"polite",children:[Array.from({length:3},(g,E)=>x.jsxs("div",{className:"gh-card gh-skeleton-card",children:[x.jsx("div",{className:"gh-skeleton-img"}),x.jsxs("div",{className:"gh-skeleton-body",children:[x.jsx("div",{className:"gh-skeleton-line title"}),x.jsx("div",{className:"gh-skeleton-line"}),x.jsx("div",{className:"gh-skeleton-line short"})]})]},E)),x.jsx("p",{className:"gh-fetch-note",children:"Fetching latest projects from GitHub…"})]}),t==="error"&&x.jsxs("div",{className:"gh-fetch-state",role:"alert",children:[x.jsx("span",{className:"material-symbols-outlined",children:"cloud_off"}),x.jsx("p",{children:"Couldn't fetch projects from GitHub right now."}),x.jsx("button",{className:"gh-retry-btn",onClick:f,children:"Try again"})]}),t==="ready"&&r.length===0&&x.jsxs("div",{className:"gh-empty-state",children:["No repos matched the names in ",x.jsx("code",{children:"src/data/projects/projectData.js"})," — make sure ",x.jsx("code",{children:"projectNames"})," lists exact GitHub repository names."]}),t==="ready"&&r.length>0&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"gh-filter-bar",role:"group","aria-label":"Filter projects by category",children:c.map(g=>x.jsx("button",{className:`gh-filter-chip${l===g?" active":""}`,onClick:()=>o(g),"aria-pressed":l===g,children:g},g))}),x.jsxs("div",{className:"gh-projects-grid",id:"gh-projects-grid",children:[C.length===0&&x.jsxs("div",{className:"gh-empty-state",children:["No projects in “",l,"” yet — add a matching repo to"," ",x.jsx("code",{children:"src/data/projects/projectData.js"}),"."]}),C.map((g,E)=>x.jsxs("div",{className:"gh-card reveal",style:{animationDelay:`${E*.1}s`},onClick:()=>y(g),children:[x.jsx("div",{className:"gh-card-img-wrap",children:x.jsx("img",{src:bt(g),alt:Ve(g),className:"gh-card-img",onError:v=>{v.target.src!==tn&&(v.target.onerror=null,v.target.src=tn)},loading:"lazy",decoding:"async"})}),x.jsxs("div",{className:"gh-card-content",children:[x.jsx("h3",{className:"gh-card-title",children:Ve(g)}),x.jsx("p",{className:"gh-card-desc",children:g.description||"No description provided."}),g.topics.length>0&&x.jsxs("div",{className:"gh-card-topics",children:[g.topics.slice(0,3).map(v=>x.jsx("span",{className:"gh-topic-tag",children:Cp(v)},v)),g.topics.length>3&&x.jsxs("span",{className:"gh-topic-tag",children:["+",g.topics.length-3]})]}),x.jsxs("div",{className:"gh-card-links",children:[g.homepage&&x.jsxs("a",{href:g.homepage,target:"_blank",rel:"noopener noreferrer",className:"gh-card-link",onClick:v=>v.stopPropagation(),children:["Live Demo",x.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[x.jsx("path",{d:"M5 12h14"}),x.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),x.jsxs("a",{href:g.github,target:"_blank",rel:"noopener noreferrer",className:"gh-card-link",onClick:v=>v.stopPropagation(),children:["GitHub",x.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[x.jsx("path",{d:"M5 12h14"}),x.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})]},g.name))]})]})]}),a&&x.jsx("div",{className:"gh-drawer-overlay",onClick:S,children:x.jsxs("aside",{className:"gh-drawer",role:"dialog","aria-modal":"true","aria-label":`${Ve(a)} details`,onClick:g=>g.stopPropagation(),children:[x.jsx("button",{className:"gh-drawer-close",onClick:S,"aria-label":"Close project details",children:x.jsx("span",{className:"material-symbols-outlined",children:"close"})}),x.jsx("div",{className:"gh-drawer-image",children:x.jsx("img",{src:bt(a),alt:Ve(a),onError:g=>{g.target.src!==tn&&(g.target.onerror=null,g.target.src=tn)},decoding:"async"})}),x.jsxs("div",{className:"gh-drawer-content",children:[x.jsx("h2",{className:"gh-drawer-title",children:Ve(a)}),x.jsx("p",{className:"gh-drawer-desc",children:a.description}),x.jsxs("div",{className:"gh-drawer-actions",children:[x.jsxs("button",{className:"gh-drawer-btn gh-drawer-btn-learnings",onClick:()=>{S(),e(a)},children:[x.jsx("span",{className:"material-symbols-outlined",children:"school"}),"What I Learned"]}),a.homepage&&x.jsxs("a",{href:a.homepage,target:"_blank",rel:"noopener noreferrer",className:"gh-drawer-btn gh-drawer-btn-primary",children:[x.jsx("span",{className:"material-symbols-outlined",children:"launch"}),"Live Demo"]}),x.jsxs("a",{href:a.github,target:"_blank",rel:"noopener noreferrer",className:"gh-drawer-btn gh-drawer-btn-secondary",children:[x.jsx("span",{className:"material-symbols-outlined",children:"code"}),"GitHub"]})]}),x.jsx("h3",{className:"gh-drawer-readme-title",children:"README.md"}),x.jsxs("div",{className:"gh-drawer-readme",children:[u.status==="loading"&&x.jsxs("div",{className:"gh-readme-status",children:[x.jsx("span",{className:"gh-readme-spinner","aria-hidden":"true"}),"Fetching README from GitHub…"]}),u.status==="error"&&x.jsx("div",{className:"gh-drawer-error",children:"No README.md found for this repository."}),u.status==="ready"&&x.jsx(Qs,{remarkPlugins:[sp],children:u.content})]})]})]})})]})}export{Tp as default};
