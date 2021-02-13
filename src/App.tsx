import React from "react";
import { RouteComponentProps } from "@reach/router";

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
import Landing from "./components/Landing";
import { lightTheme } from "./styles/themes";
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App(props: RouteComponentProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
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
