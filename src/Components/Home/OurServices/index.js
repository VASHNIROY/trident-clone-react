import {
  HomeCommonButton,
  HomeMainBoldHeadings,
  HomeSmallSideBlueHeadings,
} from "../styledComponents";
import { CgNotes } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa6";
import { FaUsersRays } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import Fade from "react-reveal/Fade";
import "./index.css";

const OurServices = () => {
  return (
    <div className="home-our-services-section mb-5">
      <div className="home-our-services-mini-container">
        <div className="home-our-services-description-container">
          <HomeSmallSideBlueHeadings textAlign="start">
            Our Services
          </HomeSmallSideBlueHeadings>
          <HomeMainBoldHeadings style={{ padding: "0" }}>
            Precision Placements, Profound Results
          </HomeMainBoldHeadings>
          <p>
            Cras semper pharetra dolor in sollicitudin. Vestibulum nunc risus,
            tempor ac ligula et, hendrerit vestibulum est interdum et malesuada
            fames ac.
          </p>
          <p>
            Ante ipsum primis in faucibus. Suspendisse consectetur, leo nec
            rutrum cursus, est nunc vestibulum lorem, sed facilisis sapien orci
            vitae diam. Duis rhoncus mauris magna, nec bibendum erat fermentum
            laoreet. View More
          </p>
          <HomeCommonButton>View More</HomeCommonButton>
        </div>
        <div className="home-our-services-cards-container">
          <Fade bottom cascade>
            <div className="home-our-services-double-card-container">
              <div className="home-our-services-card">
                <div className="home-our-services-card-icon-contianer">
                  <CgNotes className="home-our-services-card-icon" />
                </div>
                <div className="home-our-services-card-description-container">
                  <h1 className="home-our-services-card-heading">
                    Recruitment
                  </h1>
                  <p className="home-our-services-card-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="home-our-services-card">
                <div className="home-our-services-card-icon-contianer">
                  <FaUsersRays className="home-our-services-card-icon" />
                </div>
                <div className="home-our-services-card-description-container">
                  <h1 className="home-our-services-card-heading">
                    HR OutSourcing
                  </h1>
                  <p className="home-our-services-card-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="home-our-services-double-card-container">
              <div className="home-our-services-card">
                <div className="home-our-services-card-icon-contianer">
                  <FaNetworkWired className="home-our-services-card-icon" />
                </div>
                <div className="home-our-services-card-description-container">
                  <h1 className="home-our-services-card-heading">
                    Expatriate Services
                  </h1>
                  <p className="home-our-services-card-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="home-our-services-card">
                <div className="home-our-services-card-icon-contianer">
                  <TbReportSearch className="home-our-services-card-icon" />
                </div>
                <div className="home-our-services-card-description-container">
                  <h1 className="home-our-services-card-heading">
                    Executive Search
                  </h1>
                  <p className="home-our-services-card-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
