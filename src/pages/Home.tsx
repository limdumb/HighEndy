import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import useFetch from "../components/customHook/useFetch";
import "./style/home.css";

interface HomeDataType {
  carousel: string[];
  article: {
    articleId: number;
    articleTitle: string;
    articleImage: string;
    articleUrl: string;
  }[];
}

const CarouselImage = styled.img`
  width: 80%;
  height: 500px;
  margin: 0 auto;

  @media (max-width: 390px) {
    width: 100%;
    height: 200px;
  }
`;

const ArticleWrapper = styled.li`
  width: 220px;
  height: 250px;
`;

const ArticleImage = styled.img`
  width: 220px;
  height: 160px;
`;

const SlideItem = styled.div`
  width: 100%;
`;

export default function Home() {
  const homeInitalValue: HomeDataType = {
    carousel: [],
    article: [],
  };

  const homeData = useFetch<HomeDataType>("/home", homeInitalValue);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <div className="Home_Wrapper">
      <div className="Slider_Wrapper">
        <Slider {...settings}>
          {homeData.data.carousel.map((image, index) => (
            <SlideItem key={index}>
              <CarouselImage src={image} />
            </SlideItem>
          ))}
        </Slider>
      </div>
      <div className="Article_Title_Wrapper">
        <span className="Article_Main_Title">TODAY’S STORIES</span>
      </div>
      <ul className="Article_Wrapper">
        {homeData.data.article.map((element) => {
          return (
            <ArticleWrapper key={element.articleId}>
              <ArticleImage src={element.articleImage} />
              <span className="Article_Category">FASHION</span>
              <a href={element.articleUrl} className="Article_Title">{element.articleTitle}</a>
            </ArticleWrapper>
          );
        })}
      </ul>
    </div>
  );
}
