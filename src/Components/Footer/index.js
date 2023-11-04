import "./index.css";
import srmlogo from "../images/srmlogo.jpg";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-main-container mt-5">
      <div className="footer-logo-main-container">
        <div className="footer-logo-li-container">
          <img
            width="100"
            height="80"
            src={srmlogo}
            class="attachment-full size-full wp-image-300"
            alt=""
            sizes="(max-width: 350px) 100vw, 350px"
          />
        </div>
        <div className="footer-social-icons-main-container">
          <li className="footer-personal-details-main-contianer">
            <div className="footer-personal-details-logo-contianer">
              <BsTelephoneFill className="footer-personal-details-logo" />
            </div>
            <div className="footer-personal-details-contianer">
              <p>Phone Number</p>
              <p className="footer-personal-detail">+123-456-789</p>
            </div>
          </li>
          <li className="footer-personal-details-main-contianer">
            <div className="footer-personal-details-logo-contianer">
              <AiOutlineMail className="footer-personal-details-logo" />
            </div>
            <div className="footer-personal-details-contianer">
              <p>Our Email</p>
              <p className="footer-personal-detail">Hello@awesome.com</p>
            </div>
          </li>
          <li className="footer-personal-details-main-contianer">
            <div className="footer-personal-details-logo-contianer">
              <FaLocationDot className="footer-personal-details-logo" />
            </div>
            <div className="footer-personal-details-contianer">
              <p>Office Address</p>
              <p className="footer-personal-detail">Gachibowli,Hyderabad</p>
            </div>
          </li>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <div className="below-hr-line-main-container">
        <div className="footer-about-srm-main-container">
          <div className="footer-about-srm-contianer ">
            <h1 className="footer-about-heading">About SRM360</h1>
            <p>
              Esse irure cillum aliquip dolore ad cillum. Elit laboris ea quis
              exercitation. Ex elit laboris commodo cillum do sunt culpa culpa
              ex.
            </p>
            <div className="footer-social-media-icons-main-container">
              <div className="footer-social-media-icon-container">
                <IoLogoFacebook className="footer-social-media-icon" />
              </div>
              <div className="footer-social-media-icon-container">
                <AiOutlineTwitter className="footer-social-media-icon" />
              </div>
              <div className="footer-social-media-icon-container">
                <AiFillYoutube className="footer-social-media-icon" />
              </div>
            </div>
          </div>
          <div className="footer-about-main-container">
            <h1 className="footer-about-heading">Useful Link</h1>
            <ul className="footer-useful-link-ul">
              <li className="footer-useful-link-li">{">"} About Us</li>
              <li className="footer-useful-link-li">{">"} Job List</li>
              <li className="footer-useful-link-li">{">"} FAQs</li>
              <li className="footer-useful-link-li">{">"} Team</li>
              <li className="footer-useful-link-li">{">"} Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-what-we-do-subscribe-container">
          <div className="footer-what-we-do-main-container">
            <h1 className="footer-about-heading">What We do</h1>
            <ul className="footer-useful-link-ul">
              <li className="footer-useful-link-li">{">"} Recruitment</li>
              <li className="footer-useful-link-li">{">"} HR Outsourcing</li>
              <li className="footer-useful-link-li">
                {">"} Expatriate Services
              </li>
              <li className="footer-useful-link-li">{">"} Executive Search</li>
            </ul>
          </div>
          <div className="footer-subscribe-main-container">
            <h1 className="footer-subscribe-heading">
              Subscribe & Get Update Repeatedly
            </h1>
            <input
              placeholder="Your Email"
              className="footer-subscribe-input-ele"
            />
            <button className="footer-subscribe-btn">Subscribe Now</button>
          </div>
        </div>
      </div>
      <p className="mb-5 mt-5">
        Copyright 2023 © Trident | Powered by Rometheme Studio
      </p>
    </div>
  );
};

export default Footer;
