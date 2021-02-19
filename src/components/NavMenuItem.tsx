import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { StyledLi, Link } from "./NavigationStyles";

interface IMenuItem {
  href: string;
  title: string;
  mobileBreakpoint: string;
  toggleMobileMenu?: () => void;
  icon?: [IconPrefix, IconName];
}

const NavMenuItem = (item: IMenuItem): JSX.Element => {
  const { icon } = item;

  return (
    <StyledLi mobileBreakpoint={item.mobileBreakpoint}>
      <Link
        href={item.href}
        onClick={item.toggleMobileMenu}
        mobileBreakpoint={item.mobileBreakpoint}
        aria-label={item.title}
      >
        {icon ? <FontAwesomeIcon icon={icon} aria-hidden /> : item.title}
      </Link>
    </StyledLi>
  );
};

export default NavMenuItem;
