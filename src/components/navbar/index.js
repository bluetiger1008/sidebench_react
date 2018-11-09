import React, { Component } from "react";
import { NavbarContainer, NavButton } from "./index.style";
import {
  cogIcon,
  conversationIcon,
  mylistIcon,
  profileIcon,
  logoIcon,
  logoutIcon
} from "../../assets/images/navIcons";

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <NavButton>
          <img src={logoIcon} alt="logo" />
        </NavButton>
        <NavButton>
          <img src={conversationIcon} alt="conversation" />
        </NavButton>
        <NavButton>
          <img src={mylistIcon} alt="my list" />
        </NavButton>
        <NavButton>
          <img src={profileIcon} alt="profile" />
        </NavButton>
        <NavButton className="active">
          <img src={cogIcon} alt="setting" />
        </NavButton>
        <NavButton className="btn-logout">
          <img src={logoutIcon} alt="log out" />
        </NavButton>
      </NavbarContainer>
    );
  }
}

export default Navbar;
