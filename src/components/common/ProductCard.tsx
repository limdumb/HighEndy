import "./style/productCard.css";

interface Props {
  productImage: string;
  productName: string;
}

export default function ProductCard(props: Props) {
  return (
    <li className="Product_Container">
      <div className="Product_Image_Wrapper">
        <img src={props.productImage} />
      </div>
      <div className="Product_Name_Wrapper">
        <span>{props.productName}</span>
      </div>
    </li>
  );
}
