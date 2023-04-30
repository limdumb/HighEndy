import { baseInstance } from "../instance";

export const deleteComment = async (commentId: number) => {
  try {
    const response = await baseInstance.delete(`/comments/${commentId}`);
    if (response.status === 200) {
      return response.status;
    } else {
      throw new Error("삭제 요청이 실패 하였습니다.");
    }
  } catch (err) {
    const error = new Error("삭제에 실패 하였습니다. 잠시후 다시 시도해주세요");
    error.name = "DeleteCommentError";
    throw error;
  }
};
