import "./index.css";
import { HomeMainBoldHeadings } from "../styledComponents";

import CustomizedDialogs from "../PlaybtnPopup";

const PlayBtnBanner = () => {
  return (
    <div className="play-btn-banner-main-container">
      <div className="play-btn-banner-mini-container">
        <div className="play-btn-heading-animation-container">
          <HomeMainBoldHeadings className="play-btn-banner-heading">
            Shaping Futures, One Placement At A Time
          </HomeMainBoldHeadings>
        </div>
        <CustomizedDialogs />
      </div>
    </div>
  );
};

export default PlayBtnBanner;
