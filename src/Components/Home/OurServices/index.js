import {
  HomeCommonButton,
  HomeMainBoldHeadings,
  HomeSmallSideBlueHeadings,
} from "../styledComponents";
import { GrNotes } from "react-icons/gr";
import "./index.css";

const OurServices = () => {
  return (
    <div className="home-our-services-section">
      <div className="home-our-services-mini-container">
        <div className="home-our-services-description-container">
          <HomeSmallSideBlueHeadings>Our Services</HomeSmallSideBlueHeadings>
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
          <div className="home-our-services-double-card-container">
            <div className="home-our-services-card-container">
              <div className="home-out-services-card">
                <div className="home-out-services-card-icon-contianer">
                  <GrNotes />
                </div>
                <div>
                  <h1>Recruitment</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
