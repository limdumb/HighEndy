import { baseInstance } from "../instance";

interface Props {
  nickName:string
}

export default async function login(props: Props) {
  // JSON Server Filter 문자열은 인코딩되어서 사용해야하여 변환코드 생성
  const encodeValue = encodeURIComponent(props.nickName)
  try {
    // mock Server 프로젝트 진행으로 Login은 Get Data로 진행
    const response = await baseInstance.get(`/users?id=${encodeValue}`);
    if (response.data.length !== 0) {
      localStorage.setItem("memberId", response.data.id);
    }
  } catch (err) {
    console.error(err);
  }
}
