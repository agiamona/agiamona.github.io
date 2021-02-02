import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../assets/milky_way_bg.jpg";

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
      url(${BackgroundImage}) no-repeat center center fixed;

    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  a{
    color: ${({ theme }) => theme.colors.foreground};

    &:visited {
      color: ${({ theme }) => theme.colors.foreground};
    }
  }
  
`;
