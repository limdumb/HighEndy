import axios from "axios";

//Instance는 기본틀 제작 후 추후에 변경 예정
export const baseInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});