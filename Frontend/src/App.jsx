import './App.css';
import ClickSpark from './Components/ClickSpark';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Expertise from './Components/Expertise';
import Stats from './Components/Stats';
import GithubProjects from './Components/GithubProjects';
import DevOpsJourney from './Components/DevOpsJourney';
import Accolades from './Components/Accolades';
import Contact from './Components/Contact';
import SiteFooter from './Components/SiteFooter';
import MobileNav from './Components/MobileNav';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, { offset: -100 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    const sectionIds = ['hero', 'stack', 'about', 'projects', 'journey', 'contact'];
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

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Re-observe new .reveal elements after render
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    }, 100);
    return () => clearTimeout(timeout);
  });

  return (
    <ClickSpark
      sparkColor="var(--primary)"
      sparkSize={12}
      sparkRadius={18}
      sparkCount={8}
      duration={420}
      easing="ease-out"
      extraScale={1.15}
    >
      <Navbar activeSection={activeSection} />
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <GithubProjects />
      <DevOpsJourney />
      <Accolades />
      <Contact />
      <SiteFooter />
      <MobileNav activeSection={activeSection} />
    </ClickSpark>
  );
}

export default App;
