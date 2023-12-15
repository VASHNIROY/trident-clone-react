import "../index.css";
import {
  HomeSmallSideBlueHeadings,
  HomeMainBoldHeadings,
} from "../styledComponents.js";

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
    </div>
  );
};

export default Weserve;
