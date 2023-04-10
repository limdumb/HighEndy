import { Link } from "react-router-dom";
import styled from "styled-components";
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
    padding-top: 0px;
    background-color: rgba(217, 217, 217, 45%);

    & > h1 {
      margin-top: 20px;
    }

    & > h1,
    button {
      background-color: rgba(217, 217, 217, 45%);
    }

    & > h1:last-child {
      display: block;
    }
  }
`;

export default function AsideTab() {
  const memberId = 1; // 추후 로그인 정보가 들어올 예정
  const asideTabList = [
    { tabTitle: "Hermès", tabUrl: "/?brand=hermes" },
    { tabTitle: "Louis Vuitton", tabUrl: "/?brand=louisvuitton" },
    { tabTitle: "Burberry", tabUrl: "/?brand=burberry" },
    { tabTitle: "Chanel", tabUrl: "/?brand=chanel" },
    { tabTitle: "Prada", tabUrl: "/?brand=prada" },
    { tabTitle: "MIUMIU", tabUrl: "/?brand=miumiu" },
    { tabTitle: "Dior", tabUrl: "/?brand=dior" },
    { tabTitle: "Gucci", tabUrl: "/?brand=gucci" },
  ];

  return (
    <AsideContainer>
      <h1>제품 브랜드</h1>
      <div className="Brand_Tab_Container">
        {asideTabList.map((tab) => {
          return (
            <Link key={tab.tabTitle} to={tab.tabUrl}>
              <span>{tab.tabTitle}</span>
            </Link>
          );
        })}
      </div>
      <Link to={"/toprank"} className="Top_Rank_Tab">
        <h2>이달의 Top10</h2>
      </Link>
      {memberId ? <h1>로그인/회원가입</h1> : null}
    </AsideContainer>
  );
}
