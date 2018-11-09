import React from "react";
import styled from "styled-components";

import toggleOnIcon from "../../assets/images/toggle_on.png";
import toggleOffIcon from "../../assets/images/toggle_off.png";

const SwitchWrapper = styled.div`
  cursor: pointer;
  img {
    width: 48px;
    height: 31px;
  }
`;

const Switch = ({ status, onClick }) => {
  return (
    <SwitchWrapper onClick={onClick}>
      {status ? (
        <img src={toggleOnIcon} alt="toggle_on" />
      ) : (
        <img src={toggleOffIcon} alt="toggle_off" />
      )}
    </SwitchWrapper>
  );
};

export default Switch;
