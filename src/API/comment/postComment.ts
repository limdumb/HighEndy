import { baseInstance } from "../instance";

export interface CommentRequestType {
  buyPrice: number;
  commentContent: string;
  userName: string | null;
  productId: number;
}

export const postComment = async (props: CommentRequestType) => {
  const request: CommentRequestType = {
    buyPrice: props.buyPrice,
    commentContent: props.commentContent,
    userName: props.userName,
    productId: props.productId,
  };
  const response = await baseInstance.post("/comments", request);

  return response.status
};
