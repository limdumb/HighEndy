import { baseInstance } from "../instance";

export interface SignUpType {
  nickName: string;
  password: string;
}

export default function registerUser(props: SignUpType) {
  const request = { nickName: props.nickName, password: props.password };
  try {
    baseInstance.post(JSON.stringify(request));
  } catch (error) {
    console.error(error);
  }
}
