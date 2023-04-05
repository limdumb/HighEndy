import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AuthTab from "../components/AuthPage/AuthTab";
import "./style/authPage.css";

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 94.7vh;
`;

export default function AuthPage() {
  return (
    <AuthWrapper>
      <div>
        <ul className="Auth_Tab_Wrapper">
          <AuthTab />
        </ul>
      </div>
      <Outlet />
    </AuthWrapper>
  );
}
