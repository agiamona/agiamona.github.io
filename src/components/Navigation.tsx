import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import styled from "styled-components";

const MobileMenuBreakPoint = "max-width: 650px";

const Link = styled.a`
  font-weight: 900;
  text-decoration: none;
  font-size: 1.6em;

  &:hover {
    color: ${({ theme }) => theme.colors.borders};
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding-bottom: 0.3em;
`;

const MenuItem = styled.li`
  margin-left: 0.4em;
  display: inline;
`;

const MobileMenu = styled.button`
  display: none;
  border: none;
  background-color: transparent;

  @media only screen and (${MobileMenuBreakPoint}) {
    display: inline;
    margin: auto 0.3em;
    font-size: 3em;
  }
`;

const SocialLink = styled.a`
  font-size: 2em;
  margin-left: 0.5em;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.3em 1em;

  @media only screen and (${MobileMenuBreakPoint}) {
    display: ${(props) => (props.showMenu ? "block" : "none")};
  }
`;

export default function Navigation(showMenu: boolean): JSX.Element {
  return (
    <>
      <MobileMenu>
        <FontAwesomeIcon icon={faBars} />
      </MobileMenu>
      <StyledNav>
        <div>
          <SocialLink href="https://github.com/agiamona/">
            <FontAwesomeIcon icon={faGithubSquare} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/ashleygiamona248/">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </div>
        <Menu>
          <MenuItem>
            <Link href="#about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#skills">Skills</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#projects">Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#contact">Contact</Link>
          </MenuItem>
        </Menu>
      </StyledNav>
    </>
  );
}
