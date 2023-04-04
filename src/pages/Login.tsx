import CommonInput from "../components/common/CommonInput";
import { AuthContent } from "./SignUp";

export default function Login() {
  return (
    <AuthContent>
      <div>
        <h2>로그인</h2>
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
        <button>로그인</button>
      </div>
    </AuthContent>
  );
}
