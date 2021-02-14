const breakpoint = (bp: string): string => `@media (max-width: ${bp})`;

export const breakpoints = {
  defaultNoMobile: breakpoint("0px"),
  mobileMenu: breakpoint("755px"),
  projectMobile: breakpoint("700px"),
  projectMiniMobile: breakpoint("420px"),
  landingMobile: breakpoint("600px"),
  aboutMeMobile: breakpoint("800px"),
  footerMobile: breakpoint("600px"),
  contactMobile: breakpoint("400px"),
};
