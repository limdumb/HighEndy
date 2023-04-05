import { Link } from "react-router-dom";
import "./style/authTab.css"

export default function AuthTab() {
  const authTabArray = [
    {
      tabTitle: "로그인",
      tabNavigate: "/auth/login",
    },
    {
      tabTitle: "회원가입",
      tabNavigate: "/auth/signup",
    },
  ];
  return (
    <>
      {authTabArray.map((element) => {
        return (
          <Link key={element.tabTitle} to={element.tabNavigate}>
            <li className="Auth_List">{element.tabTitle}</li>
          </Link>
        );
      })}
    </>
  );
}
