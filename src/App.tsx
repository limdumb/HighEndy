import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import TopRank from "./pages/TopRank";
import styled from "styled-components";
import AuthPage from "./pages/AuthPage";
import Header from "./components/common/Header";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDefaultPage from "./pages/ProductDefaultPage";
import { useEffect, useState } from "react";
import "./App.css";

const RootContainer = styled.div`
  height: 100%;
  margin: 0 auto;
`;

export default function App() {
  const [isActiveTab, setIstActiveTab] = useState(false);
  const [activeCategoryName, setActiveCategoryName] = useState(
    localStorage.getItem("category")
  );
  const onTabClicked = () => {
    if (window.innerWidth <= 390) {
      setIstActiveTab(!isActiveTab);
    }
  };

  const onCategoryChanged = (category: string) => {
    localStorage.setItem("category", category);
    setActiveCategoryName(category);
  };

  return (
    <BrowserRouter>
      <Header
        activeCategoryName={activeCategoryName}
        onCategoryChanged={onCategoryChanged}
        onTabClicked={onTabClicked}
        isActiveTab={isActiveTab}
      />
      <RootContainer>
        <Routes>
          <Route
            path="/"
            element={
              <ProductDefaultPage
                onCategoryChanged={onCategoryChanged}
                isActiveTab={isActiveTab}
                onTabClicked={onTabClicked}
              />
            }
          >
            <Route
              path="products"
              element={
                <ProductList
                  activeCategoryName={activeCategoryName}
                  isActiveTab={false}
                />
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
