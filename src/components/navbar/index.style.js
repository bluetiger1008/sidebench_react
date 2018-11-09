import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
`;

export const MainNavBar = styled.div`
  background-color: ${props => props.theme.colors.fountainBlue};
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
    background-color: ${props => props.theme.colors.halfBaked};
  }

  &.btn-logout {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
