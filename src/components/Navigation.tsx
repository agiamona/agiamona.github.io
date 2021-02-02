import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import { NavigationItems, ILink } from "../assets/navigationData";

const Link = styled.a`
  font-weight: 900;
  text-decoration: none;
  font-size: 1.6em;

  &:hover {
    color: ${({ theme }) => theme.colors.borders};
    text-decoration: underline;
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: auto;
`;

const MenuItem = styled.li<{ mobileBreakpoint: string }>`
  padding-left: 1em;
  display: inline;
  ${(props) => props.mobileBreakpoint} {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em 0;
    margin: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  }
`;

interface INavigation {
  mobileMenuIsVisible: boolean;
  mobileBreakpoint: string;
}

const StyledNav = styled.nav<INavigation>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.3em 1em;

  ${(props) => props.mobileBreakpoint} {
    display: ${(props) => (props.mobileMenuIsVisible ? "block" : "none")};
    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 1em 0;
    padding-top: 6em;
    box-shadow: 0 0.2em 0.4em ${({ theme }) => theme.colors.shodows};
  }
`;

interface IMenuItem {
  link: ILink;
  mobileBreakpoint: string;
  icon?: IconDefinition;
  mobileMenuIsVisible?: boolean;
}
const getMenuItem = (item: IMenuItem): JSX.Element => (
  <MenuItem mobileBreakpoint={item.mobileBreakpoint} key={item.link.href}>
    <Link href={item.link.href}>
      {item.icon ? (
        <FontAwesomeIcon
          icon={item.icon}
          size={item.mobileMenuIsVisible ? "2x" : "1x"}
        />
      ) : null}
      {item.link.title}
    </Link>
  </MenuItem>
);

export default function Navigation(props: INavigation): JSX.Element {
  const { mobileMenuIsVisible, mobileBreakpoint } = props;
  const gitHubIcon = {
    title: "",
    href: "https://github.com/agiamona/",
  };
  const linkedinIcon = {
    title: "",
    href: "https://www.linkedin.com/in/ashleygiamona248/",
  };

  const navigationMenuItems = NavigationItems.map((item) =>
    getMenuItem({
      link: item,
      mobileBreakpoint,
      mobileMenuIsVisible,
    })
  );

  navigationMenuItems.push(
    getMenuItem({
      link: gitHubIcon,
      mobileBreakpoint,
      icon: faGithubSquare,
      mobileMenuIsVisible,
    })
  );
  navigationMenuItems.push(
    getMenuItem({
      link: linkedinIcon,
      mobileBreakpoint,
      icon: faLinkedin,
      mobileMenuIsVisible,
    })
  );

  return (
    <>
      <StyledNav
        mobileMenuIsVisible={mobileMenuIsVisible}
        mobileBreakpoint={mobileBreakpoint}
      >
        <Menu>{navigationMenuItems}</Menu>
      </StyledNav>
    </>
  );
}
