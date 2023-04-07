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
`;

const ReviewContents = styled.div`
  display: flex;
  & > :first-child {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 22px;
  }
  & > :last-child {
    width: 1200px;
    padding-left: 40px;
    font-size: 15px;
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
            gd
            리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d리뷰내용d
          </span>
        </div>
      </ReviewContents>
      <div>
        <span>3,869,000원</span>
      </div>
    </CommentBoxContainer>
  );
}
