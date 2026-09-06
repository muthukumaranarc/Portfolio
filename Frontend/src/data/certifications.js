// ============================================================================
//  CERTIFICATIONS DATA — edit this file to change the Certifications section.
// ============================================================================
//
//  ▸ Add a certification:  paste a new object into the `certifications` array.
//  ▸ Edit / hide:          change or delete its object.
//  ▸ Links:                `credential` is optional — the "View Credential"
//                          button only appears when it holds a real URL.
//  ▸ Logo:                 by default a colored tile with `brand.text` is shown.
//                          To use a real logo instead, drop the file into
//                          src/data/certifications/images/<name>.webp and set `logo`
//                          to its file name (without extension).
// ============================================================================

// ---- Section header text (shown above the cards) --------------------------
export const section = {
  title: 'Certifications',
  subtitle: 'Courses and industry-recognized credentials that strengthen my skills in cloud computing, databases, artificial intelligence, generative AI, and agentic AI.',
};

// ---- Certifications list ---------------------------------------------------
export const certifications = [
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Aug 29, 2026',
    credential: '', // e.g. 'https://www.credly.com/badges/...'
    brand: { text: 'IBM', color: '#0f62fe' },
    logo: 'ibm',
  },
  {
    title: 'Generative AI in Action',
    issuer: 'IBM SkillsBuild',
    date: 'Aug 30, 2026',
    credential: '', 
    brand: { text: 'IBM', color: '#0f62fe' },
    logo: 'ibm',
  },
  {
    title: 'Make Agentic AI Work for You',
    issuer: 'IBM SkillsBuild',
    date: 'Aug 30, 2026',
    credential: '', 
    brand: { text: 'IBM', color: '#0f62fe' },
    logo: 'ibm',
  }
];
