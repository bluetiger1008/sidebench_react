import React, { Component } from "react";
import { MdAccessTime, MdAssignment } from "react-icons/md";

import MessageBoxContainer from "./styles/messageBox.style";

class AssistBox extends Component {
  render() {
    const { answer, person, viewedBy, viewedTime } = this.props;

    return (
      <MessageBoxContainer className={`assistBox ${answer ? "right" : "left"}`}>
        <div className={`message-box ${answer ? "right" : "left"}`}>
          <p>Daily grooming assistance</p>
          <p>
            <MdAccessTime />
            Dec 1 <br /> Daily
          </p>
          <p>
            <MdAssignment />
            assist with daily grooming activities such as bathing, teeth, hair,
            dressing
          </p>
          <button>Accept</button>
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

export default AssistBox;
