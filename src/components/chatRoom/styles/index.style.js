import styled from "styled-components";

const ChatRoomContainer = styled.div`
  flex-grow: 1;

  .room-header {
    background-color: ${props => props.theme.colors.fountainBlue};
    height: 74px;
    padding: 0 32px;
    color: white;
  }

  .room-content {
    padding: 21px 32px;

    .message-box {
      width: 702px;
      border-radius: 17px;
      position: relative;
      padding: 15px 25px;

      &.right {
        background-color: ${props => props.theme.colors.mystic};

        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: -2px;
          right: -7px;
          height: 20px;
          border-right: 20px solid #0b93f6;
          border-bottom-left-radius: 16px 14px;
          -webkit-transform: translate(0, -2px);
        }

        &:after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: -2px;
          right: -56px;
          width: 26px;
          height: 20px;
          background: white;
          border-bottom-left-radius: 10px;
          -webkit-transform: translate(-30px, -2px);
        }
      }

      &.left {
        background-color: ${props => props.theme.colors.mystic};
        &:before {
          content: "";
          position: absolute;
          z-index: 2;
          bottom: -2px;
          left: -7px;
          height: 20px;
          border-left: 20px solid #e5e5ea;
          border-bottom-right-radius: 16px 14px;
          -webkit-transform: translate(0, -2px);
        }

        &:after {
          content: "";
          position: absolute;
          z-index: 3;
          bottom: -2px;
          left: 4px;
          width: 26px;
          height: 20px;
          background: white;
          border-bottom-right-radius: 10px;
          -webkit-transform: translate(-30px, -2px);
        }
      }
    }
  }
`;

export default ChatRoomContainer;
