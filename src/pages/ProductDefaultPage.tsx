import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import { HomeContainer } from "./ProductList";
import "./style/productDefault.css";

interface Props {
  onCategoryChanged: (category: string) => void;
  isActiveTab: boolean;
  onTabClicked: () => void;
}

export default function ProductDefaultPage(props: Props) {
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
              onCategoryChanged={props.onCategoryChanged}
              categoryClickHandler={categoryClickHandler}
              onTabClicked={props.onTabClicked}
            />
          </div>
        </div>
      ) : null}
      <div className="Aside_Tab_Wrapper">
        <AsideTab
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
