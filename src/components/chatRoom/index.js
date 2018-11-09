import React, { Component } from "react";

import ChatRoomContainer from "./styles/index.style";
import RoomNotification from "./roomNotification";
import AssistBox from "./assitBox";
import MessageBox from "./messageBox";

class ChatRoom extends Component {
  render() {
    return (
      <ChatRoomContainer>
        <div className="room-header d-flex align-items-center">
          <p>Mom's Discharge Plan</p>
        </div>
        <div className="room-content">
          <RoomNotification
            message={"Starter Care Plan created + daily actions added"}
          />
          <AssistBox answer />
          <MessageBox
            message={
              "I moved Karen’s knitting kit from the study upstairs to the the living room."
            }
          />
          <MessageBox
            message={
              "I moved Karen’s knitting kit from the study upstairs to the the living room."
            }
            answer
          />
        </div>
      </ChatRoomContainer>
    );
  }
}

export default ChatRoom;
