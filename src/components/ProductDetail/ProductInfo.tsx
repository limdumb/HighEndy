import styled from "styled-components";
import "./style/productInfo.css";

export const ContourLine = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;

  @media (max-width: 390px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default function ProductInfo() {
  return (
    <div className="Product_Detail_Info_Wrapper">
      <div className="Product_Detail_Title">
        <h3>CHANEL</h3>
        <h2>샤넬 골드볼 체인 지갑</h2>
      </div>
      <ContourLine />
      <div className="Product_Detail_Info_Container">
        <div className="Product_Detail_Info_Title">
          <span>상품가격</span>
          <span>제품설명</span>
          <span>제품 사이트</span>
        </div>
        <div className="Product_Detail_Info_Contents">
          <span>3,820,000원</span>
          <span>
            하우스 아카이브로부터 탄생한 구찌 블론디 라인을 특징하는 라운드
            인터로킹 G. 구찌 블론디 숄더백 및 크로스백과 같은 시그니처
            아이템에서 섬세한 레더 패치 디테일로 엠블럼을 구현함.
          </span>
          <a href="https://www.gucci.com/kr/ko/pr/women/handbags/cross-bag-for-women/gucci-blondie-small-shoulder-bag-p-7423601IV0G6420">
            <span>Link</span>
          </a>
        </div>
      </div>
    </div>
  );
}
