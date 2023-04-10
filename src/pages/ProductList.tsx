import styled from "styled-components";
import AsideTab from "../components/common/AsideTab";
import ProductCard from "../components/common/ProductCard";
import TitleSection from "../components/common/TitleSection";

export const HomeContainer = styled.div`
  display: flex;
  @media (max-width: 390px) {
    & > .Aside_Tab_Wrapper {
      display: none;
    }
  }
`;

export const ProductListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 160px);
  padding-top: 20px;
  padding-bottom: 20px;
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

export default function ProductList() {
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
      <div className="Aside_Tab_Wrapper">
        <AsideTab />
      </div>
      <ProductListContainer>
        <h2>Gucci</h2>
        <ProductListWrapper>
          {test.map((el) => {
            return <ProductCard key={el} productImage={el} productName={el} />;
          })}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
