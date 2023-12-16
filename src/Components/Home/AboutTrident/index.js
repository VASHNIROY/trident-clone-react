import "./index.css";
import boys2 from "./boys2.svg";
import {
  HomeCommonButton,
  HomeMainBoldHeadings,
} from "../styledComponents";
import { IoCall } from "react-icons/io5";

import { FaHandshake } from "react-icons/fa";

const AboutTrident = () => {
  return (
    <div className="home-abouttirdent-main-container">
      <div className="home-abouttirdent-mini-container">
        <div className="home-abouttirdent-image-container">
          <img
            className="homeaboutrident-image"
            alt="homeaboutrident"
            src={boys2}
          />
          {/* <div className="homeaboutrident-imagecontainer-heading--para-container">
            <div className="homeaboutrident-imagecontainer-heading-tag">
              10+ Years
            </div>
            <p className="homeaboutrident-image-container-para">Experience</p>
          </div> */}
        </div>
        <div className="home-abouttirdent-content-container">
          <div className="home-abouttirdent-content-data-container">
            <div className="pt-4 home-abouttirdent-content-data-container-side-heading ">
              About SRM360
            </div>
            <HomeMainBoldHeadings color="black">
              Nurturing Talent, Fueling Growth
            </HomeMainBoldHeadings>
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
                <p className="home-abouttirdent-content-data-icon-para">
                  25000+
                </p>
                <p style={{ fontWeight: "bold" }}>Has Find Their Jobs</p>
              </div>
              <div className="home-abouttirdent-content-data-icon-container">
                <div className="home-abouttirdent-content-data-icon-mini-container">
                  <FaHandshake className="home-abouttirdent-content-data-icon" />
                </div>
                <p className="home-abouttirdent-content-data-icon-para">50+</p>
                <p style={{ fontWeight: "bold" }}>Recruiter</p>
              </div>
            </div>
            <div className="home-abouttirdent-content-data-icon2-container">
              <HomeCommonButton>Read More</HomeCommonButton>
              <div className="home-abouttirdent-content-data-call-icon-main-container">
                <div className="home-abouttirdent-content-data-call-icon-mini-container">
                  <IoCall className="home-abouttirdent-content-data-icon" />
                </div>
                <div className="home-aboutrident-content-data-icon-content-contianer">
                  <p className="home-abouttirdent-content-data-icon-para">
                    Call us 24/7
                  </p>
                  <p style={{ fontWeight: "bold" }}>+123 456 789</p>
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
