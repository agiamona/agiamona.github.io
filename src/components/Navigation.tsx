import React from "react";
import { Menu, StyledNav } from "./NavigationStyles";
import { NavigationItems, SocialLinkItems } from "../assets/NavigationData";
import MenuItem from "./MenuItem";

interface INavigation {
  viewMobileMenu: boolean;
  mobileBreakpoint: string;
  toggleMobileMenu: () => void;
}

export default function Navigation(props: INavigation): JSX.Element {
  const { viewMobileMenu, mobileBreakpoint, toggleMobileMenu } = props;

  const allMenuItems = NavigationItems.concat(SocialLinkItems);
  const navigationMenuItems = allMenuItems.map((item) => (
    <MenuItem
      key={item.href}
      href={item.href}
      title={item.title}
      icon={item.icon}
      mobileBreakpoint={mobileBreakpoint}
      viewMobileMenu={viewMobileMenu}
      toggleMobileMenu={toggleMobileMenu}
    />
  ));

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
