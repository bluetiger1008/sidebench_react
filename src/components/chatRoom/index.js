import React, { Component } from "react";
import { MdSend } from "react-icons/md";

import ChatRoomContainer, { DateBoxWrapper } from "./styles/index.style";
import RoomNotification from "./roomNotification";
import AssistBox from "./assitBox";
import MessageBox from "./messageBox";
import { man1, man2 } from "../../assets/images/people";

const Date = ({ date }) => {
  return (
    <DateBoxWrapper>
      <p>{date}</p>
    </DateBoxWrapper>
  );
};

class ChatRoom extends Component {
  render() {
    return (
      <ChatRoomContainer>
        <div className="room-header d-flex align-items-center">
          <p>Mom's Discharge Plan</p>
        </div>
        <div className="room-content">
          <div className="wrapper">
            <RoomNotification
              message={"Starter Care Plan created + daily actions added"}
            />
            <AssistBox
              answer
              person={man2}
              viewedBy={"me"}
              viewedTime={"1:45p"}
            />
            <Date date="Apr 1" />
            <MessageBox
              message={
                "I moved Karen’s knitting kit from the study upstairs to the the living room."
              }
              person={man1}
              viewedBy={"SK"}
              viewedTime={"11:58a"}
            />
            <MessageBox
              message={
                "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl."
              }
              answer
              person={man2}
              viewedBy={"me"}
              viewedTime={"1:45p"}
            />
          </div>
        </div>
        <div className="room-footer">
          <a className="btn-plus">+</a>
          <input type="text" placeholder="message" />
          <a className="btn-send">
            <MdSend />
          </a>
        </div>

        {/* <div className="disabled-background" /> */}
      </ChatRoomContainer>
    );
  }
}

export default ChatRoom;
