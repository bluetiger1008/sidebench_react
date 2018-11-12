import styled from "styled-components";

const NotificationContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 24px;
  right: 21px;
  background-color: ${props => props.theme.colors.gallery};
  border-radius: 5px;
  width: 400px;
  height: 80px;
  display: flex;

  .notification-content {
    width: 306px;
    display: flex;
    align-items: center;
    border-right: 1px solid ${props => props.theme.colors.silver};
    margin-left: 9px;

    p {
      margin: 0;
      font-size: 14px;

      &.title {
        font-size: 16px;
      }
    }

    img {
      width: 50px;
    }
  }

  .notification-actions {
    flex-grow: 1;

    .notification-button {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &.btn-close {
        border-bottom: 1px solid ${props => props.theme.colors.silver};
        height: calc(50% - 1px);
      }
    }
  }
`;

export default NotificationContainer;
