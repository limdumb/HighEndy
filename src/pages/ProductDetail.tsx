import styled from "styled-components";
import ProductInfo from "../components/ProductDetail/ProductInfo";
import "./style/productDetail.css";

const ProductDetailContainer = styled.div`
  padding: 40px 0px;
  width: 1440px;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
`;

export default function ProductDetail() {
  return (
    <ProductDetailContainer>
      <div className="Product_Detaile_Info_Container">
        <div className="Product_Detail_Image_Wrapper">
          <ProductImage />
        </div>
        <ProductInfo />
      </div>
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>
    </ProductDetailContainer>
  );
}
