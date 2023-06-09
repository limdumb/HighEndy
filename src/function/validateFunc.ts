import { ChangeEvent } from "react";
import { SignUpType } from "../API/auth/signup";

export default function validateInputs(props: SignUpType) {
  const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!nicknameRegex.test(props.nickName))
    throw new Error("닉네임이 잘못 되었습니다!");
  if (!passwordRegex.test(props.password))
    throw new Error("비밀번호가 잘못 되었습니다.");
}

export const getOnlyNumbersRegex = (e: ChangeEvent<HTMLInputElement>) => {
  const regex = /^[0-9]*$/;
  return regex.test(e.target.value);
};

export const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Backspace" && e.key !== "Delete" && isNaN(Number(e.key))) {
    e.preventDefault();
  }
};