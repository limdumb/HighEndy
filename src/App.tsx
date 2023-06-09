import Home from "./pages/Home";
import { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import TopRank from "./pages/TopRank";
import styled from "styled-components";
import AuthPage from "./pages/AuthPage";
import ProductList from "./pages/ProductList";
import Header from "./components/common/Header";
import ProductDetail from "./pages/ProductDetail";
import AsideTab from "./components/common/AsideTab";
import { getMemberId } from "./function/getUserData";
import ProductDefaultPage from "./pages/ProductDefaultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const RootContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  margin-top: 40px;
`;

export default function App() {
  const [isActiveTab, setIstActiveTab] = useState(false);
  const [activeBrand, setActiveBrand] = useState("");

  const memberId = getMemberId()

  const onTabClicked = () => {
    if (window.innerWidth <= 390) {
      setIstActiveTab(!isActiveTab);
    }
  };

  const onCategoryChanged = (URLParams: string) => {
    switch (URLParams) {
      case "hermes":
        setActiveBrand("Hermès");
        break;
      case "louisvuitton":
        setActiveBrand("Louis Vuitton");
        break;
      case "burberry":
        setActiveBrand("Burberry");
        break;
      case "chanel":
        setActiveBrand("Chanel");
        break;
      case "gucci":
        setActiveBrand("Gucci");
        break;
    }
  };

  return (
    <BrowserRouter>
      <>
          <Header
            onTabClicked={onTabClicked}
            isActiveTab={isActiveTab}
            memberId={memberId}
          />
        {isActiveTab ? (
          <div className="Menu_Active_Wrapper">
            <div className="Aside_Tab_Mobile_Wrapper">
              <AsideTab
                memberId={memberId}
                onCategoryChanged={onCategoryChanged}
                onTabClicked={onTabClicked}
              />
            </div>
          </div>
        ) : null}
      </>
      <RootContainer>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route
            path="/products"
            element={
              <ProductDefaultPage
                onCategoryChanged={onCategoryChanged}
                isActiveTab={isActiveTab}
                onTabClicked={onTabClicked}
              />
            }
          >
            <Route
              path=""
              element={
                <ProductList isActiveTab={false} activeBrand={activeBrand} />
              }
            />
            <Route path="search" element={<Search />} />
            <Route path="toprank" element={<TopRank />} />
          </Route>
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="auth" element={<AuthPage />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </RootContainer>
    </BrowserRouter>
  );
}
