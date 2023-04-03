import AsideTab from "../components/common/AsideTab";
import ProductCard from "../components/common/ProductCard";
import TitleSection from "../components/common/TitleSection";

export default function ProductList() {
  return (
    <>
      <AsideTab />
      <ProductCard productImage={""} productName={"Gucci 마몽드백"} />
      <TitleSection/>
    </>
  );
}
