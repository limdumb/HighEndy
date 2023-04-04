export default function AuthTab() {
  const authTabArray = ["로그인", "회원가입"];
  return (
    <>
      {authTabArray.map((element) => {
        return <li key={element}>{element}</li>;
      })}
    </>
  );
}
