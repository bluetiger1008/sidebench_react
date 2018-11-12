import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import FlexUtils from "./styles/flexUtils";
import Fonts from "./styles/fonts";
import AppContainer from "./styles/app.style";
import Navbar from "./components/navbar";
import { Notification } from "./components/common";
import ChatRoom from "./components/chatRoom";
import "./App.css";

const GlobalStyle = createGlobalStyle`${FlexUtils}`;
const FontStyle = createGlobalStyle`${Fonts}`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Navbar />
        <Notification />
        <ChatRoom />
        <GlobalStyle />
        <FontStyle />
      </AppContainer>
    );
  }
}

export default App;
