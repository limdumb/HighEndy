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

  & > h1:nth-last-child(2) {
    margin-top: 20px;
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
      {memberId ? <h1>로그인/회원가입</h1> : null}
    </AsideContainer>
  );
}
