import { HomeMainBoldHeadings } from "../styledComponents";
import "./index.css";
import { HomeHeroSectionReadmorebtns } from "./styledComponents";
// import herosectionimg from "../../images/herosection.png";
import herosectionimg from "../../images/herosection1.png";
import herosectionprofiles from "../../images/herosectionprofiles.png";
import { FaArrowDown } from "react-icons/fa";
import Fade from "react-reveal/Fade.js";

const HomeHeroSection = () => {
  return (
    <>
      <div className="home-hero-section-main-container">
        <Fade bottom>
          <div className="home-hero-section-content-container">
            <h1 className="home-hero-section-side-heading">
              Welcome To SRM360
            </h1>
            <div className="home-hero-section-main-heading">
              Connecting Talent,Building Careers
            </div>
            <p className="home-hero-section-para">
              SRM360 Consulting: Premier IT services with on-time, on-budget
              solutions and top-notch execution, consistently exceeding client
              expectations.
            </p>
            <div className="home-hero-section-btns-main-container">
              <div className="home-hero-section-btns-mini-container">
                <HomeHeroSectionReadmorebtns backgroundColor="#2b72ee" top="10">
                  Read More
                </HomeHeroSectionReadmorebtns>
                {/* <div className='home-hero-section-or-span-main-container'> */}
                <span className="home-hero-section-or-span">Or</span>
                {/* </div> */}
                <HomeHeroSectionReadmorebtns
                  backgroundColor="black"
                  bottom="10"
                >
                  Explore More
                </HomeHeroSectionReadmorebtns>
              </div>
            </div>
          </div>
        </Fade>
        <div className="home-herosection-images-container">
          <img
            className="home-herosectionprofiles"
            alt="herosectinprofiles"
            src={herosectionprofiles}
          />
          <img
            className="home-herosection-main-img"
            alt="herosection"
            src={herosectionimg}
          />
          <div className="home-herosection-recruting-container">Recruiting</div>
        </div>
      </div>
      <div className="home-hero-section-cards-container">
        <div className="home-hero-section-card-container">
          <h1 className="home-hero-section-card-heading">STAFF AUGMENTATION</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="home-hero-section-card-arrow-icon1-container">
            <FaArrowDown className="home-hero-section-card-arrow-icon" />
          </div>
        </div>
        <div className="home-hero-section-card-container">
          <h1 className="home-hero-section-card-heading">
            PROJECT TEAM STAFFING
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="home-hero-section-card-arrow-icon2-container">
            <FaArrowDown className="home-hero-section-card-arrow-icon" />
          </div>
        </div>
        <div className="home-hero-section-card-container">
          <h1 className="home-hero-section-card-heading">
            DIRECT HIRE PLACEMENT
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="home-hero-section-card-arrow-icon3-container">
            <FaArrowDown className="home-hero-section-card-arrow-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
