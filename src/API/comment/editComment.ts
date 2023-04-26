import { baseInstance } from "../instance";
import { CommentRequestType } from "./postComment";

interface Props extends CommentRequestType {
  commentId: number;
}

export const editComment = async (props: Props) => {
  const request: CommentRequestType = {
    buyPrice: props.buyPrice,
    commentContent: props.commentContent,
    userName: props.userName,
    productId: props.productId,
  };
  try {
    const response = await baseInstance.put(`/comments/${props.commentId}`, request);
    return response.status;
  } catch (err) {
    throw err;
  }
};
