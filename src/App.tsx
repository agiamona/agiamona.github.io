import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";

import Header from "./components/Header";
import { lightTheme } from "./themes/themes";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}
