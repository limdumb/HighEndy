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
          <Link to={element.tabNavigate}>
            <li className="Auth_List" key={element.tabTitle}>{element.tabTitle}</li>
          </Link>
        );
      })}
    </>
  );
}
