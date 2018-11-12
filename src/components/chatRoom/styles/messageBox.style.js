import styled from "styled-components";

const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  &.right {
    align-items: flex-end;
  }
  &.left {
    align-items: flex-start;
  }

  &.assistBox {
    .message-box {
      padding: 20px 21px 16px;
      box-shadow: -4px 2.9px 0px grey;

      &.right {
        &:before {
          box-shadow: -2px 2px 0 grey;
        }
      }
    }
  }

  .message-info {
    display: flex;
    width: 739px;

    .message-person {
      display: flex;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .viewed-by {
      padding-left: 23px;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
    }
  }

  &.right {
    .message-info {
      flex-direction: row-reverse;

      .viewed-by {
        padding-right: 23px;
      }
    }
  }
`;

export default MessageBoxContainer;
