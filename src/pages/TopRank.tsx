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
