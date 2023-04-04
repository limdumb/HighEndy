import styled from "styled-components";
import AuthTab from "../components/AuthPage/AuthTab";

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 94.7vh;
`;

export default function AuthPage() {
  return (
    <AuthWrapper>
      <ul>
        <AuthTab />
      </ul>
    </AuthWrapper>
  );
}
