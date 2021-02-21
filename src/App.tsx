import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faBars,
  faTimes,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Landing from "./components/sections/Landing";
import { THEMES, DarkTheme, LightTheme } from "./styles/themes";
import data from "./assets/data.json";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

library.add(
  faGithub,
  faGithubSquare,
  faLinkedin,
  faExternalLinkAlt,
  faBars,
  faTimes,
  faAngleRight,
  faAngleDoubleRight
);

const THEME_KEY = "THEME";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App(): JSX.Element {
  const [theme, setTheme] = useState(() => {
    let selectedTheme = THEMES.DARK;

    const themeStorage = window.localStorage.getItem(THEME_KEY);
    if (themeStorage) {
      selectedTheme =
        themeStorage === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
    }

    return selectedTheme;
  });

  const toggleTheme = () => {
    const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <ThemeProvider theme={theme === THEMES.LIGHT ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <Header theme={{ current: theme, onToggle: toggleTheme }} />
      <main>
        <Landing title={data.landing.title} subtitle={data.landing.subtitle} />
        <AboutSection text={data.aboutMe} />
        <SkillSection skills={data.skills} />
        <ProjectSection projects={data.projects} />
        <ContactSection contact={data.contact} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
