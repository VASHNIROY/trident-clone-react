import AboutTrident from "../Home/AboutTrident";
import Weserve from "../Home/WeServe";
import Whychooseus from "../Home/WhyChooseus";
import { HomeMainBoldHeadings } from "../Home/styledComponents";
import { FaEye } from "react-icons/fa";
import aboutusimg from "../images/aboutusimg.jpg";
import "./index.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-nav-first-container">
        <div className="aboutus-nav-heading-container">
          <h1 className="aboutus-nav-heading">About Us</h1>
        </div>
      </div>
      <AboutTrident />
      <Weserve />
      <div className="aboutus-mission-vission-img-main-container">
        <img
          alt="aboutusimg"
          className="aboutus-mission-vission-img"
          src={aboutusimg}
        />
        <div className="aboutus-mission-vission-cards-container">
          <div className="aboutus-mission-vission-card-container">
            <div className="aboutus-mission-vission-cards-heading-icon-container">
              <FaEye className="aboutus-mission-vission-card-icon" />
              <h1 className="aboutus-mission-heading">Our Vision</h1>
              <p>
                A decade of global expertise in tech, sales, and marketing
                recruitment. We're your ideal partner for career moves and for
                companies seeking top-tier talent.
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid white", width: "50%" }} />
          <div className="aboutus-mission-vission-card-container">
            <div className="aboutus-mission-vission-cards-heading-icon-container">
              <FaEye className="aboutus-mission-vission-card-icon" />
              <h1 className="aboutus-mission-heading">Our Mission</h1>
              <p>
                SRM360 aims to be the global leader in recruitment solutions,
                empowering clients to focus on core business competence with an
                innovative approach. Specializing in recruitment, staff
                augmentation, solution development, outsourcing, and software
                development, we redefine consulting for success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Whychooseus />
    </div>
  );
};

export default AboutUs;
