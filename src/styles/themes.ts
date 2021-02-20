import landingImageLightMode from "../assets/LandingPageBG.jpg";
import landingImageDarkMode from "../assets/LandingPageBG-DarkMode.jpg";
import bgImageLightMode from "../assets/milky_way_bg.jpg";
import bgImageDarkMode from "../assets/cityscape_bg.jpg";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export const LightTheme = {
  colors: {
    background: "#FEFBFB",
    backgroundDominant: "#232a34",
    foreground: "#1C2F33",
    borders: "#A9BABD",
    shodows: "#1a324a",
    landingImage: landingImageLightMode,
    landingImagePosition: "center top",
    bgImage: bgImageLightMode,
    textOutline: "transparent",
    transparentSection: {
      heading: "#FEFBFB",
      borders: "#A9BABD",
      button: {
        text: "#FEFBFB",
        bg: "transparent",
      },
    },
    solidSection: {
      heading: "#1C2F33",
      borders: "#A9BABD",
      button: {
        text: "#1C2F33",
        bg: "#FEFBFB",
      },
    },
  },
};

export const DarkTheme = {
  colors: {
    background: "#2c2c33",
    backgroundDominant: "#24242B",
    foreground: "#FEFBFB",
    borders: "#121618",
    shodows: "#121618",
    landingImage: landingImageDarkMode,
    landingImagePosition: "center center",
    bgImage: bgImageDarkMode,
    textOutline: "#121618",
    transparentSection: {
      heading: "#FEFBFB",
      borders: "#FEFBFB",
      button: {
        text: "#121618",
        bg: "transparent",
      },
    },
    solidSection: {
      heading: "#FEFBFB",
      borders: "#121618",
      button: {
        text: "#1C2F33",
        bg: "#FEFBFB",
      },
    },
  },
};
