import { AxiosResponse } from "axios";
import { baseInstance } from "../instance";

interface UserDataType {
  id: number;
  nickName: string;
  password: string;
}

export default async function getUser(
  memberId: string | null
): Promise<AxiosResponse<UserDataType>> {
  try {
    const response = await baseInstance.get(`/users?id=${memberId}`);
    return response;
  } catch (err) {
    throw err;
  }
}
