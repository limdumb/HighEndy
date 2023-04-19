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
  const navigate = useNavigate();

  const categoryClickHandler = (brand: string) => {
    navigate(brand);
    localStorage.setItem("clickState", "true");
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
      {clickStatus === "true" ? null : <TitleSection />}
      <Outlet />
    </HomeContainer>
  );
}
