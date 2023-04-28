import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import login from "../API/auth/login";
import registerUser from "../API/auth/signup";
import CommonInput from "../components/common/CommonInput";
import CustomButton from "../components/common/CustomButton";
import validateInputs from "../function/validateFunc";
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
    height: 570px;
  }
`;

export default function SignUp() {
  const navigate = useNavigate();
  const [signUpValue, setSignUpValue] = useState({
    nickName: "",
    password: "",
  });

  const onSignUpValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpValue(() => ({
      ...signUpValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onValidateChecked = (validateResult: string) => {
    return alert(`${validateResult}`);
  };

  return (
    <AuthContent>
      <div>
        <h2>회원가입</h2>
      </div>
      <div className="Input_Wrapper">
        <div className="Input_Container">
          <CommonInput
            width={window.innerWidth <= 390 ? "320px" : "490px"}
            name="nickName"
            height="34px"
            radius="3px"
            value={signUpValue.nickName}
            label={"닉네임"}
            onChange={(e) => {
              onSignUpValueChanged(e);
            }}
            type={"text"}
            placeholder={"닉네임을 입력해주세요"}
          />
          <span>
            닉네임은 영문또는 한글로조합된 2자리이상 8자리이하 입니다.(특수문자
            비포함)
          </span>
        </div>
        <div className="Input_Container">
          <CommonInput
            width={window.innerWidth <= 390 ? "320px" : "490px"}
            height="34px"
            name="password"
            radius="3px"
            value={signUpValue.password}
            label={"비밀번호"}
            onChange={(e) => {
              onSignUpValueChanged(e);
            }}
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
          />
          <span>
            비밀번호는 영문,숫자 포함 8자리 이상입니다. (특수문자 비포함)
          </span>
        </div>
      </div>
      <div className="SignUp_Button_Wrapper">
        <CustomButton
          width={"120px"}
          height={"41px"}
          contents={"회원가입"}
          onClick={async () => {
            try {
              validateInputs({
                nickName: signUpValue.nickName,
                password: signUpValue.password,
              });
              const signUpResult = await registerUser({
                nickName: signUpValue.nickName,
                password: signUpValue.password,
              });
              if (signUpResult === 201) {
                alert("회원가입이 완료 되었습니다");
                login({
                  nickName: signUpValue.nickName
                })
                navigate("/");
              }
            } catch (error) {
              if (error instanceof Error) {
                onValidateChecked(error.message);
              } else {
                onValidateChecked("알 수없는 오류가 발생 하였습니다.");
              }
            }
          }}
        />
      </div>
    </AuthContent>
  );
}
