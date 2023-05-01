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
  height: 600px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  text-align: center;
`;

export default function Home() {
  const homeInitalValue: HomeDataType = {
    carousel: [],
    article: [],
  };

  const homeData = useFetch<HomeDataType>("/home", homeInitalValue);

  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true, // 페이지네이션 표시
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Home_Wrapper">
      <Slider {...settings}>
        {homeData.data.carousel.map((image, index) => (
          <SlideItem key={index}>
            <CarouselImage src={image} alt={`slide ${index}`} />
          </SlideItem>
        ))}
      </Slider>
    </div>
  );
}
