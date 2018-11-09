import React, { Component } from "react";

import { Switch } from "../common";
import {
  SettingsBarContainer,
  SidebarHeader,
  SidebarBody
} from "./index.style";
import closeIcon from "../../assets/images/close.png";

class SettingsBar extends Component {
  constructor() {
    super();

    this.state = {
      newMessage: false,
      actionReminders: false
    };
  }

  switchChange = item => e => {
    this.setState({
      [item]: !this.state[item]
    });
  };

  render() {
    const { newMessage, actionReminders } = this.state;

    return (
      <SettingsBarContainer>
        <SidebarHeader>
          <div className="btn-close">
            <img src={closeIcon} alt="close" />
          </div>
          <p>Settings</p>
        </SidebarHeader>
        <SidebarBody>
          <div className="sidebar-tab">
            <div className="tab-label">
              <p>Notifications</p>
            </div>
            <div className="tab-body">
              <div className="tab-li d-flex justify-content-between">
                <p>New Message</p>
                <Switch
                  status={newMessage}
                  onClick={this.switchChange("newMessage")}
                />
              </div>
              <div className="tab-li d-flex justify-content-between">
                <p>Action Reminders</p>
                <Switch
                  status={actionReminders}
                  onClick={this.switchChange("actionReminders")}
                />
              </div>
            </div>
          </div>
          <div className="sidebar-tab">
            <div className="tab-label">
              <p>Care3</p>
            </div>
            <div className="tab-body">
              <div className="tab-li">
                <a href="/about">About Us</a>
              </div>
              <div className="tab-li">
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div className="tab-li">
                <a href="/terms-conditions">Terms and Conditions</a>
              </div>
            </div>
          </div>
        </SidebarBody>
      </SettingsBarContainer>
    );
  }
}

export default SettingsBar;
