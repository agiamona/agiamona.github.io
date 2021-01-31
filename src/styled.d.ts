import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      foreground: string;
      background: string;
      borders: string;
    };
  }
}
