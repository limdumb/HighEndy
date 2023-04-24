import styled from "styled-components";
import formatPrice from "../../function/formatPrice";
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

interface Props {
  productName: string
  productBrand: string,
  productPrice: number,
  productLink: string,
  productExplain: string
}

export default function ProductInfo(props:Props) {
  const formationNumber = formatPrice(props.productPrice)
  return (
    <div className="Product_Detail_Info_Wrapper">
      <div className="Product_Detail_Title">
        <h3>{props.productBrand}</h3>
        <h2>{props.productName}</h2>
      </div>
      <ContourLine />
      <div className="Product_Detail_Info_Container">
        <div className="Product_Detail_Info_Title">
          <span>제품 가격</span>
          <span>제품 설명</span>
          <span>제품 사이트</span>
        </div>
        <div className="Product_Detail_Info_Contents">
          <span>{formationNumber}원</span>
          <span>{props.productExplain}
          </span>
          <a href={props.productLink}>
            <span>Link</span>
          </a>
        </div>
      </div>
    </div>
  );
}