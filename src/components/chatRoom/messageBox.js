import React, { Component } from "react";

import MessageBoxContainer from "./styles/messageBox.style";

class MessageBox extends Component {
  render() {
    const { answer, message, person, viewedBy, viewedTime } = this.props;

    return (
      <MessageBoxContainer className={`${answer ? "right" : "left"}`}>
        <div className={`message-box ${answer ? "right" : "left"}`}>
          <p>{message}</p>
        </div>
        <div className="message-info">
          <div className="message-person">
            <img src={person} alt="message person" />
          </div>
          <div className="viewed-by">
            <p>{viewedBy}</p>
            <p>{viewedTime}</p>
          </div>
        </div>
      </MessageBoxContainer>
    );
  }
}

export default MessageBox;
