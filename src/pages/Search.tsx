import ProductCard from "../components/common/ProductCard";
import { RiSearchLine } from "react-icons/ri";
import {
  HomeContainer,
  ProductListContainer,
  ProductListWrapper,
  ProductType,
} from "./ProductList";
import "./style/search.css";
import { ChangeEvent, useState } from "react";
import useFetch from "../components/customHook/useFetch";
export default function Search() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const productInitialValue: ProductType[] = [
    { id: 0, productName: "", productImage: "" },
  ];

  const searchResultData = useFetch<Array<ProductType>>(
    `products?productName_like=${searchValue}`,
    productInitialValue
  );

  const onSearched = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (searchValue.length !== 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  return (
    <HomeContainer>
      <ProductListContainer>
        <div className="Search_Input_Container">
          <RiSearchLine className="Search_Icon" />
          <input
            defaultValue={searchValue}
            onChange={(e) => onSearched(e)}
            type={"text"}
            className="Search_Input"
            placeholder="검색어를 입력하세요."
          />
        </div>
        {isSearch && searchValue.length !== 0 ? (
          <>
            <div className="Search_Result_Info">
              <span>
                "{searchValue}" 에 대한 {searchResultData.data.length}개의
                제품정보 입니다.
              </span>
            </div>
            <ProductListWrapper>
              {searchResultData.data.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImage={product.productImage}
                    productName={product.productName}
                  />
                );
              })}
            </ProductListWrapper>
          </>
        ) : null}
      </ProductListContainer>
    </HomeContainer>
  );
}
