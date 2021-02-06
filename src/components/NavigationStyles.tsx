import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  margin: auto;
`;

export interface INavigation2 {
  viewMobileMenu: boolean;
  mobileBreakpoint: string;
}

export const StyledNav = styled.nav<INavigation2>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.3em 1em;

  ${(props) => props.mobileBreakpoint} {
    display: ${(props) => (props.viewMobileMenu ? "block" : "none")};
    background-color: ${({ theme }) => theme.colors.background};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 1em 0;
    padding-top: 6em;
    box-shadow: 0 0.2em 0.4em ${({ theme }) => theme.colors.shodows};
  }
`;
