import styled from "styled-components";

const CommentBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 90px;
  background-color: white;
  border: 1px solid gray;

  & > :last-child {
    font-weight: 600;
  }
  @media (max-width: 390px) {
    padding: 5px 10px;
    & > :last-child {
      padding-bottom: 10px;
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
      font-size: 10px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    & > :last-child {
      width: 210px;
      padding-left: 10px;
      font-size: 10px;
      padding: 0px 10px;
    }
  }
`;

export default function CommentBox() {
  return (
    <CommentBoxContainer>
      <ReviewContents>
        <div>
          <span>사용자 이름</span>
        </div>
        <div>
          <span>
            제품 상태는 되게 좋았고 근데 뭔가 문제는 좀 있었어요
          </span>
        </div>
      </ReviewContents>
      <div>
        <span>3,869,000원</span>
      </div>
    </CommentBoxContainer>
  );
}
