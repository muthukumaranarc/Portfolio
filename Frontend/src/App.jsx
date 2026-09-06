import { lazy, Suspense, useEffect, useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import ProjectLearnings from './components/ProjectLearnings';
import KuttyCompanion from './components/KuttyCompanion';

// Below-the-fold sections are code-split and loaded on demand to keep the
// initial bundle small (GithubProjects pulls in react-markdown + remark-gfm).
const GithubProjects = lazy(() => import('./components/GithubProjects'));
const Activities = lazy(() => import('./components/Activities'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const SiteFooter = lazy(() => import('./components/SiteFooter'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [learningProject, setLearningProject] = useState(null);

  // Track the section currently in view for navigation state. Sections are
  // code-split and mount lazily, so also observe elements added to the DOM
  // after this effect first runs (MutationObserver).
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'activities', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const observeSections = () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    observeSections();
    const domObserver = new MutationObserver(observeSections);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      domObserver.disconnect();
    };
  }, []);

  // Open / close the dedicated "What I Learned" page for a project.
  const openLearnings = (project) => {
    setLearningProject(project);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeLearnings = () => {
    setLearningProject(null);
    // Wait for the projects section to remount before scrolling to it.
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ block: 'start' });
    }, 50);
  };

  if (learningProject) {
    return (
      <>
        <ProjectLearnings project={learningProject} onBack={closeLearnings} />
        <KuttyCompanion learningProject={learningProject} />
      </>
    );
  }

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Skills />
      <About />
      <Suspense fallback={null}>
        <GithubProjects onOpenLearnings={openLearnings} />
      </Suspense>
      <Suspense fallback={null}>
        <Activities />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
      <KuttyCompanion learningProject={learningProject} />
    </>
  );
}

export default App;
