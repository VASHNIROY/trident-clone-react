import "../index.css";
import {
  HomeSmallSideBlueHeadings,
  HomeMainBoldHeadings,
} from "../styledComponents.js";
import Fade from "react-reveal/Fade.js";

const Weserve = () => {
  return (
    <div className="tailoring-talent-main-container">
      <HomeSmallSideBlueHeadings textAlign="center">
        We Serve
      </HomeSmallSideBlueHeadings>
      <HomeMainBoldHeadings textAlign="center">
        Tailoring Talent For Excellence
      </HomeMainBoldHeadings>
      <div className="tailoring-cards-main-container">
        <Fade bottom cascade>
          <div className="tailoring-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>IT Recruitment</p>
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
              <p style={{ fontWeight: "bold" }}>Business Solution</p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="tailoring-remain-card">
            <div className="tailoring-card-badge">
              <p style={{ fontWeight: "bold" }}>Best IT Staffing</p>
            </div>
            <h1 className="tailoring-card-heading">Develop & Training</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Weserve;
