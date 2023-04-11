import AsideTab from "../components/common/AsideTab";
import ProductCard from "../components/common/ProductCard";
import { RiSearchLine } from "react-icons/ri";
import {
  HomeContainer,
  ProductListContainer,
  ProductListWrapper,
} from "./ProductList";
import "./style/search.css";
import { useState } from "react";
export default function Search() {
  const [isSearch, setIsSearch] = useState(false);

  const test = [
    "1번상품",
    "2번상품",
    "3번상품",
    "4번상품",
    "5번상품",
    "6번상품",
    "7번상품",
    "8번상품",
    "9번상품",
    "10번상품",
    "11번상품",
    "12번상품",
  ];

  return (
    <HomeContainer>
      <ProductListContainer>
        <div className="Search_Input_Container">
          <RiSearchLine className="Search_Icon" />
          <input
            type={"text"}
            className="Search_Input"
            placeholder="검색어를 입력하세요."
          />
        </div>
        {isSearch ? (
          <div className="Search_Result_Info">
            <span>"검색어"에 대한 16개의 제품정보 입니다.</span>
          </div>
        ) : null}
        <ProductListWrapper>
          {test.map((el) => {
            return <ProductCard key={el} productImage={el} productName={el} />;
          })}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
