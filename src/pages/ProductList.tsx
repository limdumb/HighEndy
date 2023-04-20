import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/common/ProductCard";
import useFetch from "../components/customHook/useFetch";

export const HomeContainer = styled.div`
  display: flex;
`;

export const ProductListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  & > .Product_List_Title {
    width: 81%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3em;
  gap: 3em 12.5%;
`;

interface Props {
  isActiveTab: boolean;
  activeBrand: string;
}

interface ProductType {
  productList: {
    productId: number;
    productName: string;
    productImage: string;
  }[];
}

export default function ProductList(props: Props) {
  const urlSearchObj = new URL(window.location.href);
  const urlParams = new URLSearchParams(urlSearchObj.search);
  const navigateParams = urlParams.get("brand");
  const productInitialValue: ProductType = {
    productList: [{ productId: 0, productName: "", productImage: "" }],
  };
  const getProductList = useFetch<ProductType>(
    `/${navigateParams}`,
    productInitialValue
  );

  console.log(getProductList);
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
        <div className="Product_List_Title">
          <h2>{props.activeBrand}</h2>
        </div>
        <ProductListWrapper>
          {!getProductList.loading ? (
            getProductList.data.productList.map((el) => {
              return (
                <ProductCard
                  key={el.productId}
                  productImage={el.productImage}
                  productName={el.productName}
                />
              );
            })
          ) : (
            <div>로딩중..</div>
          )}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
