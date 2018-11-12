import styled from "styled-components";

const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    }
  }

  .message-info {
    display: flex;
    width: 732px;

    .message-person {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .viewed-by {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
    }
  }

  &.right {
    .message-info {
      flex-direction: row-reverse;
    }
  }
`;

export default MessageBoxContainer;
