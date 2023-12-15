import { HomeMainBoldHeadings } from "../styledComponents";
import "./index.css";
import { HomeHeroSectionReadmorebtns } from "./styledComponents";
import herosectionimg from "../../images/herosection.png";
import herosectionprofiles from "../../images/herosectionprofiles.png";
import { FaArrowDown } from "react-icons/fa";
const HomeHeroSection = () => {
  return (
    <>
      <div className="home-hero-section-main-container">
        <div className="home-hero-section-content-container">
          <h1 className="home-hero-section-side-heading">Welcome To SRM360</h1>
          <div className="home-hero-section-main-heading">
            Connecting Talent,Building Careers
          </div>
          <p className="home-hero-section-para">
            Vestibulum sit amet sapien felis. Suspendisse fermentum purus quis
            quam lacinia, id placerat lacus blandit. In hac habitasse platea
            dictumst.
          </p>
          <div className="home-hero-section-btns-main-container">
            <div className="home-hero-section-btns-mini-container">
              <HomeHeroSectionReadmorebtns backgroundColor="#2b72ee" top="10">
                Read More
              </HomeHeroSectionReadmorebtns>
              {/* <div className='home-hero-section-or-span-main-container'> */}
              <span className="home-hero-section-or-span">Or</span>
              {/* </div> */}
              <HomeHeroSectionReadmorebtns backgroundColor="black" bottom="10">
                Explore More
              </HomeHeroSectionReadmorebtns>
            </div>
          </div>
        </div>
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
          <h1 className="home-hero-section-card-heading">Expert Agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="home-hero-section-card-arrow-icon1-container">
            <FaArrowDown className="home-hero-section-card-arrow-icon" />
          </div>
        </div>
        <div className="home-hero-section-card-container">
          <h1 className="home-hero-section-card-heading">Quality Standard</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="home-hero-section-card-arrow-icon2-container">
            <FaArrowDown className="home-hero-section-card-arrow-icon" />
          </div>
        </div>
        <div className="home-hero-section-card-container">
          <h1 className="home-hero-section-card-heading">Certified Method</h1>
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
