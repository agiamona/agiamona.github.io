export const maxPixels = {
  defaultNoMobile: 0,
  mobileMenu: 755,
  projectMobile: 700,
  projectMiniMobile: 420,
  landingMobile: 600,
  aboutMeMobile: 800,
  footerMobile: 600,
  contactMobile: 400,
};

const breakpoint = (bp: number): string => `@media (max-width: ${bp}px)`;

export const breakpoints = {
  defaultNoMobile: breakpoint(maxPixels.defaultNoMobile),
  mobileMenu: breakpoint(maxPixels.mobileMenu),
  projectMobile: breakpoint(maxPixels.projectMobile),
  projectMiniMobile: breakpoint(maxPixels.projectMiniMobile),
  landingMobile: breakpoint(maxPixels.landingMobile),
  aboutMeMobile: breakpoint(maxPixels.aboutMeMobile),
  footerMobile: breakpoint(maxPixels.footerMobile),
  contactMobile: breakpoint(maxPixels.contactMobile),
};
