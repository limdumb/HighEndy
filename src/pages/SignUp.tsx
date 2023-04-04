import styled from "styled-components";
import CommonInput from "../components/common/CommonInput";

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 625px;
  height: 670px;
  padding: 20px 10px;
  background-color: #ffffffcd;
  margin-bottom: 40px;
  border-radius: 10px;
  border: 1px solid 1px solid rgba(164, 164, 164, 0.153);
  justify-content: space-between;
  margin-top: 50px;
  box-shadow: 3px 2px 5px rgba(164, 164, 164, 0.153);
`;

export default function SignUp() {
  return (
    <AuthContent>
      <div>
        <h2>회원가입</h2>
      </div>
      <div>
        <CommonInput
          width="470px"
          height="34px"
          radius="3px"
          value={""}
          label={"닉네임"}
          onChange={() => {}}
          type={"text"}
          placeholder={""}
        />
      </div>
    </AuthContent>
  );
}
