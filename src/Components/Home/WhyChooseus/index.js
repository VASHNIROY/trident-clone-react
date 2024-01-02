import "./index.css";
import boys2 from "../AboutTrident/boys2.svg";
import { HomeMainBoldHeadings } from "../styledComponents";
import Fade from "react-reveal/Fade";

const Whychooseus = () => {
  return (
    <div className="home-whychooseus-main-container mt-5">
      <div className="home-whychooseus-mini-container">
        <Fade left>
          <div className="home-whychooseus-image-container">
            <img
              className="homewhychooseus-image"
              alt="homewhychooseus"
              src={boys2}
            />
          </div>
        </Fade>
        <div className="home-whychooseus-content-container">
          <div className="home-whychooseus-content-data-container">
            <div className="pt-4 home-whychooseus-content-data-container-side-heading ">
              Why Choose Us ?
            </div>
            <HomeMainBoldHeadings color="black">
              Finding The Right Fit, Every Time
            </HomeMainBoldHeadings>
            <p>
              Choose SRM360 for swift, high-quality solutions tailored to your
              needs. Our expertise in recruitment, staff augmentation, and
              software development makes us your trusted partner for efficient
              goal achievement.
            </p>
          </div>
          <div className="home-whychooseus-points-container">
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">01</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Expertise Across Continents
                </h1>
                <p>
                  SRM360 has a decade of global recruitment success, connecting
                  professionals to exciting opportunities and assisting
                  employers in securing top-tier talent.
                </p>
              </div>
            </div>
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">02</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Optimized Business Partnerships
                </h1>
                <p>
                  SRM360 is a Global IT partner for efficient solutions, on-time
                  delivery, top resources, and business success.s
                </p>
              </div>
            </div>
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">03</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Swift and Quality Solutions
                </h1>
                <p>
                  SRM360 is Your reliable partner for swift, high-quality
                  solutions in recruitment, staff augmentation, solution, and
                  software development, ensuring efficient goal achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
