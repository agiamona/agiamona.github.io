import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints, maxPixels } from "../styles/breakpoints";

import Logo from "./Logo";
import Navigation from "./Navigation";
import { THEMES } from "../styles/themes";

const HeaderWrap = styled.header`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 5rem;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const MobileMenu = styled.button<{ mobileBreakpoint: string }>`
  color: ${({ theme }) => theme.colors.foreground};
  display: none;
  border: none;
  background-color: transparent;
  font-size: 3rem;

  ${(props) => props.mobileBreakpoint} {
    display: inline;
    margin: auto 0.3rem;
    z-index: 1000;
  }
`;

interface IHeader {
  theme: {
    current: THEMES;
    onToggle: () => void;
  };
}
export default function Header(props: IHeader): JSX.Element {
  const { mobileMenu } = breakpoints;
  const { theme } = props;
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
        theme={theme}
      />
      <MobileMenu
        aria-label={viewMobileMenu ? "Close Menu" : "Open Menu"}
        mobileBreakpoint={mobileMenu}
        onClick={toggleMobileMenu}
      >
        <FontAwesomeIcon
          icon={viewMobileMenu ? ["fas", "times"] : ["fas", "bars"]}
          aria-hidden
        />
      </MobileMenu>
    </HeaderWrap>
  );
}
