import { SignUpType } from "../API/auth/signup";

export default function validateInputs(props: SignUpType) {
  const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!nicknameRegex.test(props.nickName)) {
    return "nickName False";
  } else if (!passwordRegex.test(props.password)) {
    return "password False";
  } else {
    return true;
  }
}