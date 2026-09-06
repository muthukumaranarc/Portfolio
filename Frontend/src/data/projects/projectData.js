// ============================================================================
//  PROJECT DATA — edit this file to control which projects appear on the site.
// ============================================================================
//
//  HOW IT WORKS
//  • List only the GitHub repository NAMES you want to show in `projectNames`.
//  • When the site loads, the app fetches the LATEST data for each repo from
//    GitHub (description, links, topics, language) and displays it live.
//  • The README shown in the details drawer is also fetched from GitHub when
//    you open a project.
//  • Each repo is matched against the category list below using the data
//    GitHub returns (language + topics + name + description). Repos that
//    don't match any category automatically fall into "Others".
//
//  ▸ Show a different project:   change the names in `projectNames`.
//  ▸ Add a filter button:        add a label to `projectCategories` AND add
//                                a matching hint to the CATEGORY RULES below.
// ============================================================================

// ---- GitHub account the projects come from --------------------------------
export const GITHUB_USERNAME = 'muthukumaranarc';

// ---- Section header text (shown above the project cards) ------------------
export const section = {
  title: 'Featured Work',
  subtitle:
    'A curated collection of my public GitHub projects, showcasing real-world solutions, modern technologies, and continuous learning.',
  archiveLabel: 'View GitHub Archive',
  archiveUrl: 'https://github.com/muthukumaranarc',
};

// ---- Category filter buttons (shown above the project cards) --------------
// "All" is always shown first. A project can belong to several categories.
export const projectCategories = [
  'Web Projects',
  'React app',
  'Spring boot',
  'Mobile app',
  'Others',
];

// ---- Repos to show — ONLY the GitHub repository names, nothing else --------
export const projectNames = [
  'Freelance-Website',
  'Portfolio',
  'EduPlus',
  'Tunez',
  'Chameleon',
];

// ---- Fallback metadata overrides for repos with sparse GitHub API fields ----
export const PROJECT_METADATA_OVERRIDES = {
  'Freelance-Website': {
    title: 'Freelance Website',
    description:
      'Full-stack client platform featuring a modern React frontend and a Spring Boot REST API backend designed for commercial client demonstrations and project delivery.',
    topics: ['react', 'spring-boot', 'java', 'rest-api', 'fullstack', 'javascript'],
    categories: ['Web Projects', 'React app', 'Spring boot'],
    github: 'https://github.com/muthukumaranarc/Freelance-Website',
  },
};

// ---- Generic image used when a project has no local image file ------------
export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';

// ----------------------------------------------------------------------------
//  Image lookup — nothing below needs to be edited.
//  Drop a file in src/data/projects/images/<name>.webp and it is used automatically.
// ----------------------------------------------------------------------------
const imageModules = import.meta.glob('./images/*', {
  eager: true,
  import: 'default',
});

const imageByKey = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    src,
  ])
);

export const getProjectImage = (repo) =>
  imageByKey[repo.image || repo.name] || FALLBACK_IMAGE;

// ----------------------------------------------------------------------------
//  CATEGORY RULES — each rule lists word tokens. A repo is placed in a
//  category when ANY of its tokens shows up in the repo's name, description,
//  topics, or language (tokens are whole words — "java" never matches
//  "javascript"). Give each repo a homepage and it is treated as a web repo.
// ----------------------------------------------------------------------------
const CATEGORY_RULES = {
  'Web Projects': [
    'web', 'website', 'landing', 'frontend', 'portfolio', 'dashboard', 'platform',
    'saas', 'streaming', 'react', 'reactjs', 'vue', 'vite', 'javascript',
    'typescript', 'html', 'css', 'nextjs',
  ],
  'React app': [
    'react', 'reactjs', 'reactapi', 'javascript', 'typescript', 'vite', 'nextjs', 'frontend',
  ],
  'Spring boot': ['spring', 'springboot', 'java', 'jpa', 'backend'],
  'Mobile app': [
    'android', 'flutter', 'kotlin', 'swift', 'ios', 'dart', 'mobile', 'native', 'appium',
  ],
};

/**
 * Match a repo (as returned by the GitHub API) against the category rules.
 * Returns an array of category labels; repos matching nothing go to "Others".
 */
export function classifyRepo(repo) {
  const tokens = new Set(
    [
      repo.name,
      repo.description,
      repo.language,
      ...(repo.topics || []),
      repo.homepage ? 'web' : '',
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean)
  );

  const matched = projectCategories.filter(
    (category) =>
      category !== 'Others' &&
      (CATEGORY_RULES[category] || []).some((keyword) => tokens.has(keyword))
  );

  return matched.length > 0 ? matched : ['Others'];
}
