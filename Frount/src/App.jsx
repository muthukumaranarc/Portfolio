import './App.css';
import Head from './Components/Head'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Journey from './Components/Journey'
import LeetCode from './Components/LeetCode'
import Visionary from './Components/Visionary'
import Projects from './Components/Projects'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'
import { useEffect } from "react";
import arrow from './assets/Arrow.png'
import { useState} from "react";

const loader = document.getElementById('loader');
if (loader) {
  loader.style.display = 'none';
}



function App() {

  useEffect(() => {
    // Disable zoom with Ctrl + scroll
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Disable zoom with pinch on mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Disable zoom with keyboard shortcuts (Ctrl + + / -)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className='All'>
      {showButton && (
        <a href="#home" className="upHome">
          <img src={arrow} alt="arrow" />
        </a>
      )}
      <Head />
      <Profile />
      <Skills />
      <Journey />
      <LeetCode />
      <Visionary />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;