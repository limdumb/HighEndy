import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import { HomeContainer } from "./ProductList";
import "./style/asideDetaile.css";

interface Props {
  isActiveTab: boolean;
  asideTabHandler: () => void;
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
        <div className="Aside_Tab_Wrapper">
          <AsideTab
            categoryClickHandler={categoryClickHandler}
            asideTabHandler={props.asideTabHandler}
          />
        </div>
      ) : null}
      {/* Main Page에 대한 부분은 좀더 구상해볼 예정 */}
      {/* {isClickCategory ? null : <TitleSection />} */}
      <Outlet />
    </HomeContainer>
  );
}
