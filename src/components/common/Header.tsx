import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import "./style/header.css";
import { useState } from "react";
import logout from "../../API/auth/logout";

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

const DropDownBox = styled.div`
  position: fixed;
  top: 49px;
  right: 41px;
  z-index: 10;
  width: 80px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;

  @media(max-width: 390px){
    display: none;
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
  onTabClicked: () => void;
  isActiveTab: boolean;
}

export default function Header(props: Props) {
  const [isDropDown, setIsDropDown] = useState(false);

  const opDropDownCheckd = () => {
    setIsDropDown(!isDropDown);
  };

  const headerTabs = [
    { tabTitle: "추천순", linkUrl: "/toprank" },
    { tabTitle: "브랜드별", linkUrl: "/products" },
  ];

  const memberId = localStorage.getItem("memberId");

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {props.isActiveTab ? (
        <AiOutlineMenuFold
          className="Header_Menu_Button"
          onClick={() => props.onTabClicked()}
        />
      ) : (
        <AiOutlineMenuUnfold
          className="Header_Menu_Button"
          onClick={() => props.onTabClicked()}
        />
      )}
      <div className="Mobile_Logo_Wrapper">
        <img
          className="Header_Mobile_Logo_Image"
          onClick={() => navigate("/")}
        />
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
            <RxTriangleDown
              className="DropDown_Button"
              onClick={() => {
                opDropDownCheckd();
              }}
            />
            {isDropDown ? (
              <DropDownBox onClick={()=>{
                logout()
                alert("로그아웃이 완료 되었습니다!")
                navigate("/products/?brand=hermes")
              }}>
                <span>로그아웃</span>
              </DropDownBox>
            ) : null}
          </div>
        ) : (
          <div className="Header_Auth_Wrapper">
            <a className="Header_Tab_Content" href="/auth/login">
              로그인
            </a>
            /
            <a className="Header_Tab_Content" href="/auth/signup">
              회원가입
            </a>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}
