import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import styled from "styled-components";

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
  showMenu: boolean;
  mobileBreakpoint: string;
}

const StyledNav = styled.nav<INavigation>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.3em 1em;

  ${(props) => props.mobileBreakpoint} {
    display: ${(props) => (props.showMenu ? "block" : "none")};
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

export default function Navigation(props: INavigation): JSX.Element {
  const { showMenu, mobileBreakpoint } = props;
  return (
    <>
      <StyledNav showMenu={showMenu} mobileBreakpoint={mobileBreakpoint}>
        <Menu>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="https://github.com/agiamona/">
              <FontAwesomeIcon icon={faGithubSquare} />
            </Link>
          </MenuItem>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="https://www.linkedin.com/in/ashleygiamona248/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="#about">About</Link>
          </MenuItem>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="#skills">Skills</Link>
          </MenuItem>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="#projects">Projects</Link>
          </MenuItem>
          <MenuItem mobileBreakpoint={mobileBreakpoint}>
            <Link href="#contact">Contact</Link>
          </MenuItem>
        </Menu>
      </StyledNav>
    </>
  );
}
