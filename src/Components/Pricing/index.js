import { useEffect } from "react";
import Weserve from "../Home/WeServe";
import Whychooseus from "../Home/WhyChooseus";
import Pricingcards from "../pricingCards";
import "./index.css";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pricing-main-container">
      <div className="pricing-nav-first-container">
        <div className="pricing-nav-heading-container">
          <h1 className="pricing-nav-heading">Pricing Plan</h1>
        </div>
      </div>
      <div className="pricing-content-main-container">
        <p className="pricing-container-side-heading">
          We Gave The Best For You
        </p>
        <h1 className="pricing-content-heading">
          Here's Pricing That Fit For You
        </h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <Pricingcards />
      <Weserve />
      <Whychooseus />
    </div>
  );
};

export default Pricing;
