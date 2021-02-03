import React from "react";
import styled from "styled-components";

const SolidLinkButton = styled.a`
  background-color: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  padding: 1em;

  &:visited {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const HollowLinkButton = styled.a`
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  padding: 1em;

  &:visited {
    color: ${({ theme }) => theme.colors.background};
  }
`;

type ButtonProps = {
  href: string;
  text: string;
  isHollow?: boolean;
};

export default function ButtonLink(
  { href, text, isHollow }: ButtonProps,
  children?: React.ReactChild | React.ReactChild[]
): JSX.Element {
  return (
    <>
      {isHollow ? (
        <HollowLinkButton href={href}>{children}</HollowLinkButton>
      ) : (
        <SolidLinkButton href={href}>{text}</SolidLinkButton>
      )}
    </>
  );
}

ButtonLink.defaultProps = {
  isHollow: false,
};
