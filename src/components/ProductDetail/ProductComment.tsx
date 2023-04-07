import CommonInput from "../common/CommonInput";
import CommentBox from "./CommentBox";
import { ContourLine } from "./ProductInfo";
import "./style/productComment.css";

export default function ProductComment() {
  return (
    <div>
      <span>리뷰</span>
      <div>
        <CommonInput
          value={""}
          onChange={() => {}}
          type={"text"}
          placeholder={"리뷰를 입력해주세요"}
          label={"리뷰를 입력해주세요"}
        />
        <CommonInput
          value={""}
          onChange={() => {}}
          type={"text"}
          placeholder={"구입하셨던 상품 금액을 입력해주세요"}
          label={"상품 금액을 입력해주세요"}
        />
      </div>
      <ContourLine />
      <div>
        <CommentBox/>
      </div>
    </div>
  );
}
