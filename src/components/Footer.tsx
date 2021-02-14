import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationItems, SocialLinkItems } from "../assets/NavigationData";
import { breakpoints } from "../styles/breakpoints";

export const StyledFooter = styled.footer<{ mobile?: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  width: 1005;
  padding-top: 1em;
  min-height: 14em;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${(props) => props.mobile} {
    flex-direction: column;
    padding-bottom: 2em;
    min-height: 18em;
  }
`;

StyledFooter.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

export const PlainList = styled.ul`
  list-style: none;
  font-size: 1.3em;
  font-weight: bold;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};

  &:visited {
    color: ${({ theme }) => theme.colors.foreground};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.borders};
  }

  & ${this} svg {
    margin-right: 0.5em;
  }
`;

export const CopyrightLabel = styled.p`
  position: absolute;
  bottom: 0.2em;
  width: 100%;
  text-align: center;
`;

export default function Footer(): JSX.Element {
  const navItems = NavigationItems.map((item) => (
    <li key={item.href}>
      <StyledLink href={item.href}>{item.title}</StyledLink>
    </li>
  ));
  const socialItems = SocialLinkItems.map((item) => (
    <li key={item.href}>
      <StyledLink href={item.href} target="_blank">
        {item.icon ? <FontAwesomeIcon icon={item.icon} /> : null}
        {item.title}
      </StyledLink>
    </li>
  ));

  return (
    <StyledFooter mobile={breakpoints.footerMobile}>
      <PlainList>{navItems}</PlainList>
      <PlainList>{socialItems}</PlainList>

      <CopyrightLabel>
        Copyright &copy; Ashley Elena Giamona 2021
      </CopyrightLabel>
    </StyledFooter>
  );
}
