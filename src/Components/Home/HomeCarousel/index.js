import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "./index.css";
import {
  HomeMainBoldHeadings,
  HomeSmallSideBlueHeadings,
} from "../styledComponents";
import team from "../../images/Team2.jpg";

const data = [
  {
    id: 0,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "I had been searching for a new IT role for months with no luck.SRM360 changed everything. Their team not only found me a role that perfectly matched my skill set but also negotiated a fantastic compensation package on my behalf. They truly go above and beyond for their clients.",
    image: team,
    name: "Venu",
    role: "Software developer",
  },
  {
    id: 1,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "I had been searching for a new IT role for months with no luck.SRM360 changed everything. Their team not only found me a role that perfectly matched my skill set but also negotiated a fantastic compensation package on my behalf. They truly go above and beyond for their clients.",
    image: team,
    name: "Venu",
    role: "Software developer",
  },
  {
    id: 2,
    icon: <BiSolidQuoteAltRight className="home-carousel-icon" />,
    description:
      "I had been searching for a new IT role for months with no luck.SRM360 changed everything. Their team not only found me a role that perfectly matched my skill set but also negotiated a fantastic compensation package on my behalf. They truly go above and beyond for their clients.",
    image: team,
    name: "Venu",
    role: "Software developer",
  },
];

const HomeCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-carousel-main-container">
      <div className="home-carousel-first-images-container">
        <img src={team} alt="first" className="home-carousel-side-image" />
        <img src={team} alt="first" className="home-carousel-first-center-image" />
        <img src={team} alt="first" className="home-carousel-side-image" />
      </div>
      <div className="home-carousel-container">
        <HomeSmallSideBlueHeadings>Testimonial</HomeSmallSideBlueHeadings>
        <HomeMainBoldHeadings>Client Feedback</HomeMainBoldHeadings>
        <Slider {...settings} className="home-carousel-sub-container">
          {data.map((eachSlide) => (
            <div>
              <span className="home-carousel-icon-holder">
                {eachSlide.icon}
              </span>
              <p className="home-carousel-person-description">
                {eachSlide.description}
              </p>
              <div className="home-carousel-image-container">
                <img
                  className="home-carousel-image"
                  src={eachSlide.image}
                  alt={eachSlide.name}
                />
              </div>
              <h3 className="home-carousel-person-name">{eachSlide.name}</h3>
              <h4 className="home-carousel-person-role">{eachSlide.role}</h4>
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-carousel-second-images-container">
        <img src={team} alt="first" className="home-carousel-side-image" />
        <img src={team} alt="first" className="home-carousel-second-center-image" />
        <img src={team} alt="first" className="home-carousel-side-image" />
      </div>
    </div>
  );
};

export default HomeCarousel;
