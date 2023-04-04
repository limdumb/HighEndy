import styled from "styled-components";
import CommonInput from "../components/common/CommonInput";
import "./style/signup.css";

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
  margin-top: 50px;
  box-shadow: 3px 2px 5px rgba(164, 164, 164, 0.153);

  @media (max-width: 390px) {
    width: 360px;
  }
`;

export default function SignUp() {
  return (
    <AuthContent>
      <div>
        <h2>회원가입</h2>
      </div>
      <div className="Input_Wrapper">
        <CommonInput
          width={window.innerWidth <= 390 ? "320px" : "490px"}
          height="34px"
          radius="3px"
          value={""}
          label={"닉네임"}
          onChange={() => {}}
          type={"text"}
          placeholder={""}
        />
        <CommonInput
          width={window.innerWidth <= 390 ? "320px" : "490px"}
          height="34px"
          radius="3px"
          value={""}
          label={"비밀번호"}
          onChange={() => {}}
          type={"password"}
          placeholder={""}
        />
      </div>
      <div className="SignUp_Button_Wrapper">
        {/* 추후 공용 Button으로 변경 예정 */}
        <button>회원가입</button>
      </div>
    </AuthContent>
  );
}
