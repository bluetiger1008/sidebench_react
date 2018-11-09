import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import { FlexUtils } from "./styles/flexUtils";
import Navbar from "./components/navbar";
import { Notification } from "./components/common";
import logo from "./logo.svg";
import "./App.css";

const GlobalStyle = createGlobalStyle`${FlexUtils}`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Notification />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
