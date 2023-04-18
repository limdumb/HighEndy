import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/common/ProductCard";

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

export default function ProductList(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

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
          {test.map((el) => {
            return <ProductCard key={el} productImage={el} productName={el} />;
          })}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
