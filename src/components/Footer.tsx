import React from "react";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  width: 1005;
  padding-top: 1em;
  min-height: 14em;
  position: relative;
`;

export const FooterItemsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CopyrightLabel = styled.p`
  position: absolute;
  bottom: 0.2em;
  width: 100%;
  text-align: center;
`;

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <CopyrightLabel>Copyright &copy Ashley Elena Giamona 2021</CopyrightLabel>
    </StyledFooter>
  );
}
