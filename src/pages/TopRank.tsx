import ProductCard from "../components/common/ProductCard";
import {
  HomeContainer,
  ProductListContainer,
  ProductListWrapper,
} from "./ProductList";
import "./style/topRank.css";

export default function TopRank() {
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
  ];

  return (
    <HomeContainer>
      <ProductListContainer>
        <div className="Top_Rank_Container">
          <h2>이달의 Top 10 제품</h2>
        </div>
        <ProductListWrapper>
          {test.map((el) => {
            // 추후 리팩토링 예정
            return <ProductCard key={el} productImage={el} productName={el} productId={0} />;
          })}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
