import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  height: string;
  contents: string;
}

const CommonButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : {})};
  height: ${(props) => (props.width ? props.height : {})};
  border-radius: 15px;
  font-size: 18px;
  border: none;
  color: white;
  padding: 10px;
  background-color: #619bf2;
  box-shadow: 1px 1px 1px 1px #7695c34a;
  &:hover {
    background-color: #477ac8;
  }
`;

export default function CustomButton(props: ButtonProps) {
  return <CommonButton {...props}>
    {props.contents}
  </CommonButton>;
}
