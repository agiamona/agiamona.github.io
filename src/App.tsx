import React from "react";
import { RouteComponentProps } from "@reach/router";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Landing from "./components/Landing";
import { lightTheme } from "./styles/themes";
import PageOne from "./components/PageOne";
import Section from "./components/Section";
import data from "./assets/data.json";
import About from "./components/About";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App(props: RouteComponentProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Landing title={data.landing.title} subtitle={data.landing.subtitle} />
        <About text={data.aboutMe} />
        <Section id="skills" title="Skills" transparent>
          <p style={{ color: "blue" }}>Testing data here</p>
        </Section>

        <PageOne id="partone" text="Page One" />
        <PageOne id="parttwo" text="Page Two" />
      </>
    </ThemeProvider>
  );
}
