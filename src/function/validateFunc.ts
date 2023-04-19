import { SignUpType } from "../API/auth/signup";

export default function validateInputs(props: SignUpType) {
  const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!nicknameRegex.test(props.nickName))
    throw new Error("닉네임이 잘못 되었습니다!");
  if (!passwordRegex.test(props.password))
    throw new Error("비밀번호가 잘못 되었습니다.");
}
