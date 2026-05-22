import './App.css';
import ClickSpark from './Components/ClickSpark';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Expertise from './Components/Expertise';
import Stats from './Components/Stats';
import TechStack from './Components/TechStack';
import GithubProjects from './Components/GithubProjects';
import DevOpsJourney from './Components/DevOpsJourney';
import Accolades from './Components/Accolades';
import Contact from './Components/Contact';
import SiteFooter from './Components/SiteFooter';
import MobileNav from './Components/MobileNav';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
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

    // Scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <Navbar />
      <Hero />
      <Stats />
      {/* <TechStack /> */}
      <About />
      <Expertise />
      <GithubProjects />
      <DevOpsJourney />
      <Accolades />
      <Contact />
      <SiteFooter />
      <MobileNav />
      <button
        className={`scroll-top-btn ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </ClickSpark>
  );
}

export default App;
