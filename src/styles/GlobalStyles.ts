import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color: ${({ theme }) => theme.colors.foreground};
    font-family: 'Roboto Slab', Arial, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundDominant}
      url(${({ theme }) => theme.colors.bgImage}) no-repeat center center fixed;
    background-size: cover;
  }

  a{
    color: ${({ theme }) => theme.colors.foreground};

    &:visited {
      color: ${({ theme }) => theme.colors.foreground};
    }
  }
  
`;
