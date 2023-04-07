import styled from "styled-components";
import CommentBox from "../components/ProductDetail/CommentBox";
import ProductComment from "../components/ProductDetail/ProductComment";
import ProductInfo, {
  ContourLine,
} from "../components/ProductDetail/ProductInfo";
import "./style/productDetail.css";

const ProductDetailContainer = styled.div`
  padding: 40px 0px;
  width: 1440px;
  margin: 0 auto;
  @media (max-width: 390px) {
    width: 350px;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 390px) {
    width: 140px;
    height: 140px;
  }
`;

const ProductOutfitImage = styled.img`
  width: 720px;
  height: 720px;

  @media (max-width: 390px) {
    width: 350px;
    height: 350px;
  }
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
      {window.innerWidth <= 390 ? <ContourLine /> : null}
      <div className="Product_Explanation">
        <h3>제품설명</h3>
        <div className="Product_Explation_Content">
          <span>
            하우스 아카이브로부터 탄생한 구찌 블론디 라인을 특징하는 라운드
            인터로킹 G. 구찌 블론디 숄더백 및 크로스백과 같은 시그니처
            아이템에서 섬세한 레더 패치 디테일로 엠블럼을 구현함.
          </span>
        </div>
      </div>
      <div className="Product_Detail_Outfit_Container">
        <ProductOutfitImage src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679682627/742360_1IV0G_6420_003_100_0000_Light-.jpg" />
        <ProductOutfitImage src="https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1679682629/742360_1IV0G_6420_004_100_0000_Light-.jpg" />
      </div>
      <div className="Product_Review_Container">
        <ProductComment />
        <ContourLine />
        <div>
          <CommentBox />
        </div>
      </div>
    </ProductDetailContainer>
  );
}
