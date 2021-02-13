import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface ILink {
  title: string;
  href: string;
  icon?: [IconPrefix, IconName];
}

export const NavigationItems: ILink[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const SocialLinkItems: ILink[] = [
  {
    title: "GitHub",
    href: "https://github.com/agiamona/",
    icon: ["fab", "github"],
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ashleygiamona248/",
    icon: ["fab", "linkedin"],
  },
];
