import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../API/auth/login";
import CommonInput from "../components/common/CommonInput";
import CustomButton from "../components/common/CustomButton";
import { AuthContent } from "./SignUp";

export default function Login() {
  const navigate = useNavigate();
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
        <div className="Input_Container">
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
          <span>닉네임은 특수문자 미포함 2글자 이상입니다.</span>
        </div>
        <div className="Input_Container">
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
          <span>비밀번호는 특수문자 미포함 8자 이상입니다.</span>
        </div>
      </div>
      <div className="SignUp_Button_Wrapper">
        <CustomButton
          width={"120px"}
          height={"41px"}
          contents={"로그인"}
          onClick={async () => {
            const loginResult = await login({ nickName: loginValue.nickName });
            if (
              loginResult.data.length !== 0 &&
              loginResult.data[0].nickName === loginValue.nickName &&
              loginResult.data[0].password === loginValue.password
            ) {
              localStorage.setItem("memberId", loginResult.data.id);
              alert("로그인이 완료 되었습니다!");
              navigate("/products/?brand=hermes");
            } else {
              alert("로그인 정보가 잘못 되었습니다.");
            }
          }}
        />
      </div>
    </AuthContent>
  );
}
