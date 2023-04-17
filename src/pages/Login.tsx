import { ChangeEvent, useState } from "react";
import CommonInput from "../components/common/CommonInput";
import CustomButton from "../components/common/CustomButton";
import { AuthContent } from "./SignUp";

export default function Login() {
  const [loginValue, setLoginValue] = useState({
    nickName: "",
    password: "",
  });

  const onLoginValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginValue(() => ({
      ...loginValue,
      [e.target.name]: e.target.value,
    }));
  };

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
          name="nickName"
          value={loginValue.nickName}
          label={"닉네임"}
          onChange={(e) => {
            onLoginValueChanged(e);
          }}
          type={"text"}
          placeholder={"닉네임을 입력해주세요"}
        />
        <CommonInput
          width={window.innerWidth <= 390 ? "320px" : "490px"}
          height="34px"
          radius="3px"
          name="password"
          value={loginValue.password}
          label={"비밀번호"}
          onChange={(e) => {
            onLoginValueChanged(e);
          }}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
        />
      </div>
      <div className="SignUp_Button_Wrapper">
        <CustomButton width={"120px"} height={"41px"} contents={"로그인"} />
      </div>
    </AuthContent>
  );
}
