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
import "./App.css";

const RootContainer = styled.div`
  height: 100%;
  margin: 0 auto;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RootContainer>
        <Routes>
          <Route path="/" element={<ProductDefaultPage />}>
            <Route path="products" element={<ProductList />} />
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
