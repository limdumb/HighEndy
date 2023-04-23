import { baseInstance } from "../instance";

export interface UserDataType {
  id: number;
  nickName: string;
}

export default async function getUser(
  memberId: string | null
): Promise<UserDataType> {
  try {
    const response = await baseInstance.get(`/users?id=${memberId}`);
    const result: UserDataType = {
      id: response.data[0].id,
      nickName: response.data[0].nickName,
    };
    return result;
  } catch (err) {
    throw err;
  }
}
