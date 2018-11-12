import React, { Component } from "react";

import NotificationContainer from "./index.style";
import logo from "../../../assets/images/care_3_logo.png";

class Notification extends Component {
  render() {
    return (
      <NotificationContainer>
        <div className="notification-content">
          <img src={logo} alt="logo" />
          <div className="info">
            <p className="title">Care3</p>
            <p className="sub-title">Chrome Notifications</p>
            <p>New Messags Notifications...</p>
          </div>
        </div>
        <div className="notification-actions">
          <div className="notification-button btn-close">Close</div>
          <div className="notification-button">Settings</div>
        </div>
      </NotificationContainer>
    );
  }
}

export default Notification;
