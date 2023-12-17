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
                Proin aliquam dapibus nulla, ac varius elit sollicitudin id.
                Donec eleifend lorem vel malesuada imperdiet. Integer tempor
                tellus sapien, finibus vehicula dolor pharetra at. In et erat
                sed elit ultrices sodales id nec neque. Quisque blandit quam
                dapibus risus gravida tristique.
              </p>
            </div>
          </div>
          <hr style={{ border: "1px solid white", width: "50%" }} />
          <div className="aboutus-mission-vission-card-container">
            <div className="aboutus-mission-vission-cards-heading-icon-container">
              <FaEye className="aboutus-mission-vission-card-icon" />
              <h1 className="aboutus-mission-heading">Our Mission</h1>
              <p>
                Proin aliquam dapibus nulla, ac varius elit sollicitudin id.
                Donec eleifend lorem vel malesuada imperdiet. Integer tempor
                tellus sapien, finibus vehicula dolor pharetra at. In et erat
                sed elit ultrices sodales id nec neque. Quisque blandit quam
                dapibus risus gravida tristique.
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
