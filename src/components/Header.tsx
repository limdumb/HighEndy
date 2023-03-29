import styled from "styled-components";
import "./style/header.css";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #b6b6b697;
  padding: 5px 30px;
`;
export default function Header() {
  const headerTabs = [
    { tabTitle: "추천순", linkUrl: "" },
    { tabTitle: "브랜드별", linkUrl: "" },
    { tabTitle: "로그인/회원가입", linkUrl: "" },
  ];
  return (
    <HeaderContainer>
      <img className="Header_Logo_Image" />
      {headerTabs.map((tab) => {
        return <a href={tab.linkUrl}>{tab.tabTitle}</a>;
      })}
    </HeaderContainer>
  );
}
