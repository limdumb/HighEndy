import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postComment } from "../API/comment/postComment";
import CustomButton from "../components/common/CustomButton";
import useFetch from "../components/customHook/useFetch";
import CommentBox from "../components/ProductDetail/CommentBox";
import ProductComment from "../components/ProductDetail/ProductComment";
import ProductInfo, {
  ContourLine,
} from "../components/ProductDetail/ProductInfo";
import { getNickName } from "../function/getUserData";
import { onInputChanged } from "../function/onInputChanged";
import "./style/productDetail.css";

const ProductDetailContainer = styled.div`
  padding: 40px 0px;
  width: 1440px;
  margin: 0 auto;
  @media (max-width: 390px) {
    width: 350px;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 390px) {
    width: 140px;
    height: 140px;
  }
`;

const ProductOutfitImage = styled.img`
  width: 720px;
  height: 720px;

  @media (max-width: 390px) {
    width: 350px;
    height: 350px;
  }
`;

interface ProductDetailType {
  id: number;
  productName: string;
  productImage: string;
  productBrand: string;
  productPrice: number;
  productLink: string;
  productExplain: string;
  productMainImage: string[];
}

interface CommentType {
  id: number;
  productId: number;
  buyPrice: number;
  commentContent: string;
  userName: string;
}

export interface CommentValue {
  commentContent: string;
  buyPrice: string;
}

export default function ProductDetail() {
  const [commentValue, setCommentValue] = useState<CommentValue>({
    commentContent: "",
    buyPrice: "",
  });

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChanged<CommentValue>(commentValue, setCommentValue, e);
  };

  const param = useParams();
  const userNickName = getNickName()
  const detailInitialValue: ProductDetailType[] = [
    {
      id: 0,
      productName: "",
      productImage: "",
      productBrand: "",
      productPrice: 0,
      productLink: "",
      productExplain: "",
      productMainImage: [""],
    },
  ];
  const commentInitialValue: CommentType[] = [
    {
      id: 0,
      userName: "",
      productId: 0,
      buyPrice: 0,
      commentContent: "",
    },
  ];
  const productDetailData = useFetch<Array<ProductDetailType>>(
    `productDetail?id=${param.productId}`,
    detailInitialValue
  );
  const commentData = useFetch<Array<CommentType>>(
    `comments?productId=${param.productId}`,
    commentInitialValue
  );

  return (
    <ProductDetailContainer>
      {productDetailData.data.map((product) => {
        return (
          <div key={product.id}>
            <div className="Product_Detaile_Info_Container">
              <div className="Product_Detail_Image_Wrapper">
                <ProductImage src={product.productImage} />
              </div>
              <div className="Product_Detail_Info">
                <ProductInfo
                  productName={product.productName}
                  productBrand={product.productBrand}
                  productPrice={product.productPrice}
                  productLink={product.productLink}
                  productExplain={product.productExplain}
                />
              </div>
            </div>
            {window.innerWidth <= 390 ? <ContourLine /> : null}
            <div className="Product_Explanation">
              <h3>제품설명</h3>
              <div className="Product_Explation_Content">
                <span>{product.productExplain}</span>
              </div>
            </div>
            <div className="Product_Detail_Outfit_Container">
              {product.productMainImage.map((img) => {
                return <ProductOutfitImage key={img} src={img} />;
              })}
            </div>
          </div>
        );
      })}
      <div className="Product_Review_Container">
        <ProductComment
          commentValue={commentValue}
          handleInputChanged={handleInputChanged}
        />
        <div className="Submit_Button_Container">
          {userNickName ? (
            <CustomButton
              onClick={async () => {
                if (
                  commentValue.buyPrice.length !== 0 &&
                  commentValue.commentContent.length !== 0
                ) {
                  const postResult = await postComment({
                    buyPrice: Number(commentValue.buyPrice),
                    commentContent: commentValue.commentContent,
                    userName: userNickName,
                    productId: Number(param.productId),
                  });
                  if (postResult) {
                    alert("등록이 완료 되었습니다!");
                    window.location.reload();
                  }
                } else {
                  alert("내용이나 금액을 입력해주세요");
                }
              }}
              width={"70px"}
              height={"30px"}
              contents={"등록"}
            />
          ) : (
            <CustomButton
              onClick={() => alert("로그인 후 작성 가능합니다")}
              width={"70px"}
              height={"30px"}
              contents={"등록"}
            />
          )}
        </div>
        <ContourLine />
      </div>
      {commentData.data.length !== 0
        ? commentData.data.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentBox
                  productId={Number(param.productId)}
                  commentId={comment.id}
                  userNickName={userNickName}
                  buyPrice={comment.buyPrice}
                  commentContent={comment.commentContent}
                  userName={comment.userName}
                />
              </div>
            );
          })
        : null}
    </ProductDetailContainer>
  );
}
