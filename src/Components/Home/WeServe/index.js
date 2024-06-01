import "../index.css";
import {
  HomeSmallSideBlueHeadings,
  HomeMainBoldHeadings,
} from "../styledComponents.js";
import Fade from "react-reveal/Fade.js";

const Weserve = () => {
  return (
    <div className="tailoring-talent-main-container">
      <HomeSmallSideBlueHeadings textalign="center">
        We Serve
      </HomeSmallSideBlueHeadings>
      <HomeMainBoldHeadings textalign="center">
        Tailoring Talent For Excellence
      </HomeMainBoldHeadings>
      <div className="tailoring-cards-main-container">
        <Fade bottom cascade>
          <div className="tailoring-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>IT Recruitment</p>
            </div>
            <h1 className="tailoring-card-heading">Tech Talent</h1>
            <p>
              IT Recruitment: We connect you with top IT talent, providing
              customized recruitment solutions to meet your specific technical
              requirements.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Find Jobs Suit For You</p>
            </div>
            <h1 className="tailoring-card-heading">Perfect Match</h1>
            <p>
              Find Jobs That Suit You: Discover your ideal job with our tailored
              job matching services, designed to align your skills and career
              goals with leading employers.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Business Solution</p>
            </div>
            <h1 className="tailoring-card-heading">Smart Solutions</h1>
            <p>
              Business Solutions: Optimize your workforce with our comprehensive
              business solutions, including staffing, project management, and
              strategic consulting services.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Best IT Staffing</p>
            </div>
            <h1 className="tailoring-card-heading">Elite IT</h1>
            <p>
              Best IT Staffing: Experience unparalleled IT staffing services
              with our expert team, ensuring you get the best professionals to
              power your technological growth.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Weserve;
