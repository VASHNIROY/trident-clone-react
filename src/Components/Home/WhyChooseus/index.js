import "./index.css";
import boys2 from "../AboutTrident/boys2.svg";
import { HomeCommonButton, HomeMainBoldHeadings } from "../styledComponents";
import { IoCall } from "react-icons/io5";

import { FaHandshake } from "react-icons/fa";

const Whychooseus = () => {
  return (
    <div className="home-whychooseus-main-container">
      <div className="home-whychooseus-mini-container">
        <div className="home-whychooseus-image-container">
          <img
            className="homewhychooseus-image"
            alt="homewhychooseus"
            src={boys2}
          />
          {/* <div className="homewhychooseus-imagecontainer-heading--para-container">
            <div className="homewhychooseus-imagecontainer-heading-tag">
              10+ Years
            </div>
            <p className="homewhychooseus-image-container-para">Experience</p>
          </div> */}
        </div>
        <div className="home-whychooseus-content-container">
          <div className="home-whychooseus-content-data-container">
            <div className="pt-4 home-whychooseus-content-data-container-side-heading ">
              Why Choose Us ?
            </div>
            <HomeMainBoldHeadings color="black">
              Finding The Right Fit, Every Time
            </HomeMainBoldHeadings>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="home-whychooseus-points-container">
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">01</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Profile The Ideal Candidates
                </h1>
                <p>
                  Phasellus ac ipsum sed elit iaculis dapibus a sed erat.
                  Aliquam at nisi sed magna laoreet mattis. Etiam vitae
                  dignissim ligula.
                </p>
              </div>
            </div>
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">02</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Profile The Ideal Candidates
                </h1>
                <p>
                  Phasellus ac ipsum sed elit iaculis dapibus a sed erat.
                  Aliquam at nisi sed magna laoreet mattis. Etiam vitae
                  dignissim ligula.
                </p>
              </div>
            </div>
            <div className="home-whychooseus-point-container">
              <div className="home-whychooseus-count-num-container">
                <p className="home-whychooseus-count-num">03</p>
              </div>
              <div>
                <h1 className="home-whychooseus-point-heading">
                  Profile The Ideal Candidates
                </h1>
                <p>
                  Phasellus ac ipsum sed elit iaculis dapibus a sed erat.
                  Aliquam at nisi sed magna laoreet mattis. Etiam vitae
                  dignissim ligula.
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
