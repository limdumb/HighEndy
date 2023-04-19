import { useEffect } from "react";
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
  categoryClickHandler: (brand: string) => void;
  onTabClicked: () => void;
  memberId?: string;
  onCategoryChanged: (URLParams: string) => void;
}

export default function AsideTab(props: Props) {
  const memberId = 1;
  const asideTabList = [
    { tabTitle: "Hermès", tabUrl: "/products/?brand=hermes" },
    { tabTitle: "Louis Vuitton", tabUrl: "/products/?brand=louisvuitton" },
    { tabTitle: "Burberry", tabUrl: "/products/?brand=burberry" },
    { tabTitle: "Chanel", tabUrl: "/products/?brand=chanel" },
    { tabTitle: "Prada", tabUrl: "/products/?brand=prada" },
    { tabTitle: "MIUMIU", tabUrl: "/products/?brand=miumiu" },
    { tabTitle: "Dior", tabUrl: "/products/?brand=dior" },
    { tabTitle: "Gucci", tabUrl: "/products/?brand=gucci" },
  ];

  useEffect(() => {
    const urlSearchObj = new URL(window.location.href);
    const urlParams = new URLSearchParams(urlSearchObj.search);
    const navigateParams = urlParams.get("brand");
    if (navigateParams !== null) {
      props.onCategoryChanged(navigateParams);
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
                props.categoryClickHandler(tab.tabUrl);
                const urlSearchObj = new URL(window.location.href);
                const urlParams = new URLSearchParams(urlSearchObj.search);
                const navigateParams = urlParams.get("brand");
                if (navigateParams !== null) {
                  props.onCategoryChanged(navigateParams);
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
      {memberId ? <h1>로그인/회원가입</h1> : null}
    </AsideContainer>
  );
}
