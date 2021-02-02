import React from "react";
import { RouteComponentProps } from "@reach/router";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Landing from "./components/Landing";
import { lightTheme } from "./styles/themes";
import PageOne from "./components/PageOne";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App(props: RouteComponentProps): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Landing />

        <div style={{ height: "200vh" }} />
        <PageOne id="partone" text="Page One" />
        <PageOne id="parttwo" text="Page Two" />
      </>
    </ThemeProvider>
  );
}
