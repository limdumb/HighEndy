import styled from "styled-components";
import { RxTriangleDown } from "react-icons/rx";
import "./style/header.css";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #b6b6b697;
  padding: 5px 30px;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 25px;
`;

export default function Header() {
  const headerTabs = [
    { tabTitle: "추천순", linkUrl: "/toprank" },
    { tabTitle: "브랜드별", linkUrl: "/" },
  ];

  const memberId = "1";

  return (
    <HeaderContainer>
      <img className="Header_Logo_Image" />
      {headerTabs.map((tab) => {
        return (
          <a className="Header_Tab_Content" href={tab.linkUrl}>
            {tab.tabTitle}
          </a>
        );
      })}
      <div>
        {!memberId ? (
          <>
            <a className="Header_Tab_Content" href="auth/login">
              로그인
            </a>
            /
            <a className="Header_Tab_Content" href="auth/signup">
              회원가입
            </a>
          </>
        ) : (
          <div className="Header_Profile_Container">
            <ProfileImage src="https://w1.pngwing.com/pngs/348/1013/png-transparent-black-circle-user-symbol-login-user-profile-rim-black-and-white-line-thumbnail.png" />
            <span>닉네임이에요ㅋㅋ</span>
            <RxTriangleDown className="DropDown_Button" />
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}
