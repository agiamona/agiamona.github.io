import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints, maxPixels } from "../styles/breakpoints";

import Logo from "./Logo";
import Navigation from "./Navigation";

const HeaderWrap = styled.header`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 5em;
  display: flex;
  filter: drop-shadow(0 0.15em 0.2em ${({ theme }) => theme.colors.shodows});
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const MobileMenu = styled.button<{ mobileBreakpoint: string }>`
  color: ${({ theme }) => theme.colors.foreground};
  display: none;
  border: none;
  background-color: transparent;
  font-size: 3em;

  ${(props) => props.mobileBreakpoint} {
    display: inline;
    margin: auto 0.3em;
    z-index: 1000;
  }
`;

export default function Header(): JSX.Element {
  const { mobileMenu } = breakpoints;
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setViewMobileMenu(
      window.innerWidth > maxPixels.mobileMenu ? false : !viewMobileMenu
    );
  };

  return (
    <HeaderWrap>
      <Logo />
      <Navigation
        viewMobileMenu={viewMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
        mobileBreakpoint={mobileMenu}
      />
      <MobileMenu
        aria-label={viewMobileMenu ? "Close Menu" : "Open Menu"}
        mobileBreakpoint={mobileMenu}
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon
          icon={viewMobileMenu ? ["fas", "times"] : ["fas", "bars"]}
        />
      </MobileMenu>
    </HeaderWrap>
  );
}
