/**
 * Smoothly scrolls to any section or sub-section on the page,
 * ensuring the heading/content lands at the exact right position
 * with proper clearance below the fixed navbar.
 */
export function smoothScrollTo(targetId) {
  if (!targetId || targetId === 'hero' || targetId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = document.getElementById(targetId);
  if (!el) return;

  // Measure the fixed navbar height
  const nav = document.querySelector('.site-nav');
  const navHeight = nav ? nav.getBoundingClientRect().height : 75;

  // Find the primary heading or inner container so we frame the content itself,
  // preventing overscroll on sections with large padding or underscroll on sub-sections.
  const innerContent =
    el.querySelector(
      '.skills-title, .about-container, .work-header, .activities-header, .internships-header, .hackathons-header, .certifications-header, .contact-container'
    ) || el;

  const rect = innerContent.getBoundingClientRect();
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Desired breathing room gap between bottom of navbar and top of content
  const gap = 24;
  const targetY = rect.top + currentScroll - navHeight - gap;

  window.scrollTo({
    top: Math.max(0, Math.round(targetY)),
    behavior: 'smooth'
  });
}
