import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      foreground: string;
      background: string;
      backgroundDominant: string;
      borders: string;
      shodows: string;
      landingImage: string;
      bgImage: string;
      textOutline: string;
      transparentSection: {
        heading: string;
        borders: string;
        button: {
          bg: string;
          text: string;
        };
      };
      solidSection: {
        heading: string;
        borders: string;
        button: {
          bg: string;
          text: string;
        };
      };
    };
  }
}
