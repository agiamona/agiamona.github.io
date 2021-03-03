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
  faSpinner,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/sections/Landing";
import Loading from "./components/Loading";
import { THEMES, DarkTheme, LightTheme } from "./styles/themes";
import data from "./assets/data.json";

const AboutSection = React.lazy(
  () => import("./components/sections/AboutSection")
);

const SkillSection = React.lazy(
  () => import("./components/sections/SkillSection")
);

const ProjectSection = React.lazy(
  () => import("./components/sections/ProjectSection")
);

const ContactSection = React.lazy(
  () => import("./components/sections/ContactSection")
);

library.add(
  faGithub,
  faGithubSquare,
  faLinkedin,
  faExternalLinkAlt,
  faBars,
  faTimes,
  faAngleRight,
  faAngleDoubleRight,
  faSpinner,
  faCircleNotch
);

const THEME_KEY = "THEME";
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
        <React.Suspense fallback={<Loading />}>
          <AboutSection text={data.aboutMe} />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <SkillSection skills={data.skills} />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <ProjectSection projects={data.projects} />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <ContactSection contact={data.contact} />
        </React.Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
