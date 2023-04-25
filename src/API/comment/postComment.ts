import { baseInstance } from "../instance";

interface RequestType {
  buyPrice: number;
  commentContent: string;
  userName: string | null;
  productId: number;
}

export const postComment = async (props: RequestType) => {
  const request: RequestType = {
    buyPrice: props.buyPrice,
    commentContent: props.commentContent,
    userName: props.userName,
    productId: props.productId,
  };
  const response = await baseInstance.post("/comments", request);

  return response.status
};
