interface LoginValue {
  nickName: string;
  memberId: number;
}

export const setLoginItem = (props: LoginValue) => {
  localStorage.setItem("memberId", `${props.memberId}`);
  localStorage.setItem("nickName", props.nickName);
};
