import "./index.css";
import financelogo from "../images/finance-logo.png";
import copywriterlogo from "../images/copywriter-logo.png";
import falconsecuritylogo from "../images/falcon-security-logo.png";
import labyrinthbrainlogo from "../images/labyrinth-brain-logo.png";
import rocketgearlogo from "../images/rocket-gear-logo.png";
import cletterlogo from "../images/c-letter-logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import {
  HomeCommonButton,
  HomeSmallSideBlueHeadings,
  HomeMainBoldHeadings,
} from "./styledComponents";
import BlogAndArticle from "./Blog&Article";
import PlayBtnBanner from "./PlaybtnBanner";
import { AccordionCustomIcon } from "./FAQs";
import Fade from "react-reveal/Fade";
import OurServices from "./OurServices";
import CountUp from "./Countup";
import HomeCarousel from "./HomeCarousel";
import HomeHeroSection from "./HeroSection";
import AboutTrident from "./AboutTrident";
import Whychooseus from "./WhyChooseus";
import { Link } from "react-router-dom";
import Weserve from "./WeServe";
import { ContactusForm } from "../ContactusForm";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeHeroSection />
      <AboutTrident />
      {/* <div className="tailoring-talent-main-container">
        <HomeSmallSideBlueHeadings textAlign="center">
          We Serve
        </HomeSmallSideBlueHeadings>
        <HomeMainBoldHeadings textAlign="center">
          Tailoring Talent For Excellence
        </HomeMainBoldHeadings>
        <div className="tailoring-cards-main-container">
          <div className="tailoring-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>1 month training</p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Find Jobs Suit For You</p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Free Couselling </p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Testing By Expert</p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div> */}
      <Weserve />
      <div className="home-jobs-main-container">
        <div className="home-jobs-mini-container">
          <div className="home-jobs-content-main-container">
            <h1 className="home-jobs-available-heading">Jobs Available</h1>
            <HomeMainBoldHeadings className="home-jobs-ready-heading">
              Ready Jobs To Apply On July
            </HomeMainBoldHeadings>
            <p>
              Hot Jobs in July 2024: Explore exciting new opportunities this
              July! Our latest listings feature top positions across various
              industries. Whether you're seeking a career change or a new
              challenge, find your perfect job with us. Start your journey
              today!
            </p>
            <HomeCommonButton className="home-jobs-content-button">
              <Link to="/jobs"> View All {"->"}</Link>
            </HomeCommonButton>
          </div>
          <div className="home-jobs-cards-main-container">
            <Fade bottom cascade>
              <div className="home-jobs-cards-mini-container">
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={financelogo}
                    />
                    <h1 className="home-job-card-heading">Net79 Investment</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Canada</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={copywriterlogo}
                    />
                    <h1 className="home-job-card-heading">Rometheme Studio</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Singapore</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={falconsecuritylogo}
                    />
                    <h1 className="home-job-card-heading">Merpati Airlane</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Malaysia</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
              </div>
            </Fade>
            <Fade bottom cascade>
              <div className="home-jobs-cards-mini-container">
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={cletterlogo}
                    />
                    <h1 className="home-job-card-heading">Fastnet Provider</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Indonesia</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={labyrinthbrainlogo}
                    />
                    <h1 className="home-job-card-heading">Brain Software</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Canada</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
                <div className="home-job-card-container">
                  <div className="home-job-card-image-heading-container">
                    <img
                      alt="financelogo"
                      className="home-job-card-image"
                      src={rocketgearlogo}
                    />
                    <h1 className="home-job-card-heading">Rocket Hostinger</h1>
                  </div>
                  <div className="home-job-card-hr-container">
                    <hr className="home-job-card-hr" />
                  </div>
                  <div className="home-home-job-card-details-main-contianer">
                    <div className="home-job-card-location-container">
                      <FaLocationDot className="home-job-card-location-icon" />
                      <p>Finland</p>
                    </div>
                    <div className="home-job-card-location-container">
                      <BiSolidTimeFive className="home-job-card-location-icon" />
                      <p>Full Time</p>
                    </div>
                  </div>
                  <h1 className="home-job-card-job-detail-heading">
                    Job Detail
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Whychooseus />
      <PlayBtnBanner />
      <CountUp />
      <OurServices />
      <HomeCarousel />
      <div className="home-faq-section-main-container">
        <div className="home-faq-section-mini-container">
          <ContactusForm />
          <div className="home-faqs-main-container">
            <HomeSmallSideBlueHeadings style={{ textAlign: "start" }}>
              FAQs
            </HomeSmallSideBlueHeadings>
            <HomeMainBoldHeadings
              style={{
                textAlign: "start",
                paddingLeft: "0",
                paddingRight: "0",
              }}
            >
              Our Frequently Asked Question
            </HomeMainBoldHeadings>
            <p style={{ textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <AccordionCustomIcon />
          </div>
        </div>
      </div>
      <BlogAndArticle />
    </>
  );
};

export default HomePage;
//homepage
