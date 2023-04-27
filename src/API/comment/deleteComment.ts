import { baseInstance } from "../instance";

export const deleteComment = async (commentId: number) => {
  try {
    const response = await baseInstance.delete(`/comments/${commentId}`);
    return response.status;
  } catch (err) {
    throw err
  }
};
