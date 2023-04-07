import CommonInput from "../common/CommonInput";
import CommentBox from "./CommentBox";
import { ContourLine } from "./ProductInfo";
import "./style/productComment.css";

export default function ProductComment() {
  return (
    <div>
      <div className="Product_Review_Write_Container">
        <CommonInput
          value={""}
          onChange={() => {}}
          type={"text"}
          placeholder={"구입하셨던 상품 금액을 입력해주세요"}
          label={"상품 리뷰를 입력해주세요"}
          width={"100%"}
          height={"25px"}
          border={"1px solid #afafaf"}
        />
        <CommonInput
          value={""}
          onChange={() => {}}
          type={"text"}
          placeholder={"구입하셨던 리뷰를 입력해주세요"}
          width={"100%"}
          height={"150px"}
          border={"1px solid #afafaf"}
        />
      </div>
    </div>
  );
}
