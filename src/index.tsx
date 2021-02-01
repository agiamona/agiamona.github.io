import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <App path="page-one" />
      <App path="page-two" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
