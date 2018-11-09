import React, { Component } from "react";

import MessageBoxContainer from "./styles/messageBox.style";

class MessageBox extends Component {
  render() {
    const { answer, message } = this.props;

    return (
      <MessageBoxContainer position={answer ? "right" : "left"}>
        <div className={`message-box ${answer ? "right" : "left"}`}>
          <p>{message}</p>
        </div>
      </MessageBoxContainer>
    );
  }
}

export default MessageBox;
