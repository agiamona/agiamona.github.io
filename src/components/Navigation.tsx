import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { Menu, StyledNav } from "./NavigationStyles";
import { NavigationItems } from "../assets/NavigationData";
import MenuItem from "./MenuItem";

interface INavigation {
  viewMobileMenu: boolean;
  mobileBreakpoint: string;
  toggleMobileMenu: () => void;
}

export default function Navigation(props: INavigation): JSX.Element {
  const { viewMobileMenu, mobileBreakpoint, toggleMobileMenu } = props;

  const navigationMenuItems = NavigationItems.map((item) => (
    <MenuItem
      key={item.href}
      href={item.href}
      title={item.title}
      mobileBreakpoint={mobileBreakpoint}
      viewMobileMenu={viewMobileMenu}
      toggleMobileMenu={toggleMobileMenu}
    />
  ));

  const geticon = (icon: IconDefinition): JSX.Element => {
    return <FontAwesomeIcon icon={icon} size={viewMobileMenu ? "2x" : "1x"} />;
  };

  navigationMenuItems.push(
    <MenuItem
      key="https://github.com/agiamona/"
      href="https://github.com/agiamona/"
      title=""
      mobileBreakpoint={mobileBreakpoint}
      viewMobileMenu={viewMobileMenu}
      toggleMobileMenu={toggleMobileMenu}
      icon={geticon(faGithubSquare)}
    />
  );
  navigationMenuItems.push(
    <MenuItem
      key="https://www.linkedin.com/in/ashleygiamona248/"
      href="https://www.linkedin.com/in/ashleygiamona248/"
      title=""
      mobileBreakpoint={mobileBreakpoint}
      viewMobileMenu={viewMobileMenu}
      toggleMobileMenu={toggleMobileMenu}
      icon={geticon(faLinkedin)}
    />
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
