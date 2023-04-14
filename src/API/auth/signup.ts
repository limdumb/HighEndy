import { baseInstance } from "../instance";

interface SignUpType {
  nickName: string;
  password: string;
}

export default function signup(props: SignUpType) {
  const request = { nickName: props.nickName, password: props.password };
  try {
    baseInstance.post(JSON.stringify(request));
  } catch (error) {
    console.error(error)
  }
}
