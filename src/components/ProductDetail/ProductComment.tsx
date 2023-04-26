import { ChangeEvent } from "react";
import { getOnlyNumbersRegex } from "../../function/validateFunc";
import { CommentValue } from "../../pages/ProductDetail";
import CommonInput from "../common/CommonInput";
import "./style/productComment.css";

interface Props {
  commentValue: CommentValue;
  handleInputChanged: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductComment(props: Props) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace" && e.key !== "Delete" && isNaN(Number(e.key))) {
      e.preventDefault();
    }
  };
  console.log(props.commentValue.buyPrice)

  return (
    <div>
      <div className="Product_Review_Write_Container">
        <CommonInput
          defaultValue={props.commentValue.buyPrice}
          onChange={(e) => {
            const regexResult = getOnlyNumbersRegex(e);
            const koreaRegexResult = !/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(
              e.target.value
            );
            if (regexResult && koreaRegexResult) {
              props.handleInputChanged(e);
            }
          }}
          onKeyPress={(e) => handleKeyPress(e)}
          name={"buyPrice"}
          type={"text"}
          placeholder={"구입하셨던 상품 금액을 입력해주세요"}
          label={"상품 리뷰를 입력해주세요 [숫자만 입력 가능합니다]"}
          width={"100%"}
          height={"25px"}
          border={"1px solid #afafaf"}
        />
        
        <CommonInput
          defaultValue={props.commentValue.commentContent}
          onChange={(e) => {
            props.handleInputChanged(e);
          }}
          type={"text"}
          name={"commentContent"}
          placeholder={"구입하셨던 리뷰를 입력해주세요"}
          width={"100%"}
          height={"150px"}
          border={"1px solid #afafaf"}
        />
      </div>
    </div>
  );
}
