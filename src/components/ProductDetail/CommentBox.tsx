import styled from "styled-components";
import formatPrice from "../../function/formatPrice";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

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
    width: 1200px;
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
}

export default function CommentBox(props: Props) {
  const formationBuyPrice = formatPrice(props.buyPrice);
  const [isEditMode, setIsEditMode] = useState(false);

  // 1. Edit Mode를 toggle을 해준다
  // 2. Edit Mode가 true일때
  // 2-1. Content에 인풋이 생기면서 Input Value를 수정할수있게함 ( 이전 Input Value )
  // 2-2. Edit Pen은 toggle이 아닌 요청을 보낼수있는 아이콘
  // 3. Edit Mode가 false일때
  // 3-1. Edit Mode를 True로 할 수 있는 아이콘으로 변경

  const onEditRequested = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <CommentBoxContainer>
      <ReviewContents>
        <div>
          <span>{props.userName}</span>
        </div>
        <div>
          <span>{props.commentContent}</span>
        </div>
      </ReviewContents>
      <div className="Buy_Price_Container">
        <span>{formationBuyPrice}원</span>
      </div>
      {!isEditMode ? (
        <FaPencilAlt
          className="Edit_Pan"
          onClick={() => setIsEditMode(!isEditMode)}
        />
      ) : (
        <FaPencilAlt
          className="Edit_Pan"
          onClick={() => onEditRequested()}
        />
      )}
    </CommentBoxContainer>
  );
}
