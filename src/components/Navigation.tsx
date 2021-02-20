import React from "react";
import { Menu, StyledNav, StyledLi } from "./NavigationStyles";
import { NavigationItems, SocialLinkItems } from "../assets/NavigationData";
import NavMenuItem from "./NavMenuItem";
import ModeToggle from "./ModeToggle";
import { THEMES } from "../styles/themes";

interface INavigation {
  viewMobileMenu: boolean;
  mobileBreakpoint: string;
  toggleMobileMenu: () => void;
  theme: {
    current: THEMES;
    onToggle: () => void;
  };
}

export default function Navigation(props: INavigation): JSX.Element {
  const { viewMobileMenu, mobileBreakpoint, toggleMobileMenu, theme } = props;

  const allMenuItems = NavigationItems.concat(SocialLinkItems);
  const navigationMenuItems = allMenuItems.map((item) => (
    <NavMenuItem
      key={item.href}
      href={item.href}
      title={item.title}
      icon={item.icon}
      mobileBreakpoint={mobileBreakpoint}
      toggleMobileMenu={toggleMobileMenu}
    />
  ));

  navigationMenuItems.push(
    <StyledLi mobileBreakpoint={mobileBreakpoint} key="toggle">
      <ModeToggle theme={theme} />
    </StyledLi>
  );

  return (
    <>
      <StyledNav
        viewMobileMenu={viewMobileMenu}
        mobileBreakpoint={mobileBreakpoint}
      >
        <Menu>{navigationMenuItems}</Menu>
      </StyledNav>
    </>
  );
}
