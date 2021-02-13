import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

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
  icon?: [IconPrefix, IconName];
}

const MenuItem = (item: IMenuItem): JSX.Element => {
  const { viewMobileMenu, icon } = item;

  return (
    <StyledLi mobileBreakpoint={item.mobileBreakpoint}>
      <Link href={item.href} onClick={item.toggleMobileMenu}>
        {icon ? (
          <FontAwesomeIcon icon={icon} size={viewMobileMenu ? "2x" : "1x"} />
        ) : (
          item.title
        )}
      </Link>
    </StyledLi>
  );
};

export default MenuItem;
