import styled from "styled-components";

const ChatRoomContainer = styled.div`
  flex-grow: 1;
  position: relative;

  .disabled-background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 98;
  }

  .room-header {
    background-color: ${props => props.theme.colors.fountainBlue};
    height: 74px;
    padding: 0 32px;
    color: white;
  }

  .room-content {
    height: calc(100vh - 124px);
    overflow: auto;

    .wrapper {
      padding: 21px 32px;

      .message-box {
        width: 702px;
        border-radius: 17px;
        position: relative;
        font-family: "Gotham Book";
        font-size: 13px;

        .wrapper {
          padding: 15px 25px;
        }

        &.right {
          background-color: ${props => props.theme.colors.mystic};
          margin-right: 37px;

          &:before {
            content: "";
            position: absolute;
            z-index: -1;
            bottom: -2px;
            right: -7px;
            height: 20px;
            border-right: 20px solid ${props => props.theme.colors.mystic};
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
          margin-left: 37px;

          &:before {
            content: "";
            position: absolute;
            z-index: 2;
            bottom: -2px;
            left: -7px;
            height: 20px;
            border-left: 20px solid ${props => props.theme.colors.mystic};
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
  }

  .room-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f0f0f0;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 3px;
    padding-right: 13px;

    button {
      outline: none;
    }

    .btn-plus {
      width: 35px;
      height: 35px;
      background-color: white;
      border-radius: 50%;
      font-size: 32px;
      line-height: 35px;
      text-align: center;
      margin-right: 10px;
      font-family: "Gotham Book";
      color: ${props => props.theme.colors.doveGray};
    }

    input {
      height: 35px;
      border-radius: 10px;
      flex-grow: 1;
      border: none;
      padding: 0 15px;
      outline: none;
      font-size: 17px;
    }

    .btn-send {
      margin-left: 13px;
    }
  }
`;

export const DateBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;

  p {
    font-size: 11px;
    color: white;
    background-color: ${props => props.theme.colors.quillGray};
    padding: 4px 15px;
    border-radius: 9px;
  }
`;

export default ChatRoomContainer;
