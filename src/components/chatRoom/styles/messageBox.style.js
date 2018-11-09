import styled from "styled-components";

const MessageBoxContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.position === "right" ? "flex-end" : "flex-start"};

  &.assistBox {
    .message-box {
      padding: 20px 21px 16px;
      box-shadow: -4px 2.9px 0px grey;
    }
  }
`;

export default MessageBoxContainer;
