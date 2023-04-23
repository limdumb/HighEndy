import styled from "styled-components";
import ProductCard from "../components/common/ProductCard";
import useFetch from "../components/customHook/useFetch";
import trackQueryString from "../function/trackQueryString";

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
    id: number;
    productName: string;
    productImage: string;
  }[];
}

export default function ProductList(props: Props) {
  const queryString = trackQueryString();
  const productInitialValue: ProductType = {
    productList: [{ id: 0, productName: "", productImage: "" }],
  };
  const getProductList = useFetch<ProductType>(
    `/${queryString}`,
    productInitialValue
  );
  
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
                  key={el.id}
                  productId={el.id}
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
