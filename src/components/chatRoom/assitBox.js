import React, { Component } from "react";

import MessageBoxContainer from "./styles/messageBox.style";

class AssistBox extends Component {
  render() {
    const { answer } = this.props;

    return (
      <MessageBoxContainer
        position={answer ? "right" : "left"}
        className="assistBox"
      >
        <div className={`message-box ${answer ? "right" : "left"}`}>
          <p>Daily grooming assistance</p>
          <p>
            Dec 1 <br /> Daily
          </p>
          <p>
            assist with daily grooming activities such as bathing, teeth, hair,
            dressing
          </p>
          <button>Accept</button>
        </div>
      </MessageBoxContainer>
    );
  }
}

export default AssistBox;
