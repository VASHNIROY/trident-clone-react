import {
  HomeCommonButton,
  HomeSmallSideBlueHeadings,
  HomeMainBoldHeadings,
} from "../styledComponents";
import "./index.css";
import homeblogimg from "../../images/homeblogimg.jpg";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";

const BlogAndArticle = () => {
  return (
    <div className="blog-article-main-container">
      <div className="blog-article-headings-btn-container">
        <div>
          <HomeSmallSideBlueHeadings>Blog & Article</HomeSmallSideBlueHeadings>
          <HomeMainBoldHeadings>
            Read Our Latest Blog & Article
          </HomeMainBoldHeadings>
        </div>
        <div>
          <HomeCommonButton> Blog & Article</HomeCommonButton>
        </div>
        <div className="home-blog-cards-main-contianer">
          <div className="home-blog-bg-img-contianer">
            {/* <img alt="home-blog-img" src={homeblogimg} /> */}
            <div className="home-blog-card-badge">
              <p>Candidate Interview</p>
            </div>
          </div>
          <div className="home-blog-details-main-container">
            <div className="home-blog-icons-details-main-contianer">
              <div className="home-blog-icon-details-container">
                <BiSolidUser />
                <span>Tyas</span>
              </div>
              <div className="home-blog-icon-details-container">
                <AiFillCalendar />
                <span>August 24, 2023</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="home-blog-detail-heading">
              The Power Of Networking In Your Job Search
            </h1>
            <p>
              Cras semper pharetra dolor in sollicitudin. Vestibulum nunc risus,
              tempor ac ligula et, hendrerit vestibulum est. Interdum et
              malesuada fames…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndArticle;
