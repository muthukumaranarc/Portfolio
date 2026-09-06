// ============================================================================
//  INTERNSHIPS DATA — edit this file to change the Internships section.
// ============================================================================
//
//  ▸ Add an internship:   paste a new object into the `internships` array.
//  ▸ Edit an internship:  change its fields directly.
//  ▸ Hide an internship:  delete its object (or wrap it in /* ... */).
//  ▸ The icon letter is taken from the first letter of `company`.
//    `certificate` is optional — the "View Certificate" button only appears
//    when it holds a real link (e.g. a Google Drive / PDF URL).
// ============================================================================

// ---- Section header text (shown above the internship cards) ----------------
export const section = {
  title: 'Internships',
  subtitle: 'Professional experiences that helped me grow.',
};

// ---- Internships list ------------------------------------------------------
export const internships = [
  {
    company: 'IBM SkillsBuild',
    logo: 'ibm',
    role: 'Machine Learning and Applied AI Intern',
    period: '24 Aug 2026 - 30 Sep 2026',
    location: 'Virtual',
    description: [
      'Selected for the 6-week Virtual IBM SkillsBuild Machine Learning and Applied AI Internship, offered in collaboration with AICTE and BharatCares.',
      'The internship focuses on building foundational knowledge in Machine Learning and Applied AI through hands-on learning, guided mentorship, and real-world project development.',
    ],
    contributions: [
      'Gained practical exposure to industry-relevant AI tools including IBM watsonx and Watson Studio.',
      'Developed AI models covering Supervised, Unsupervised, Deep, and Reinforcement Learning.',
      'Trained intelligent AI agents and explored Q-Learning concepts.',
      'Worked on real-world project development aligned with the UN Sustainable Development Goals.',
    ],
    tech: ['IBM SkillsBuild', 'IBM watsonx', 'Machine Learning', 'Applied AI', 'Python'],
    certificate: '', 
  },
];
