import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./common/theme";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Application = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
ReactDOM.render(Application, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
