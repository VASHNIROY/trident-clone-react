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
