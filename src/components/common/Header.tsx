import styled from "styled-components";
import logout from "../../API/auth/logout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
import getUser, { UserDataType } from "../../API/user/getUser";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import HighEndyLogo from "./HighEndyLogo";
import "./style/header.css";

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid #b6b6b697;
  padding: 5px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 390px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #b6b6b697;
    padding-left: 10px;
    & > .Mobile_Logo_Wrapper,
    a {
      display: none;
    }
  }
`;

const DropDownBox = styled.div`
  position: fixed;
  top: 39px;
  right: 41px;
  z-index: 10;
  width: 80px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 390px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  @media (max-width: 390px) {
    display: none;
  }
`;

interface Props {
  onTabClicked: () => void;
  isActiveTab: boolean;
  memberId: string | null;
}

export default function Header(props: Props) {
  const navigate = useNavigate();
  const [isDropDown, setIsDropDown] = useState(false);
  const [user, setUser] = useState<UserDataType>({
    id: 0,
    nickName: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUser(props.memberId);
      if (response) {
        setUser(response);
      }
    };
    if (props.memberId !== null) {
      fetchUserInfo();
    }
  }, []);

  const opDropDownCheckd = () => {
    setIsDropDown(!isDropDown);
  };

  const headerTabs = [
    { tabTitle: "추천순", linkUrl: "/products/toprank" },
    { tabTitle: "브랜드별", linkUrl: "/products/?brand=hermes" },
  ];

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
      <div
        className="Mobile_Logo_Wrapper"
        onClick={() => {
          navigate("/");
        }}
      >
        <HighEndyLogo />
      </div>
      <div
        className="Header_Logo_Wrapper"
        onClick={() => {
          navigate("/");
        }}
      >
        <HighEndyLogo />
      </div>
      {headerTabs.map((tab) => {
        return (
          <div key={tab.tabTitle} className="Header_Tab_Wrapper">
            <a className="Header_Tab_Content" href={tab.linkUrl}>
              {tab.tabTitle}
            </a>
          </div>
        );
      })}
      <div>
        {props.memberId !== null ? (
          <div className="Header_Profile_Container">
            <ProfileImage src="https://w1.pngwing.com/pngs/348/1013/png-transparent-black-circle-user-symbol-login-user-profile-rim-black-and-white-line-thumbnail.png" />
            <span>{user.nickName}</span>
            <RxTriangleDown
              className="DropDown_Button"
              onClick={() => {
                opDropDownCheckd();
              }}
            />
            {isDropDown ? (
              <DropDownBox
                onClick={() => {
                  logout();
                  alert("로그아웃이 완료 되었습니다!");
                  setIsDropDown(false);
                  navigate("/");
                  window.location.reload();
                }}
              >
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
