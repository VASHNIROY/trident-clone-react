import React from "react";
import ScrollCountUp from "../ScrollCountup";
import "./index.css";

const Countup = () => {
  return (
    <div className="home-countup-main-container">
      <div className="home-countup-double-container">
        <div className="home-countup-counter-container">
          <div style={{ display: "flex" }}>
            <ScrollCountUp endValue={250} duration={2} separator="," />
            <p>k+</p>
          </div>
          <p className="home-countup-counter-para">Has been Aproved</p>
        </div>
        <div className="home-countup-counter-container">
          <div style={{ display: "flex" }}>
            <ScrollCountUp endValue={10} duration={2} separator="," />
            <p>+</p>
          </div>
          <p className="home-countup-counter-para">Years Experience</p>
        </div>
      </div>
      <div className="home-countup-double-container">
        <div className="home-countup-counter-container">
          <div style={{ display: "flex" }}>
            <ScrollCountUp endValue={99} duration={2} separator="," />
            <p>%</p>
          </div>
          <p className="home-countup-counter-para">Client Satisfaction</p>
        </div>
        <div className="home-countup-counter-container">
          <div style={{ display: "flex" }}>
            <ScrollCountUp endValue={200} duration={2} separator="," />
            <p>k+</p>
          </div>
          <p className="home-countup-counter-para">Resume Added</p>
        </div>
      </div>
    </div>
  );
};

export default Countup;
