import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { breakpoints } from "../styles/breakpoints";

import Logo from "./Logo";
import Navigation from "./Navigation";

const HeaderWrap = styled.header`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 5em;
  display: flex;
  box-shadow: 0 0.2em 0.4em ${({ theme }) => theme.colors.shodows};
  display: flex;
  justify-content: space-between;
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
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <HeaderWrap>
      <Logo />
      <Navigation
        mobileMenuIsVisible={openMobileMenu}
        mobileBreakpoint={mobileMenu}
      />
      <MobileMenu
        mobileBreakpoint={mobileMenu}
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </MobileMenu>
    </HeaderWrap>
  );
}
