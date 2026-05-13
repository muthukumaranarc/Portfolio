import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useMemo, useRef } from 'react';
import './ScrollExperience3D.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function AnimatedProductCore() {
  const groupRef = useRef(null);
  const scroll = useScroll();
  const { viewport } = useThree();
  const quickSetters = useRef(null);

  const isMobile = viewport.width < 6;

  useFrame(() => {
    if (!groupRef.current) return;

    if (!quickSetters.current) {
      quickSetters.current = {
        rotationX: gsap.quickTo(groupRef.current.rotation, 'x', { duration: 0.45, ease: 'power3.out' }),
        rotationY: gsap.quickTo(groupRef.current.rotation, 'y', { duration: 0.45, ease: 'power3.out' }),
        rotationZ: gsap.quickTo(groupRef.current.rotation, 'z', { duration: 0.45, ease: 'power3.out' }),
        positionX: gsap.quickTo(groupRef.current.position, 'x', { duration: 0.55, ease: 'power3.out' }),
        positionY: gsap.quickTo(groupRef.current.position, 'y', { duration: 0.55, ease: 'power3.out' }),
        positionZ: gsap.quickTo(groupRef.current.position, 'z', { duration: 0.55, ease: 'power3.out' }),
        scaleX: gsap.quickTo(groupRef.current.scale, 'x', { duration: 0.45, ease: 'power3.out' }),
        scaleY: gsap.quickTo(groupRef.current.scale, 'y', { duration: 0.45, ease: 'power3.out' }),
        scaleZ: gsap.quickTo(groupRef.current.scale, 'z', { duration: 0.45, ease: 'power3.out' }),
      };
    }

    const progress = scroll.offset;
    const pathSpread = isMobile ? 0.28 : 1.15;
    const scaleBase = isMobile ? 0.72 : 1;
    const scalePulse = Math.sin(progress * Math.PI) * (isMobile ? 0.18 : 0.32);
    const objectScale = scaleBase + scalePulse;

    quickSetters.current.rotationX(lerp(0.25, Math.PI * 1.35, progress));
    quickSetters.current.rotationY(progress * Math.PI * 4.25);
    quickSetters.current.rotationZ(Math.sin(progress * Math.PI * 2) * 0.48);
    quickSetters.current.positionX(Math.sin(progress * Math.PI * 2) * pathSpread);
    quickSetters.current.positionY(lerp(isMobile ? -0.12 : -0.35, isMobile ? 0.3 : 0.65, progress));
    quickSetters.current.positionZ(lerp(0.15, -1.1, progress));
    quickSetters.current.scaleX(objectScale);
    quickSetters.current.scaleY(objectScale);
    quickSetters.current.scaleZ(objectScale);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.32} floatIntensity={0.45}>
      <group ref={groupRef} position={[0, -0.28, 0]}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[0.76, 0.2, 180, 24, 2, 5]} />
          <meshStandardMaterial
            color="#8ffcff"
            metalness={0.72}
            roughness={0.16}
            emissive="#164f88"
            emissiveIntensity={0.42}
          />
        </mesh>

        <mesh scale={1.42}>
          <icosahedronGeometry args={[0.86, 2]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.22}
            emissive="#70ddff"
            emissiveIntensity={0.6}
          />
        </mesh>

        <mesh scale={0.22} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#9ffaff" emissiveIntensity={1.8} />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    return Array.from({ length: 70 }, (_, index) => {
      const angle = index * 0.74;
      const radius = 2.4 + (index % 9) * 0.32;
      return [
        Math.cos(angle) * radius,
        ((index % 17) - 8) * 0.18,
        Math.sin(angle) * radius - 2.4,
      ];
    });
  }, []);

  return points.map((position, index) => (
    <mesh key={`${position.join('-')}-${index}`} position={position} scale={index % 4 === 0 ? 0.035 : 0.022}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={index % 3 === 0 ? '#88f7ff' : '#6c7cff'} transparent opacity={0.55} />
    </mesh>
  ));
}

function CinematicScene() {
  return (
    <>
      <color attach="background" args={['#030711']} />
      <fog attach="fog" args={['#040815', 4.5, 11]} />
      <ambientLight intensity={0.24} />
      <pointLight position={[3.5, 3.2, 2.4]} intensity={46} color="#8deeff" distance={8} decay={2} />
      <pointLight position={[-3.8, -1.2, -1.4]} intensity={18} color="#8a5cff" distance={7} decay={2} />
      <spotLight position={[0, 4.2, 3]} angle={0.42} penumbra={0.7} intensity={68} color="#ffffff" castShadow />
      <Environment preset="city" />
      <ParticleField />
      <AnimatedProductCore />
    </>
  );
}

function ScrollOverlay() {
  const scroll = useScroll();
  const sectionRefs = useRef([]);

  const sections = useMemo(() => [
    {
      eyebrow: 'Introduction',
      title: 'A fixed 3D hero that reacts to every scroll gesture.',
      body: 'The abstract product core remains pinned in the background while GSAP maps scroll progress to rotation, position, and scale.',
      align: 'left',
    },
    {
      eyebrow: 'Features',
      title: 'Cinematic lighting, smooth motion, and responsive composition.',
      body: 'ScrollControls powers the experience, drei Environment adds polished reflections, and the object path compresses on mobile screens.',
      align: 'right',
    },
    {
      eyebrow: 'Contact',
      title: 'Ready to turn a brand story into an interactive landing page?',
      body: 'Use this component as a drop-in high-performance hero for portfolios, SaaS launches, or premium commerce showcases.',
      align: 'left',
    },
  ], []);

  useFrame(() => {
    const progress = scroll.offset;

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const target = index / (sections.length - 1);
      const distance = Math.abs(progress - target);
      const opacity = clamp(1 - distance * 4.2, 0, 1);
      const translateY = (1 - opacity) * 34;

      section.style.opacity = opacity;
      section.style.transform = `translate3d(0, ${translateY}px, 0)`;
      section.style.pointerEvents = opacity > 0.45 ? 'auto' : 'none';
    });
  });

  return (
    <Scroll html>
      <div className="scrollExperienceOverlay">
        {sections.map((section, index) => (
          <section
            className={`scrollExperienceSection scrollExperienceSection--${section.align}`}
            key={section.eyebrow}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
          >
            <div className="scrollExperienceCard">
              <span>{section.eyebrow}</span>
              <h1>{section.title}</h1>
              <p>{section.body}</p>
              {section.eyebrow === 'Contact' && <a href="#contact">Start a project</a>}
            </div>
          </section>
        ))}
      </div>
    </Scroll>
  );
}

export default function ScrollExperience3D() {
  return (
    <section className="scrollExperience" id="home" aria-label="Interactive 3D landing page">
      <Canvas
        className="scrollExperienceCanvas"
        camera={{ position: [0, 0.15, 5.2], fov: 42, near: 0.1, far: 100 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        shadows
      >
        <ScrollControls pages={3} damping={0.18} distance={1}>
          <CinematicScene />
          <ScrollOverlay />
        </ScrollControls>
      </Canvas>
    </section>
  );
}
