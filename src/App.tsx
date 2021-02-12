import React from "react";
import { RouteComponentProps } from "@reach/router";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Landing from "./components/Landing";
import { lightTheme } from "./styles/themes";
import data from "./assets/data.json";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App(props: RouteComponentProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <main>
        <GlobalStyles />
        <Header />
        <Landing title={data.landing.title} subtitle={data.landing.subtitle} />
        <AboutSection text={data.aboutMe} />
        <SkillSection skills={data.skills} />
        <ProjectSection projects={data.projects} />
      </main>
    </ThemeProvider>
  );
}
