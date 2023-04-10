import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "./style/header.css";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #b6b6b697;
  padding: 5px 30px;

  @media (max-width: 390px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #b6b6b697;
    padding-left: 10px;
    & > .Header_Logo_Image,
    span,
    a {
      display: none;
    }
  }
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  @media (max-width: 390px) {
    display: none;
  }
`;

interface Props {
  asideTabHandler: () => void;
}

export default function Header(props: Props) {
  const headerTabs = [
    { tabTitle: "추천순", linkUrl: "/toprank" },
    { tabTitle: "브랜드별", linkUrl: "/products" },
  ];

  const memberId = "1";

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <AiOutlineMenuUnfold
        className="Header_Menu_Button"
        onClick={() => props.asideTabHandler()}
      />
      <div className="Mobile_Logo_Wrapper">
        <img className="Header_Mobile_Logo_Image" />
      </div>
      <img className="Header_Logo_Image" onClick={() => navigate("/")} />
      {headerTabs.map((tab) => {
        return (
          <a
            key={tab.tabTitle}
            className="Header_Tab_Content"
            href={tab.linkUrl}
          >
            {tab.tabTitle}
          </a>
        );
      })}
      <div>
        {memberId ? (
          <div className="Header_Profile_Container">
            <ProfileImage src="https://w1.pngwing.com/pngs/348/1013/png-transparent-black-circle-user-symbol-login-user-profile-rim-black-and-white-line-thumbnail.png" />
            <span>닉네임이에요ㅋㅋ</span>
            <RxTriangleDown className="DropDown_Button" />
          </div>
        ) : (
          <div className="Header_Auth_Wrapper">
            <a className="Header_Tab_Content" href="auth/login">
              로그인
            </a>
            /
            <a className="Header_Tab_Content" href="auth/signup">
              회원가입
            </a>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}
