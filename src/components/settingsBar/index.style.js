import styled from "styled-components";

export const SettingsBarContainer = styled.div`
  width: 380px;
  height: 100vh;
  background: white;
`;

export const SidebarHeader = styled.div`
  height: 74px;
  background-color: ${props => props.theme.colors.silverChalice};
  display: flex;
  align-items: center;
  padding-left: 28px;

  .btn-close {
    margin-right: 18px;
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 35px;
    color: white;
  }
`;

export const SidebarBody = styled.div`
  p {
    margin: 0;
  }

  .sidebar-tab {
    .tab-label {
      height: 46px;
      background-color: ${props => props.theme.colors.desertStorm};
      display: flex;
      align-items: center;
      padding-left: 10px;

      p {
        text-transform: uppercase;
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.colors.corduroy};
      }
    }

    .tab-body {
      padding-left: 39px;
      padding-right: 13px;

      .tab-li {
        height: 70px;
        display: flex;
        align-items: center;
        border-bottom: 3px solid ${props => props.theme.colors.desertStorm};
        font-size: 16px;
        line-height: 35px;
        font-family: "Gotham Book";

        a {
          color: ${props => props.theme.colors.fountainBlue};
          text-decoration: none;
        }

        p {
          color: ${props => props.theme.colors.tundora};
        }
      }
    }
  }
`;
