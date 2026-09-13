import { useEffect, useRef, useState } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';
import './KuttyCompanion.css';

// Import all Kutty emotion assets
import kuttyCelebration from '../assets/Kutty/celebration.webp';
import kuttyCode from '../assets/Kutty/code.webp';
import kuttyCool from '../assets/Kutty/cool.webp';
import kuttyExcited from '../assets/Kutty/excited.webp';
import kuttyHappy from '../assets/Kutty/happy.webp';
import kuttyHi from '../assets/Kutty/hi.webp';
import kuttyInspired from '../assets/Kutty/inspired.webp';
import kuttyLove from '../assets/Kutty/love.webp';
import kuttyNormal from '../assets/Kutty/normal.webp';
import kuttySad from '../assets/Kutty/sad.webp';
import kuttySleepy from '../assets/Kutty/sleepy.webp';
import kuttyStudy from '../assets/Kutty/study.webp';
import kuttySurprised from '../assets/Kutty/surprised.webp';
import kuttyWink from '../assets/Kutty/wink.webp';

const EMOTIONS = {
  celebration: kuttyCelebration,
  code: kuttyCode,
  cool: kuttyCool,
  excited: kuttyExcited,
  happy: kuttyHappy,
  hi: kuttyHi,
  inspired: kuttyInspired,
  love: kuttyLove,
  normal: kuttyNormal,
  sad: kuttySad,
  sleepy: kuttySleepy,
  study: kuttyStudy,
  surprised: kuttySurprised,
  wink: kuttyWink,
};

// Preload and decode all Kutty owl emotion images upfront so they are fetched,
// cached by the browser, and ready for instantaneous display on system load.
if (typeof window !== 'undefined') {
  Object.values(EMOTIONS).forEach((src) => {
    // 1. High-priority preload link in document head
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/webp';
    link.href = src;
    document.head.appendChild(link);

    // 2. Background image decode into memory
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}

const SECTION_CONFIG = {
  hero: {
    emotion: 'hi',
    dialogues: [
      "Hi there! I'm Kutty, your tour guide. Feel free to drag and move me anywhere on your screen if you need! Let's explore Muthukumaran's portfolio together! 🦉✨",
      "You can move me around anytime so I never get in your way. Click 'Next' to take the tour! 🚀",
      "Muthu is a passionate Full-Stack developer & problem solver. Ready to see his work? 💻"
    ]
  },
  skills: {
    emotion: 'cool',
    dialogues: [
      "Ooh, check out Muthu's tech stack! React, Spring Boot, Java, MongoDB... solid toolkit! 💻",
      "From sleek frontend UI design to resilient backend APIs, he loves full-stack development!",
      "Java & Spring Boot make a powerful combination for building scalable systems!"
    ]
  },
  about: {
    emotion: 'inspired',
    dialogues: [
      "Here's Muthu's story! He believes in 'Build, Learn, Grow' through hands-on practice. 🚀",
      "A Computer Science student who turns ideas into real, working applications.",
      "Passionate about hackathons, clean code, and continuous self-improvement!"
    ]
  },
  projects: {
    emotion: 'code',
    dialogues: [
      "Real-world projects alert! Click 'What I Learned' on any project for behind-the-scenes insights! 🛠️",
      "Every project here solves a real problem. Check out the GitHub links and live demos!",
      "Coding alongside Muthu is so much fun — check out these full-stack builds!"
    ]
  },
  internships: {
    emotion: 'study',
    dialogues: [
      "IBM SkillsBuild internship! Working on Machine Learning and Applied AI models! 📚",
      "Collaborating through AICTE & BharatCares — training intelligent AI agents and real-world AI applications!",
      "Hands-on with Watson Studio, supervised learning, and AI model building!"
    ]
  },
  hackathons: {
    emotion: 'excited',
    dialogues: [
      "Hackathon zone! Smart India Hackathon, GDG, MSME... Building under pressure! 🏆",
      "Rapid prototyping, quick thinking, and innovative solutions — hackathons are where magic happens!",
      "Chameleon, SIH, SNS 8-Hour Hackathon... Muthu thrives in collaborative team sprints!"
    ]
  },
  certifications: {
    emotion: 'celebration',
    dialogues: [
      "Look at those credentials! Certified by IBM in AI Fundamentals, Generative AI, and Agentic AI! 🎉",
      "Always learning and leveling up skills with industry certifications!",
      "AI is evolving fast, and Muthu is staying right on the cutting edge!"
    ]
  },
  contact: {
    emotion: 'wink',
    dialogues: [
      "Got an opportunity, project, or question? Don't hesitate to reach out to Muthu! 😉",
      "He responds quickly! Drop an email, connect on LinkedIn, or send a message through the form. 📬",
      "Let's build something awesome together! Send him a note!"
    ]
  },
  footer: {
    emotion: 'love',
    dialogues: [
      "You explored the whole portfolio with me! Thank you so much for visiting! ❤️",
      "Hope you enjoyed the tour! Feel free to click 'Back to top' to revisit any section.",
      "Muthu and I really appreciate your time! Have an amazing day! ✨"
    ]
  },
  learnings: {
    emotion: 'study',
    dialogues: [
      "Deep dive mode! Here are the challenges Muthu faced and how he conquered them! 🔍",
      "Every bug is a lesson! Great engineers reflect and learn from every project.",
      "Click 'Back to Projects' whenever you're ready to continue our tour!"
    ]
  }
};

const TOUR_STEPS = {
  hero: { targetId: 'skills', nextLabel: 'Skills' },
  skills: { targetId: 'about', nextLabel: 'About' },
  about: { targetId: 'projects', nextLabel: 'Projects' },
  projects: { targetId: 'internships', nextLabel: 'Internship' },
  internships: { targetId: 'hackathons', nextLabel: 'Hackathons' },
  hackathons: { targetId: 'certifications', nextLabel: 'Certifications' },
  certifications: { targetId: 'contact', nextLabel: 'Contact' },
  contact: { targetId: 'hero', nextLabel: 'Top' },
  footer: { targetId: 'hero', nextLabel: 'Top' },
  learnings: { targetId: 'hero', nextLabel: 'Home' }
};

const POKE_REACTIONS = [
  { emotion: 'love', text: "Heehee! I'm so happy you're exploring with me! ❤️" },
  { emotion: 'wink', text: "Psst! Have you checked out the Hackathons section yet? It's exciting! 😉" },
  { emotion: 'celebration', text: "Whoop whoop! Portfolio tour high five! 🦉🎉" },
  { emotion: 'surprised', text: "Boing! Did you just poke me? Let's keep exploring! ✨" },
  { emotion: 'cool', text: "You can drag me anywhere on screen! We make a great team! 😎" },
  { emotion: 'happy', text: "Need a tip? Click 'Next' to fly to the next section with me! 💡" }
];

function KuttyCompanion({ learningProject = null }) {
  const [currentSection, setCurrentSection] = useState(learningProject ? 'learnings' : 'hero');
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [userDismissed, setUserDismissed] = useState(false); // If user closed with 'X'
  const [pokeState, setPokeState] = useState(null);
  const [isPokedAnim, setIsPokedAnim] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isWakingUp, setIsWakingUp] = useState(false);

  // Custom position { x, y } when the user drags Kutty
  const [customPos, setCustomPos] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const dragInfoRef = useRef(null);
  const autoHideTimeoutRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const wakeTimeoutRef = useRef(null);
  const pokeTimeoutRef = useRef(null);

  const userDismissedRef = useRef(false);
  userDismissedRef.current = userDismissed;
  const isIdleRef = useRef(false);

  // Sync if learningProject opens/closes
  useEffect(() => {
    if (learningProject) {
      setCurrentSection('learnings');
      setDialogueIndex(0);
      setIsWakingUp(false);
      if (!userDismissed) setIsBubbleOpen(true);
    }
  }, [learningProject, userDismissed]);

  // Fine-grained IntersectionObserver for sub-sections
  useEffect(() => {
    if (learningProject) return;

    const targetIds = [
      'hero',
      'skills',
      'about',
      'projects',
      'internships',
      'hackathons',
      'certifications',
      'contact',
      'footer'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTION_CONFIG[id]) {
            setCurrentSection(id);
            setDialogueIndex(0);
            setPokeState(null);
            // Immediately end wake-up message when scrolling into a section
            setIsWakingUp(false);
            if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
            // Only re-open bubble automatically if user hasn't explicitly clicked 'X'
            if (!userDismissedRef.current) {
              setIsBubbleOpen(true);
            }
          }
        }
      });
    }, observerOptions);

    const observeAll = () => {
      targetIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
      const footerEl = document.querySelector('.site-footer');
      if (footerEl) {
        if (!footerEl.id) footerEl.id = 'footer';
        observer.observe(footerEl);
      }
    };

    observeAll();
    const domObserver = new MutationObserver(observeAll);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      domObserver.disconnect();
    };
  }, [learningProject]);

  // Auto-hide the speech bubble after 10 seconds of inactivity if open
  useEffect(() => {
    if (isBubbleOpen && !userDismissed) {
      if (autoHideTimeoutRef.current) clearTimeout(autoHideTimeoutRef.current);
      autoHideTimeoutRef.current = setTimeout(() => {
        setIsBubbleOpen(false);
      }, 10000);
    }
    return () => {
      if (autoHideTimeoutRef.current) clearTimeout(autoHideTimeoutRef.current);
    };
  }, [currentSection, dialogueIndex, isBubbleOpen, userDismissed, pokeState]);

  // Idle tracking (after 18 seconds without interaction, Kutty sleeps; on return wakes up smoothly)
  useEffect(() => {
    const handleUserActivity = () => {
      if (isIdleRef.current) {
        isIdleRef.current = false;
        setIsIdle(false);
        setIsWakingUp(true);
        if (!userDismissedRef.current) setIsBubbleOpen(true);

        if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
        wakeTimeoutRef.current = setTimeout(() => {
          setIsWakingUp(false);
        }, 2200);
      }

      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        isIdleRef.current = true;
        setIsIdle(true);
        if (!userDismissedRef.current) setIsBubbleOpen(true);
      }, 18000);
    };

    window.addEventListener('mousemove', handleUserActivity, { passive: true });
    window.addEventListener('scroll', handleUserActivity, { passive: true });
    window.addEventListener('keydown', handleUserActivity, { passive: true });
    window.addEventListener('touchstart', handleUserActivity, { passive: true });

    idleTimeoutRef.current = setTimeout(() => {
      isIdleRef.current = true;
      setIsIdle(true);
      if (!userDismissedRef.current) setIsBubbleOpen(true);
    }, 18000);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
    };
  }, []);

  // Pointer drag to pick and place Kutty anywhere
  const handlePointerDown = (e) => {
    // Only drag on primary click / touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    dragInfoRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialLeft: rect.left,
      initialTop: rect.top,
      width: rect.width,
      height: rect.height,
      hasMoved: false
    };

    const handlePointerMove = (moveEvent) => {
      if (!dragInfoRef.current) return;
      const { startX, startY, initialLeft, initialTop, width, height } = dragInfoRef.current;
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      if (!dragInfoRef.current.hasMoved && Math.hypot(deltaX, deltaY) > 5) {
        dragInfoRef.current.hasMoved = true;
        setIsDragging(true);
      }

      if (dragInfoRef.current.hasMoved) {
        let newX = initialLeft + deltaX;
        let newY = initialTop + deltaY;

        // Keep Kutty securely within the window bounds
        const maxX = window.innerWidth - width - 8;
        const maxY = window.innerHeight - height - 8;
        newX = Math.max(8, Math.min(maxX, newX));
        newY = Math.max(8, Math.min(maxY, newY));

        setCustomPos({ x: newX, y: newY });
      }
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      const hadMoved = dragInfoRef.current?.hasMoved;
      dragInfoRef.current = null;
      setIsDragging(false);

      // If it wasn't a drag, it was a click on Kutty!
      if (!hadMoved) {
        handleKuttyClick();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  // Handle clicking Kutty (toggles chat, plays jump animation & speaks)
  const handleKuttyClick = () => {
    setIsPokedAnim(true);
    setTimeout(() => setIsPokedAnim(false), 500);

    // If chat was closed, re-open it and clear user-dismissed flag
    setIsBubbleOpen(true);
    setUserDismissed(false);
    setIsIdle(false);

    const randomReaction = POKE_REACTIONS[Math.floor(Math.random() * POKE_REACTIONS.length)];
    setPokeState(randomReaction);

    if (pokeTimeoutRef.current) clearTimeout(pokeTimeoutRef.current);
    pokeTimeoutRef.current = setTimeout(() => {
      setPokeState(null);
    }, 4500);
  };

  // Handle Close ('X') button: Hides chat completely, showing ONLY the character
  const handleCloseChat = (e) => {
    e.stopPropagation();
    setIsBubbleOpen(false);
    setUserDismissed(true); // Don't auto-open until user clicks Kutty again
  };

  // Handle "Next ➔" tour button: scrolls the page to the next section and speaks!
  const handleNextTourStep = (e) => {
    e.stopPropagation();
    const tourStep = TOUR_STEPS[currentSection] || TOUR_STEPS.hero;

    setIsWakingUp(false);
    if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);

    smoothScrollTo(tourStep.targetId);
    setCurrentSection(tourStep.targetId);
    setDialogueIndex(0);
    setIsBubbleOpen(true);
    setUserDismissed(false);
    setPokeState(null);
  };

  // Determine current emotion and dialogue text
  const sectionConfig = SECTION_CONFIG[currentSection] || SECTION_CONFIG.hero;
  let activeEmotion = sectionConfig.emotion;
  let activeDialogue = sectionConfig.dialogues[dialogueIndex % sectionConfig.dialogues.length];

  if (isWakingUp) {
    activeEmotion = 'surprised';
    activeDialogue = "Oh! You're back! Let's continue exploring! 🦉✨";
  } else if (isIdle) {
    activeEmotion = 'sleepy';
    activeDialogue = "*(yawn)*... Zzz... Still here? Click 'Next' or scroll to wake me up! 💤";
  } else if (pokeState) {
    activeEmotion = pokeState.emotion;
    activeDialogue = pokeState.text;
  }

  const tourStep = TOUR_STEPS[currentSection] || TOUR_STEPS.hero;

  // Determine speech bubble alignment relative to Kutty's current position
  let bubbleAnchorClass = 'kutty-bubble-anchor-right';
  let bubbleVPosClass = 'kutty-bubble-above';

  if (customPos) {
    if (customPos.x < window.innerWidth / 2) {
      bubbleAnchorClass = 'kutty-bubble-anchor-left';
    }
    if (customPos.y < 190) {
      bubbleVPosClass = 'kutty-bubble-below';
    }
  }

  // Inline positioning styles if Kutty has been dragged/placed
  const rootStyle = customPos
    ? {
        left: `${customPos.x}px`,
        top: `${customPos.y}px`,
        right: 'auto',
        bottom: 'auto'
      }
    : undefined;

  return (
    <aside
      ref={containerRef}
      style={rootStyle}
      className={`kutty-companion-root ${
        !customPos ? 'kutty-default-pos' : ''
      } ${isDragging ? 'kutty-dragging' : ''}`}
      aria-label="Kutty, your interactive portfolio companion"
    >
      {/* Speech Bubble with Frosted Glassmorphism Background Blur */}
      <div
        className={`kutty-speech-bubble ${bubbleAnchorClass} ${bubbleVPosClass} ${
          isBubbleOpen ? 'kutty-bubble-visible' : 'kutty-bubble-hidden'
        }`}
        role="dialog"
        aria-live="polite"
      >
        <div className="kutty-bubble-header">
          <span className="kutty-bubble-title">
            Kutty &bull; Tour Guide
          </span>
          <button
            type="button"
            className="kutty-bubble-close"
            onClick={handleCloseChat}
            aria-label="Close chat"
            title="Close chat (show only character)"
          >
            &times;
          </button>
        </div>

        <p className="kutty-bubble-text">{activeDialogue}</p>

        <div className="kutty-bubble-actions">
          <span className="kutty-drag-hint">👆 Drag to move</span>
          <button
            type="button"
            className="kutty-tour-btn"
            onClick={handleNextTourStep}
            title={`Scroll to ${tourStep.nextLabel}`}
          >
            <span>Next: {tourStep.nextLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Kutty Character (Draggable & Clickable) */}
      <div
        className={`kutty-character-wrapper ${isPokedAnim ? 'kutty-poked' : ''}`}
        onPointerDown={handlePointerDown}
        title="Drag me anywhere or click to chat!"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleKuttyClick();
          }
        }}
      >
        <div className="kutty-owl-stage">
          {Object.entries(EMOTIONS).map(([emotion, src]) => {
            const isActive = emotion === (EMOTIONS[activeEmotion] ? activeEmotion : 'normal');
            return (
              <img
                key={emotion}
                src={src}
                alt={`Kutty the owl (${emotion})`}
                className={`kutty-owl-img ${isActive ? 'kutty-owl-active' : 'kutty-owl-hidden'}`}
                draggable="false"
                loading="eager"
                decoding="async"
                aria-hidden={!isActive}
              />
            );
          })}
        </div>
        <div className="kutty-shadow" aria-hidden="true"></div>
      </div>
    </aside>
  );
}

export default KuttyCompanion;
