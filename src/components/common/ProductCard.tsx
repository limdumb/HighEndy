import { useNavigate } from "react-router-dom";
import "./style/productCard.css";

interface Props {
  productImage: string;
  productName: string;
}

export default function ProductCard(props: Props) {
  const navigate = useNavigate();
  return (
    <li
      className="Product_Container"
      onClick={() => navigate("/product/:productId")}
    >
      <img className="Product_Image_Wrapper" src={props.productImage} />
      <div className="Product_Name_Wrapper">
        <span>{props.productName}</span>
      </div>
    </li>
  );
}
