import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const onInputChanged = <T extends Record<string, any>>(
  value: T,
  setStateFunc: Dispatch<SetStateAction<T>>,
  e: ChangeEvent<HTMLInputElement>
) => {
  setStateFunc(() => ({
    ...value,
    [e.target.name]: e.target.value,
  }));
};
