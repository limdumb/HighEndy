import styled from "styled-components";
import formatPrice from "../../function/formatPrice";
import { FaPencilAlt } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import { editComment } from "../../API/comment/editComment";
import CommonInput from "../common/CommonInput";
import {
  getOnlyNumbersRegex,
  handleKeyPress,
} from "../../function/validateFunc";
import { onInputChanged } from "../../function/onInputChanged";
import { deleteComment } from "../../API/comment/deleteComment";

const CommentBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 90px;
  background-color: white;
  border: 1px solid gray;
  margin-bottom: 20px;

  & > .Edit_Pan {
    margin-bottom: 2px;
    cursor: pointer;
  }

  & > .Edit_On_Pan {
    margin-right: 4px;
    margin-left: 4px;
  }

  @media (max-width: 390px) {
    padding: 5px 10px;
    & > .Buy_Price_Container {
      font-size: 10px;
      font-weight: 600;
    }
    & > .Edit_Pan {
      font-size: 12px;
      margin-bottom: 2px;
    }

    & > .Edit_On_Pan {
      font-size: 12px;
      margin-bottom: 2px;
    }
    height: 60px;
  }
`;

const ReviewContents = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > :first-child {
    font-size: 14px;
    font-weight: 600;
  }

  & > :last-child {
    display: flex;
    align-items: center;
    width: 1180px;
    padding-left: 40px;
    font-size: 15px;
    height: 100%;
  }

  @media (max-width: 390px) {
    & > :first-child {
      display: flex;
      font-size: 10px;
      font-weight: 600;
      width: 60px;
    }

    & > :last-child {
      display: flex;
      align-items: center;
      width: 180px;
      font-size: 10px;
      padding: 0;
      height: 100%;
    }
  }
`;

interface Props {
  buyPrice: number;
  commentContent: string;
  userName: string;
  userNickName: string | null;
  commentId: number;
  productId: number;
}

export default function CommentBox(props: Props) {
  const formationBuyPrice = formatPrice(props.buyPrice);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editCommentValue, setEditCommentValue] = useState({
    commentContent: props.commentContent,
    buyPrice: props.buyPrice,
  });

  const onEditRequested = async () => {
    setIsEditMode(false);
    if (editCommentValue.commentContent.length !== 0) {
      const response = await editComment({
        commentId: props.commentId,
        buyPrice: editCommentValue.buyPrice,
        commentContent: editCommentValue.commentContent,
        userName: props.userName,
        productId: props.productId,
      });
      return response;
    } else {
      alert("수정 정보를 입력 해주세요");
    }
  };

  const onDeleteSubmit = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await deleteComment(props.commentId);
        if (response === 200) {
          alert("삭제가 완료 되었습니다");
          window.location.reload();
        } else {
          throw new Error("삭제 요청이 실패 하였습니다.");
        }
      } catch (err) {
        alert(err);
      }
    } else {
      alert("삭제 요청이 취소 되었습니다.");
    }
  };

  const onEditSubmit = async () => {
    const response = await onEditRequested();
    if (response === 200) {
      alert("수정이 완료 되었습니다.");
      window.location.reload();
    }
  };

  return (
    <CommentBoxContainer>
      <ReviewContents>
        <div>
          <span>{props.userName}</span>
        </div>
        {!isEditMode ? (
          <div>
            <span>{props.commentContent}</span>
          </div>
        ) : (
          <div>
            <CommonInput
              defaultValue={editCommentValue.commentContent}
              onChange={(e) => {
                onInputChanged(editCommentValue, setEditCommentValue, e);
              }}
              type={"text"}
              name={"commentContent"}
              placeholder={"구입하셨던 리뷰를 입력해주세요"}
              width={window.innerWidth <= 390 ? "170px" : "490px"}
              height={window.innerWidth <= 390 ? "20px" : "40px"}
              border={"1px solid #afafaf"}
            />
          </div>
        )}
      </ReviewContents>
      {!isEditMode ? (
        <div className="Buy_Price_Container">
          <span>{formationBuyPrice}원</span>
        </div>
      ) : (
        <CommonInput
          defaultValue={`${editCommentValue.buyPrice}`}
          onChange={(e) => {
            const regexResult = getOnlyNumbersRegex(e);
            const koreaRegexResult = !/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(
              e.target.value
            );
            if (regexResult && koreaRegexResult) {
              onInputChanged(editCommentValue, setEditCommentValue, e);
            }
          }}
          onKeyPress={(e) => handleKeyPress(e)}
          name={"buyPrice"}
          type={"text"}
          placeholder={"구입하셨던 상품 금액을 입력해주세요"}
          width={window.innerWidth <= 390 ? "60px" : "100px"}
          height={window.innerWidth <= 390 ? "20px" : "40px"}
          border={"1px solid #afafaf"}
        />
      )}
      {props.userNickName === props.userName ? (
        !isEditMode ? (
          <FaPencilAlt
            className="Edit_Pan"
            onClick={() => setIsEditMode(true)}
          />
        ) : (
          <>
            <FaPencilAlt
              className="Edit_On_Pan"
              onClick={() => {
                onEditSubmit();
              }}
            />
            <TiDeleteOutline
              onClick={() => {
                onDeleteSubmit();
              }}
            />
          </>
        )
      ) : null}
    </CommentBoxContainer>
  );
}
