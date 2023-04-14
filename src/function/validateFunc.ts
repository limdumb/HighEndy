import { SignUpType } from "../API/auth/signup";

export default function validateInputs(props: SignUpType) {
  const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/; // 닉네임이 올바른 형식인지 확인하는 정규식
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 비밀번호가 올바른 형식인지 확인하는 정규식

  console.log(
    "In Validate Function Result = " + nicknameRegex.test(props.nickName)
  );
  if (!nicknameRegex.test(props.nickName)) {
    return "nickName False";
  } else if (!passwordRegex.test(props.password)) {
    return "password False";
  } else {
    return true;
  }
}
