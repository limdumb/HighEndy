import styled from "styled-components";
import formatPrice from "../../function/formatPrice";

const CommentBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 90px;
  background-color: white;
  border: 1px solid gray;
  margin-bottom: 20px;

  & > :last-child {
    font-weight: 600;
  }
  @media (max-width: 390px) {
    padding: 5px 10px;
    & > :last-child {
      font-size: 12px;
      font-weight: 600;
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
    width: 1200px;
    padding-left: 40px;
    font-size: 15px;
  }

  @media (max-width: 390px) {
    & > :first-child {
      display: flex;
      font-size: 10px;
      font-weight: 600;
      width: 60px;
    }
    & > :last-child {
      width: 212px;
      font-size: 10px;
      padding: 0;
    }
  }
`;

interface Props {
  buyPrice: number;
  commentContent: string;
  userName: string;
}

export default function CommentBox(props:Props) {
  const formationBuyPrice = formatPrice(props.buyPrice)
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
      <div>
        <span>{formationBuyPrice}원</span>
      </div>
    </CommentBoxContainer>
  );
}
