import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import FlexUtils from "./styles/flexUtils";
import AppContainer from "./styles/app.style";
import Navbar from "./components/navbar";
import { Notification } from "./components/common";
import ChatRoom from "./components/chatRoom";
import "./App.css";

const GlobalStyle = createGlobalStyle`${FlexUtils}`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Navbar />
        <Notification />
        <ChatRoom />
        <GlobalStyle />
      </AppContainer>
    );
  }
}

export default App;
