import { Outlet } from "react-router-dom";
import { HomeContainer } from "./ProductList";
import AsideTab from "../components/common/AsideTab";
import TitleSection from "../components/common/TitleSection";
import "./style/productDefault.css";


interface Props {
  isActiveTab: boolean;
  onTabClicked: () => void;
  onCategoryChanged: (URLParams: string) => void;
  setClickStatus: React.Dispatch<React.SetStateAction<string | null>>
  clickStatus: string | null
}

export default function ProductDefaultPage(props: Props) {
  const memberId = localStorage.getItem("memberId");

  return (
    <HomeContainer>
      <div className="Aside_Tab_Wrapper">
        <AsideTab
          setClickStatus={props.setClickStatus}
          clickStatus={props.clickStatus}
          memberId={memberId}
          onCategoryChanged={props.onCategoryChanged}
          onTabClicked={props.onTabClicked}
        />
      </div>
      {props.clickStatus === "true" ? null : <TitleSection />}
      <Outlet />
    </HomeContainer>
  );
}
