import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0,
    padding: 0,
    box-sizing: border-box,
    backgroundColor: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: Roboto, Arial, sans-serif;
    transition: all 0.50s linear;
  }
`;
