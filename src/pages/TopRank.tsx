import ProductCard from "../components/common/ProductCard";
import useFetch from "../components/customHook/useFetch";
import {
  HomeContainer,
  ProductListContainer,
  ProductListWrapper,
  ProductType,
} from "./ProductList";
import "./style/topRank.css";

export default function TopRank() {
  const productInitialValue: ProductType = {
    productList: [{ id: 0, productName: "", productImage: "" }],
  };
  const topRankProductData = useFetch<ProductType>(
    "/toprank",
    productInitialValue
  );

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
          {topRankProductData.data.productList.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productImage={product.productImage}
                productName={product.productName}
                productId={product.id}
              />
            );
          })}
        </ProductListWrapper>
      </ProductListContainer>
    </HomeContainer>
  );
}
