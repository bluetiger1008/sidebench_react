import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${props => props.theme.fountainBlue};
  width: 80px;
  height: 100vh;
  position: relative;
`;

export const NavButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;

  &:hover,
  &.active {
    background-color: ${props => props.theme.halfBaked};
  }

  &.btn-logout {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
