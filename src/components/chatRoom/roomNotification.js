import React from "react";
import styled from "styled-components";

const Notification = styled.div`
  font-size: 11px;
  color: ${props => props.theme.colors.corduroy};
  text-align: center;
  margin-bottom: 16px;
  font-family: "Gotham Bold";
`;

const RoomNotification = ({ message }) => {
  return <Notification>{message}</Notification>;
};

export default RoomNotification;
