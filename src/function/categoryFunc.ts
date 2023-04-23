export const onCategoryClicked = (clickStatus: string | null) => {
  localStorage.setItem("clickState", `${clickStatus}`);
};
