import React from "react";
import styled from "styled-components";

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

export default function Header(): JSX.Element {
  return (
    <HeaderWrap>
      <Logo />
      <Navigation />
    </HeaderWrap>
  );
}
