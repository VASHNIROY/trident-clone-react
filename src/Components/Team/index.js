import {
  HomeMainBoldHeadings,
  HomeSmallSideBlueHeadings,
} from "../Home/styledComponents";
import "./index.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import recruiter1 from "../images/recruiter1.jpg";
import recruiter2 from "../images/recruiter2.jpg";
import recruiter3 from "../images/recruiter3.jpg";
import recruiter4 from "../images/recruiter4.jpg";
import recruiter5 from "../images/recruiter5.jpg";
import recruiter6 from "../images/recruiter6.jpg";
import recruiter7 from "../images/recruiter7.jpg";
import recruiter8 from "../images/recruiter8.jpg";
import PlayBtnBanner from "../Home/PlaybtnBanner";

const TeamMembers = [
  {
    id: 1,
    name: "Vashni Roy",
    image: recruiter1,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 2,
    name: "Vashni Roy",
    image: recruiter2,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 3,
    name: "Vashni Roy",
    image: recruiter3,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 4,
    name: "Vashni Roy",
    image: recruiter4,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 5,
    name: "Vashni Roy",
    image: recruiter5,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 6,
    name: "Vashni Roy",
    image: recruiter6,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 7,
    name: "Vashni Roy",
    image: recruiter7,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
  {
    id: 8,
    name: "Vashni Roy",
    image: recruiter8,
    linkedin: "",
    twitter: "",
    facebook: "",
    role: "Recruiter",
  },
];

const Team = () => {
  return (
    <div className="team-main-container">
      <div className="team-nav-first-container">
        <div className="team-nav-heading-container">
          <h1 className="team-nav-heading">Team</h1>
        </div>
      </div>
      <div className="team-our-professional-main-container">
        <div className="team-our-professional-headings-container">
          <div className="team-our-professional-side-heading">
            Our professional
          </div>
          <div className="team-our-professional-heading">
            Meet The Team Behind Trident
          </div>
        </div>
        <div className="team-our-professional-para-container">
          <p>
            Ellentesque tempus iaculis mi quis viverra. Curabitur urna sapien,
            pulvinar eu diam ut, feugiat sollicitudin nisi. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vivamus ut elit
            mollis, venenatis justo non, gravida libero.
          </p>
        </div>
      </div>
      <div className="team-members-cards-container ">
        {TeamMembers.map((each) => (
          <div
            key={each.id}
            className="team-members-card-container col-md-3 col-xl-3 "
          >
            <div className="team-members-card-mini-container">
              <img
                className="team-member-card-img"
                src={each.image}
                alt="team-member-card-img"
              />
              <div className="team-members-card-tagline">
                <p>{each.role}</p>
              </div>
              <h1 className="team-member-card-name">{each.name}</h1>
              <div className="team-members-card-social-icons-main-container">
                <div className="team-members-card-social-icon-container">
                  <FaFacebook className="team-members-card-icon" />
                </div>
                <div className="team-members-card-social-icon-container">
                  <FaSquareXTwitter className="team-members-card-icon" />
                </div>
                <div className="team-members-card-social-icon-container">
                  <FaLinkedin className="team-members-card-icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="team-members-card-container  col-md-4 col-xl-3 ">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3  ">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3 ">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container   col-md-4 col-xl-3">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3 ">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3 ">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-members-card-container  col-md-4 col-xl-3">
          <div className="team-members-card-mini-container">
            <img
              className="team-member-card-img"
              src={recruiter1}
              alt="team-member-card-img"
            />
            <div className="team-members-card-tagline">
              <p>Recruiter</p>
            </div>
            <h1 className="team-member-card-name">Vashni Roy</h1>
            <div className="team-members-card-social-icons-main-container">
              <div className="team-members-card-social-icon-container">
                <FaFacebook className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaSquareXTwitter className="team-members-card-icon" />
              </div>
              <div className="team-members-card-social-icon-container">
                <FaLinkedin className="team-members-card-icon" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <PlayBtnBanner />
    </div>
  );
};

export default Team;
