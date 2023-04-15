import { baseInstance } from "../instance";

export interface SignUpType {
  nickName: string;
  password: string;
}

export default async function registerUser(props: SignUpType) {
  const request = { nickName: props.nickName, password: props.password };
  try {
    const response = await baseInstance.post("/users", JSON.stringify(request));
    localStorage.setItem("memberId", response.data.id);
    return response.status
  } catch (error) {
    console.error(error);
  }
}
