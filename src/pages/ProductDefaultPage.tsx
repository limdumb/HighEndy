import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import { HomeContainer } from "./ProductList";
import "./style/productDefault.css";

interface Props {
  isActiveTab: boolean;
  onTabClicked: () => void;
}

export default function ProductDefaultPage(props: Props) {
  const [isClickCategory, setIsCategory] = useState(false);
  const navigate = useNavigate();

  const categoryClickHandler = (brand: string) => {
    setIsCategory(true);
    navigate(brand);
  };

  return (
    <HomeContainer>
      {props.isActiveTab ? (
        <div className="Menu_Active_Wrapper">
          <div className="Aside_Tab_Mobile_Wrapper">
            <AsideTab
              categoryClickHandler={categoryClickHandler}
              onTabClicked={props.onTabClicked}
            />
          </div>
        </div>
      ) : null}
      <div className="Aside_Tab_Wrapper">
        <AsideTab
          categoryClickHandler={categoryClickHandler}
          onTabClicked={props.onTabClicked}
        />
      </div>
      {/* Main Page에 대한 부분은 좀더 구상해볼 예정 */}
      {/* {isClickCategory ? null : <TitleSection />} */}
      <Outlet />
    </HomeContainer>
  );
}
