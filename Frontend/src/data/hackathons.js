// ============================================================================
//  HACKATHONS DATA — edit this file to change the Hackathons section.
// ============================================================================
//
//  ▸ Add a hackathon:   paste a new object into the `hackathons` array.
//  ▸ Edit a hackathon:  change its fields directly.
//  ▸ Hide a hackathon:  delete its object (or wrap it in /* ... */).
//
//  Links are optional — a link button only appears when it holds a real URL.
//  The left poster is generated from `posterLines`; to use a real image
//  instead, drop a file at src/data/hackathons/images/<name>.webp and set `image`
//  to its file name (without extension).
// ============================================================================

// ---- Section header text (shown above the hackathon cards) ----------------
export const section = {
  title: 'Hackathons & Innovation',
  subtitle: 'A timeline of hackathons and innovation challenges where I explored real-world problems, developed practical solutions, and strengthened my skills through hands-on teamwork and technical problem solving.',
};

// ---- Hackathons list -------------------------------------------------------
export const hackathons = [
  {
    name: 'Smart India Hackathon',
    badge: 'In Progress',
    date: '2026',
    teamSize: 'TBD',
    description:
      'Currently participating in Smart India Hackathon and working through the initial idea formation stage. The focus is on understanding the given problem statement, identifying the core challenges, researching possible approaches, and shaping a practical solution before moving into development.',
    role: 'Problem analysis, Solution ideation, Technical planning',
    tech: ['Problem Solving', 'System Design', 'AI Concepts', 'Solution Architecture'],
    links: {
      live: '',        // "View Project" button — paste the project/live URL
      github: '',      // "GitHub" button — paste the repository URL
      certificate: '', // "Certificate" button — paste the certificate URL
    },
    posterLines: ['SMART INDIA', 'HACKATHON'],
    image: 'sih', // e.g. 'smart-india-hackathon' (file in src/data/hackathons/images/)
  },
  {
    name: 'Chameleon',
    badge: 'Project Built',
    date: '2026',
    teamSize: 'TBD',
    description:
      'Developed Chameleon, an AI-powered machine troubleshooting solution designed to analyze multiple types of information and assist in identifying machine problems. The system explores multimodal inputs such as images, videos, text, and voice.',
    role: 'Full-stack & Backend development, AI workflow design, REST API development',
    tech: ['React', 'Spring Boot', 'AI / LLM', 'Multimodal AI', 'REST APIs', 'Docker'],
    links: {
      live: '',
      github: '',
      certificate: '',
    },
    posterLines: ['GDG × KSRCE', 'HACKATHON'],
    image: 'gdg',
  },
  {
    name: 'SNS College 8-Hour Hackathon',
    badge: 'Prototype',
    date: '2026',
    teamSize: 'TBD',
    description:
      'Built an accessibility-focused navigation application aimed at helping people with disabilities navigate their surroundings more independently. The project focused on designing a navigation experience that could better support users with different sensory needs.',
    role: 'Application development, Feature implementation, Accessibility-focused design',
    tech: ['React', 'JavaScript', 'Web APIs', 'Accessibility Technologies', 'Navigation APIs'],
    links: {
      live: '',
      github: '',
      certificate: '',
    },
    posterLines: ['SNS COLLEGE', 'HACKATHON'],
    image: '',
  },
  {
    name: 'MSME 6.0',
    badge: 'Solution Concept',
    date: '2026',
    teamSize: 'TBD',
    description:
      'Developed a solution concept focused on addressing unemployment in the IT industry. The proposed solution aimed to explore better ways of connecting candidates, skills, learning opportunities, and employment requirements.',
    role: 'Problem research, Idea development, Solution design, Product thinking',
    tech: ['Problem Analysis', 'Solution Design', 'Product Thinking', 'Web Technologies', 'Technical Research'],
    links: {
      live: '',
      github: '',
      certificate: '',
    },
    posterLines: ['MSME', '6.0'],
    image: '',
  }
];
