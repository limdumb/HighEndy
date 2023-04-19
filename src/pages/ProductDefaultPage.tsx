import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import { HomeContainer } from "./ProductList";
import "./style/productDefault.css";

interface Props {
  isActiveTab: boolean;
  onTabClicked: () => void;
  onCategoryChanged: (URLParams: string) => void;
}

export default function ProductDefaultPage(props: Props) {
  const memberId = localStorage.getItem("memberId");
  const [isClickCategory, setIsCategory] = useState(false);
  const navigate = useNavigate();

  const categoryClickHandler = (brand: string) => {
    setIsCategory(true);
    navigate(brand);
    localStorage.setItem("clickState", `${isClickCategory}`);
  };

  const clickStatus = localStorage.getItem("clickState");

  return (
    <HomeContainer>
      {props.isActiveTab ? (
        <div className="Menu_Active_Wrapper">
          <div className="Aside_Tab_Mobile_Wrapper">
            <AsideTab
              memberId={memberId}
              onCategoryChanged={props.onCategoryChanged}
              categoryClickHandler={categoryClickHandler}
              onTabClicked={props.onTabClicked}
            />
          </div>
        </div>
      ) : null}
      <div className="Aside_Tab_Wrapper">
        <AsideTab
          memberId={memberId}
          onCategoryChanged={props.onCategoryChanged}
          categoryClickHandler={categoryClickHandler}
          onTabClicked={props.onTabClicked}
        />
      </div>
      {clickStatus ? null : <TitleSection />}
      <Outlet />
    </HomeContainer>
  );
}
