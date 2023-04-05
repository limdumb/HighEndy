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

const ProductOutfitImage = styled.img`
  width: 720px;
  height: 720px;
`;

export default function ProductDetail() {
  return (
    <ProductDetailContainer>
      <div className="Product_Detaile_Info_Container">
        <div className="Product_Detail_Image_Wrapper">
          <ProductImage src="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1677204013/742360_1IV0G_6420_001_075_0025_Light-.jpg" />
        </div>
        <div className="Product_Detail_Info">
          <ProductInfo />
        </div>
      </div>
      <div className="Product_Detail_Outfit_Container">
        <ProductOutfitImage src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679682627/742360_1IV0G_6420_003_100_0000_Light-.jpg" />
        <ProductOutfitImage src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679682629/742360_1IV0G_6420_004_100_0000_Light-.jpg" />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </ProductDetailContainer>
  );
}
