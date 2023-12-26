import "./index.css";
import boys2 from "./boys2.svg";
import { HomeCommonButton, HomeMainBoldHeadings } from "../styledComponents";
import homeaboutrident from "../../images/homeaboutrident.png";
import { IoCall } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import { FaHandshake } from "react-icons/fa";

const AboutTrident = () => {
  return (
    <div className="home-abouttirdent-main-container mt-5">
      <div className="services-second-container">
        <Fade left>
          <div className="services-second-image-container">
            <img
              src={homeaboutrident}
              alt="boss"
              className="services-second-image"
            />
          </div>
        </Fade>
        <div className="services-second-content-container">
          <div className="services-second-content-data-container">
            <div className="pt-4 services-second-content-data-container-side-heading ">
              About SRM360
            </div>
            <HomeMainBoldHeadings color="black">
              Nurturing Talent, Fueling Growth
            </HomeMainBoldHeadings>
            <p className="services-second-content-para">
              Nullam facilisis quam ac mi vulputate, ac finibus eros molestie.
              Donec tristique erat et felis cursus, a pretium neque fringilla.
            </p>
            <p>
              Vestibulum sit amet sapien felis. Suspendisse fermentum purus quis
              quam lacinia, id placerat lacus blandit. In hac habitasse platea
              dictumst. Nullam hendrerit egestas turpis vel aliquam.
            </p>
          </div>

          <div className="home-abouttirdent-content-data-icons-container">
            <div className="home-abouttirdent-content-data-icon1-container">
              <div className="home-abouttirdent-content-data-icon-container">
                <div className="home-abouttirdent-content-data-icon-mini-container">
                  <FaHandshake className="home-abouttirdent-content-data-icon" />
                </div>
                <div className="home-abouttirdent-content-data-icon-para-count-container">
                  <p className="home-abouttirdent-content-data-icon-para">
                    25000+
                  </p>
                  <p style={{ fontWeight: "bold" }}>Has Find Their Jobs</p>
                </div>
              </div>
              <div className="home-abouttirdent-content-data-icon-container">
                <div className="home-abouttirdent-content-data-icon-mini-container">
                  <FaHandshake className="home-abouttirdent-content-data-icon" />
                </div>
                <div className="home-abouttirdent-content-data-icon-para-count-container">
                  <p className="home-abouttirdent-content-data-icon-para">
                    50+
                  </p>
                  <p style={{ fontWeight: "bold" }}>Recruiter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-second-content-data-icons-container">
            <div className="services-second-content-data-icon2-container">
              <HomeCommonButton>Read More</HomeCommonButton>
              <div className="services-second-content-data-call-icon-main-container">
                <div className="services-second-content-data-call-icon-mini-container">
                  <IoCall className="services-second-content-data-icon" />
                </div>
                <div className="home-aboutrident-content-data-icon-content-contianer">
                  <p className="services-second-content-data-icon-para">
                    Call us 24/7
                  </p>
                  <p className="services-second-content-phone">+123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrident;
