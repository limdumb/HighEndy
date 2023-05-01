import { Outlet } from "react-router-dom";
import { HomeContainer } from "./ProductList";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import "./style/productDefault.css";


interface Props {
  isActiveTab: boolean;
  onTabClicked: () => void;
  onCategoryChanged: (URLParams: string) => void;
}

export default function ProductDefaultPage(props: Props) {
  const memberId = localStorage.getItem("memberId");

  return (
    <HomeContainer>
      <div className="Aside_Tab_Wrapper">
        <AsideTab
          memberId={memberId}
          onCategoryChanged={props.onCategoryChanged}
          onTabClicked={props.onTabClicked}
        />
      </div>
      <Outlet />
    </HomeContainer>
  );
}

