import React from "react";
import styled from "styled-components";

export const Link = styled.a`
  font-weight: 900;
  text-decoration: none;
  font-size: 1.6em;

  &:hover {
    color: ${({ theme }) => theme.colors.borders};
  }
`;

export const StyledLi = styled.li<{ mobileBreakpoint: string }>`
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

interface IMenuItem {
  href: string;
  title: string;
  mobileBreakpoint: string;
  viewMobileMenu: boolean;
  toggleMobileMenu?: () => void;
  icon?: JSX.Element;
}

const MenuItem = (item: IMenuItem): JSX.Element => {
  return (
    <StyledLi mobileBreakpoint={item.mobileBreakpoint}>
      <Link href={item.href} onClick={item.toggleMobileMenu}>
        {item.icon ? item.icon : item.title}
      </Link>
    </StyledLi>
  );
};

export default MenuItem;
