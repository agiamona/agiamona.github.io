import styled from "styled-components";

export const Link = styled.a<{ mobileBreakpoint: string }>`
  font-weight: 900;
  text-decoration: none;
  font-size: 1.6rem;

  &:hover {
    color: ${({ theme }) => theme.colors.borders};
  }

  ${(props) => props.mobileBreakpoint} {
    font-size: 2rem;
    > svg {
      font-size: 3rem;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  margin: auto;
`;

export const StyledLi = styled.li<{ mobileBreakpoint: string }>`
  padding-left: 1rem;
  display: inline-block;
  margin: auto;
  vertical-align: middle;
  ${(props) => props.mobileBreakpoint} {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em 0;
    margin: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};

    label {
      font-size: 2rem;
    }
  }
`;

export interface INavigation {
  viewMobileMenu: boolean;
  mobileBreakpoint: string;
}

export const StyledNav = styled.nav<INavigation>`
  display: inline-block;
  padding: 0.3rem 1rem;

  ${(props) => props.mobileBreakpoint} {
    display: ${(props) => (props.viewMobileMenu ? "block" : "none")};
    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 1em 0;
    padding-top: 6rem;
    box-shadow: 0 0.2em 0.4em ${({ theme }) => theme.colors.shodows};
  }
`;
