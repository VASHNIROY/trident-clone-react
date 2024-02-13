import { useState } from "react";
import { Link } from "react-router-dom";

//import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
//import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

import { RxHamburgerMenu } from "react-icons/rx";
import srmlogobg from "../images/srm360.png";
import { BsFillTelephoneFill } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";

import "./index.css";

const navigation = [
  { name: "Teams", href: "/team", current: false, id: 1 },
  { name: "Jobs List", href: "/jobs", current: false, id: 2 },
  { name: "Services", href: "/services", current: false, id: 3 },
  { name: "Pricing", href: "/pricing", current: false, id: 4 },
  { name: "About Us", href: "/aboutus", current: false, id: 5 },
  { name: "Contact Us", href: "/contactus", current: false, id: 6 },
];

const Navbar1 = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar-main-container">
      <div className="navbar-sub-container">
        <div className="navbar-company-logo" style={{ width: "100px" }}>
          <Link to="/">
            {" "}
            <img
              src={srmlogobg}
              alt="logo"
              className="nav-logo"
              style={{ width: "100px" }}
            />
          </Link>
        </div>
        {showNavbar ? (
          <div className="navbar-menu-icon" onClick={handleShowNavbar}>
            <RxCross2 style={{ color: "#fff", fontSize: "20px" }} />
          </div>
        ) : (
          <div className="navbar-menu-icon" onClick={handleShowNavbar}>
            <RxHamburgerMenu style={{ color: "#fff", fontSize: "20px" }} />
          </div>
        )}
        <div className={`nav-elements ${showNavbar && "nav-active"}`}>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
            <div className=" navbar-items-main-container">
              <div className="navbar-button-container">
                <button
                  className="navbar-contact-btn"
                  style={{
                    display: isVisible ? "block" : "none",
                  }}
                >
                  <div className="navbar-contact-btn-inner-contianer ">
                    <Link
                      to="/studyabroad"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      StudyAbroad
                    </Link>
                  </div>
                </button>
                <button
                  className="navbar-contact-btn"
                  style={{
                    display: isVisible ? "block" : "none",
                  }}
                >
                  <div className="navbar-contact-btn-inner-contianer nav-mobile-block">
                    <BsFillTelephoneFill style={{ color: "white" }} />
                    <span> </span>9966992207
                  </div>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
