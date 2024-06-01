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
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="home-our-services-section mb-5">
      <div className="home-our-services-mini-container">
        <div className="home-our-services-description-container">
          <HomeSmallSideBlueHeadings textAlign="start">
            Our Services
          </HomeSmallSideBlueHeadings>
          <HomeMainBoldHeadings style={{ padding: "0" }}>
            Discover Excellence in Every Placement
          </HomeMainBoldHeadings>
          <p>
            Welcome to SRM360 Consulting, where our commitment to precision
            placements yields profound results. With a focus on delivering
            exceptional services, we redefine recruitment and HR solutions to
            elevate your business. Explore our diverse offerings:
          </p>

          <HomeCommonButton>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "white" }}
            >
              View More
            </Link>
          </HomeCommonButton>
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
                    Find the best talent for your team with our comprehensive
                    recruitment services, ensuring the perfect match for your
                    company’s needs.{" "}
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
                    Streamline your HR functions with our expert outsourcing
                    services, allowing you to focus on your core business.{" "}
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
                    Simplify international assignments with our specialized
                    expatriate services, covering relocation, compliance, and
                    support.
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
                    Discover top executives to lead your company with our
                    meticulous and confidential executive search services.
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
