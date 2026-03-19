<div align="center">

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

```
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
```

---

## ✨ Key Features

### 🎨 Frontend Highlights

| Feature                          | Description                                                                                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⌨️ Typewriter Intro**          | Custom-built GSAP-animated text component that cycles through roles — _Full Stack Developer, React Developer, Spring Boot Developer_ — with cursor blink and configurable typing speed |
| **📊 Live LeetCode Stats**       | Real-time problem-solving statistics fetched from the backend API, displayed with animated circular progress bars (Easy / Medium / Hard breakdown)                                     |
| **🌀 Scroll Reveal Animations**  | Custom `useScrollReveal` hook powered by `IntersectionObserver` triggers smooth entrance animations as sections come into view                                                         |
| **⭐ Interactive Feedback Form** | Full contact form with star rating, real-time button states (_Submit → Processing → Submitted_), and automated email notifications via the Spring Boot backend                         |
| **🧭 Smooth Navigation**         | Sticky header with hash-based smooth scrolling, plus a floating scroll-to-top button that appears after 600px scroll depth                                                             |
| **📱 Fully Responsive**          | Adaptive layouts with dedicated mobile breakpoints, separate journey timeline images for mobile, and touch-optimized interactions                                                      |
| **🎆 Particle Effects**          | Background particle animations using `react-tsparticles` for a dynamic, premium feel                                                                                                   |
| **🔒 Zoom Lock**                 | Prevents accidental zoom via `Ctrl+Scroll`, pinch gestures, and keyboard shortcuts for a controlled viewing experience                                                                 |

### ⚙️ Backend Highlights

| Feature                   | Description                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **📧 Dual Email System**  | On feedback submission, sends a styled HTML notification to the portfolio owner AND a personalized thank-you email to the visitor |
| **📈 LeetCode Proxy API** | `GET /leetcode` — proxies the LeetCode Stats API to avoid CORS issues and provides real-time problem-solving data                 |
| **🐳 Dockerized**         | Production-ready `Dockerfile` for seamless deployment on Render                                                                   |
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

```bash
git clone https://github.com/muthukumaranarc/Portfolio.git
cd Portfolio
```

### 2️⃣ Frontend Setup

```bash
cd Frount
npm install
npm run dev
```

> The development server starts at `http://localhost:5173` with hot module replacement enabled.

### 3️⃣ Backend Setup

```bash
cd sendMail

# Configure email credentials in application.properties
# spring.mail.username=your-email@gmail.com
# spring.mail.password=your-app-password

./mvnw spring-boot:run
```

> The backend API starts at `http://localhost:8080`.

### 4️⃣ Docker (Optional)

```bash
cd sendMail
./mvnw clean package -DskipTests
docker build -t portfolio-backend .
docker run -p 8080:8080 portfolio-backend
```

---

## 🌐 Deployment

| Layer        | Platform         | Config                                             |
| ------------ | ---------------- | -------------------------------------------------- |
| **Frontend** | Firebase Hosting | Auto-deployed via GitHub Actions on push to `main` |
| **Backend**  | Render (Docker)  | Containerized with `openjdk:17-jdk-alpine`         |
| **CI/CD**    | GitHub Actions   | Preview deploys on PRs, live deploy on merge       |

---

## 📡 API Endpoints

| Method | Endpoint    | Description                                              |
| ------ | ----------- | -------------------------------------------------------- |
| `POST` | `/send`     | Submit feedback form — triggers dual email notifications |
| `GET`  | `/leetcode` | Fetch real-time LeetCode statistics                      |

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
