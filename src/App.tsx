import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import TopRank from "./pages/TopRank";
import AuthPage from "./pages/AuthPage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route>
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
