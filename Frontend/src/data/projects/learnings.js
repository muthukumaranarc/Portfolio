// ============================================================================
//  PROJECT LEARNINGS — content shown on the "What I Learned" page of each project.
// ============================================================================
//
//  HOW IT WORKS
//  • Open a project's details drawer, click "What I Learned" → this data is
//    rendered on a dedicated page for that project.
//  • Add a key for each repository name (must match `projectNames` in
//    src/data/projects/projectData.js).
//  • Each entry has three lists:
//      struggles  — the hard parts / obstacles faced while building it
//      learnings  — the technical skills & lessons picked up
//      other      — anything else learned beyond the code itself
//  • Projects without an entry show a "nothing documented yet" page, so you
//    can fill entries in gradually.

export const PROJECT_LEARNINGS = {
  'Freelance-Website': {
    struggles: [
      'Bridging frontend React state management with Spring Boot REST endpoints while handling network latencies.',
      'Designing a flexible, multi-device layout that looks stunning on mobile, tablet, and 4K displays.',
      'Balancing rapid prototyping for client demos with robust code architecture and maintainability.',
    ],
    learnings: [
      'Full-stack architecture: building cohesive React frontends on top of decoupled Spring Boot microservices.',
      'Crafting reusable UI component libraries tailored for fast client delivery and brand customization.',
      'Structuring RESTful API contracts, DTO validation, and error response handling in Spring Boot.',
    ],
    other: [
      'Client-centric engineering: understanding business requirements and translating them into technical solutions.',
      'Estimating sprint timelines and managing end-to-end deliverables from wireframe to deployment.',
    ],
  },
};