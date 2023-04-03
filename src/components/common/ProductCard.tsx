import "./style/proudctCard.css";

interface Props {
  productImage: string;
  productName: string;
}

export default function ProductCard(props: Props) {
  return (
    <div className="Product_Container">
      <div>
        <img src={props.productImage} />
      </div>
      <div>
        <span>{props.productName}</span>
      </div>
    </div>
  );
}
