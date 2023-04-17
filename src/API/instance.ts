import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const baseInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 500) {
      alert("서버 에러가 발생하였습니다. 잠시후 다시 시도해주세요");
    }
  }
);
