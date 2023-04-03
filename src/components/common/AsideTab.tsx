import styled from "styled-components";

const AsideContainer = styled.aside`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default function AsideTab() {
  const asideTabList = [
    { tabTitle: "Hermès" },
    { tabTitle: "Louis Vuitton" },
    { tabTitle: "Burberry" },
    { tabTitle: "Chanel" },
    { tabTitle: "Prada" },
    { tabTitle: "MIUMIU" },
    { tabTitle: "Dior" },
    { tabTitle: "Gucci" },
  ];
  return (
    <AsideContainer>
      <h1>제품 브랜드</h1>
      {asideTabList.map((tab) => {
        return <button key={tab.tabTitle}>{tab.tabTitle}</button>;
      })}
      <h1>이달의 Top 10</h1>
    </AsideContainer>
  );
}
