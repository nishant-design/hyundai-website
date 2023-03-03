import { Button, Container } from "@mui/material";
import Slider from "react-slick";
import SliderImgOne from "../../../assets/hero_slider/1.jpeg";
import SliderImgTwo from "../../../assets/hero_slider/2.jpeg";
import SliderImgThree from "../../../assets/hero_slider/3.jpeg";
import SliderImgFour from "../../../assets/hero_slider/4.jpeg";
import SliderImgFive from "../../../assets/hero_slider/5.jpeg";
import SliderImgSix from "../../../assets/hero_slider/6.jpeg";
import './style.scss';
import { BLUE } from "../../../colors";

const heroSlider = [
  {
    img: SliderImgOne,
    link: "/",
  },
  {
    img: SliderImgTwo,
    link: "/",
  },
  {
    img: SliderImgThree,
    link: "/",
  },
  {
    img: SliderImgFour,
    link: "/",
  },
  {
    img: SliderImgFive,
    link: "/",
  },
  {
    img: SliderImgSix,
    link: "/",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true
};

const HeroSlider = () => {
  return (
    <div className="hero_slider_wrapper">
      <Slider {...settings}>
        {heroSlider.map((item: { img: string; link: string }, i: number) => {
          return (
            <div className="hero_slide" key={i}>
              <img src={item.img} style={{ width: "100%" }} />
              <Button className="know_more_btn" variant="contained">
                Know More
              </Button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
