const getImageLink = (image: string): string => {
  const linkBase = "https://res.cloudinary.com/dgrosspgy/image/upload/";
  if (window.innerHeight > window.innerWidth) {
    return `${linkBase}h_${window.innerHeight},c_scale/${image}`;
  }

  return `${linkBase}h_${window.innerWidth},c_scale/${image}`;
};

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
    landingImage: getImageLink("v1613889565/LandingPageBG_uir08i.jpg"),
    landingImagePosition: "center top",
    bgImage: getImageLink("v1613889587/milky_way_bg_g1otw6.jpg"),
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
    landingImage: getImageLink("v1613889577/LandingPageBG-DarkMode_obxlrs.jpg"),
    landingImagePosition: "center center",
    bgImage: getImageLink("v1613889557/cityscape_bg_zz5ykk.jpg"),
    textOutline: "#121618",
    transparentSection: {
      heading: "#FEFBFB",
      borders: "#FEFBFB",
      button: {
        text: "#FEFBFB",
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
