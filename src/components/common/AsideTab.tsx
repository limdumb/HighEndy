import { useEffect } from "react";
import styled from "styled-components";
import logout from "../../API/auth/logout";
import { Link, useNavigate } from "react-router-dom";
import { onCategoryClicked } from "../../function/categoryFunc";
import trackQueryString from "../../function/trackQueryString";
import "./style/asideTab.css";

const AsideContainer = styled.aside`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 50px);
  height: 100%;
  width: 160px;
  border-right: 1px solid #aaaaaa;
  background-color: #ffffff;
  & > button {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
  }

  & > h1:last-child {
    display: none;
  }

  @media (max-width: 390px) {
    min-height: 100vh;
    padding-top: 0px;
    background-color: #fffffffe;

    & > h1 {
      margin-top: 20px;
    }

    & > h1:last-child {
      display: block;
    }
  }
`;

interface Props {
  onTabClicked: () => void;
  memberId: string | null;
  onCategoryChanged: (URLParams: string) => void;
  clickStatus: string | null;
  setClickStatus: React.Dispatch<React.SetStateAction<string | null>>
}

export default function AsideTab(props: Props) {
  const navigate = useNavigate();
  const asideTabList = [
    { tabTitle: "Hermès", tabUrl: "/products/?brand=hermes" },
    { tabTitle: "Louis Vuitton", tabUrl: "/products/?brand=louisvuitton" },
    { tabTitle: "Burberry", tabUrl: "/products/?brand=burberry" },
    { tabTitle: "Chanel", tabUrl: "/products/?brand=chanel" },
    { tabTitle: "Gucci", tabUrl: "/products/?brand=gucci" },
  ];

  useEffect(() => {
    const queryString = trackQueryString();
    if (queryString !== null) {
      props.onCategoryChanged(queryString);
    }
  }, []);

  return (
    <AsideContainer>
      <h1>제품 브랜드</h1>
      <div className="Brand_Tab_Container">
        {asideTabList.map((tab) => {
          return (
            <span
              key={tab.tabTitle}
              onClick={() => {
                navigate(tab.tabUrl)
                const queryString = trackQueryString();
                if (queryString !== null) {
                  props.onCategoryChanged(queryString);
                }
                props.onTabClicked();
              }}
            >
              {tab.tabTitle}
            </span>
          );
        })}
      </div>
      <Link
        to={"/toprank"}
        className="Top_Rank_Tab"
        onClick={() => props.onTabClicked()}
      >
        <h2>이달의 Top10</h2>
      </Link>
      <Link
        to={"/search"}
        className="Search_Nav_Tab"
        onClick={() => props.onTabClicked()}
      >
        <h2>상품 검색</h2>
      </Link>
      <div
        className={
          window.innerWidth <= 390 ? "Mobile_Auth_On" : "Mobile_Auth_Off"
        }
      >
        {!props.memberId ? (
          <div className="Mobile_Auth_Container">
            <a href="/auth/login">로그인/</a>
            <a href="/auth/signup">회원가입</a>
          </div>
        ) : (
          <div className="Mobile_Logout_Container">
            <button
              onClick={() => {
                logout();
                alert("로그아웃이 완료 되었습니다!");
                navigate("/products/?brand=hermes");
              }}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
    </AsideContainer>
  );
}
