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
      box-shadow: -4px 2.9px 0px grey;

      .wrapper {
        padding: 20px 21px 16px;
      }

      &.right {
        &:before {
          box-shadow: -2px 2px 0 grey;
        }
      }

      .title {
        color: ${props => props.theme.colors.corduroy};
        font-size: 13px;
        font-family: "Gotham Medium";
      }

      .time,
      .description {
        display: flex;
        font-size: 13px;
        font-family: "Gotham Book";
        color: ${props => props.theme.colors.corduroy};
        margin-top: 15px;

        span {
          font-family: "Gotham Italic";
        }

        .icon {
          width: 28px;
          font-size: 16px;
        }
      }

      .description {
        align-items: center;
        margin-bottom: 15px;
      }

      button {
        width: 131px;
        height: 36px;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.coralTree};
        color: white;
        font-size: 20px;
        font-family: "Giro Light";
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

      .name {
        font-family: "Gotham Bold";
      }

      .time {
        font-family: "Gotham Book";
      }
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
