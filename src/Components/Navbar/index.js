import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import srmlogobg from "../images/srm360.png";
import { Link } from "react-router-dom";
import "./index.css";

import { BsFillTelephoneFill } from "react-icons/bs";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Teams", href: "/team", current: false },
  { name: "Jobs List", href: "/jobs", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "About Us", href: "/aboutus", current: false },
  { name: "Contact Us", href: "/contactus", current: false },
];

const mobileNavigation = [
  { name: "Home", href: "/", current: false },
  { name: "Teams", href: "/team", current: false },
  { name: "Jobs List", href: "/jobs", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "About Us", href: "/aboutus", current: false },
  { name: "Contact Us", href: "/contactus", current: false },
  { name: "Study Abroad", href: "/studyabroad", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [issidebar, setIssidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /*className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 "*/
    /*items-center justify-between  */
    /* sm:items-stretch */
  }
  {
    /* mobile disclosuer class names */
  }
  {
    /* sm:hidden fixed inset-y-0 w-64 bg-gray-900 z-30 left-0  */
  }
  return (
    <Disclosure
      as="nav"
      style={{
        backgroundColor: "#2b72ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {({ open }) => (
        <>
          <div className="navbar-inner-container">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="navbar-logo-main-container">
                <div className="">
                  <Link to="/ ">
                    {" "}
                    <img
                      width="100"
                      height="80"
                      src={srmlogobg}
                      class="attachment-full size-full wp-image-300"
                      alt=""
                      sizes="(max-width: 350px) 100vw, 350px"
                    ></img>
                  </Link>
                </div>
                <div className="hidden navbar-items-main-container">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        style={{ textDecoration: "none" }}
                        className={classNames(
                          item.current
                            ? "text-gray-300  no-underline"
                            : "text-white no-underline hover:text-gray-300",
                          "rounded-md px-3 py-2 text-sm font-medium no-underline"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="nav-item-down-arrow-container">
                          <div
                            className="d-flex"
                            style={{ color: "white", width: "max-content" }}
                          >
                            {item.name}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className=" navbar-items-main-container">
                  <div className="flex space-x-4">
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
                      <div className="navbar-contact-btn-inner-contianer ">
                        <BsFillTelephoneFill style={{ color: "white" }} />
                        +91 9966992207
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <div
                  style={{ backgroundColor: "#14397a" }}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {issidebar ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                      onClick={() => setIssidebar(prevState => !prevState)}
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                      onClick={() => setIssidebar(prevState => !prevState)}
                      />
                  )}
                </div>
              </div>
              {/* <button
                className="navbar-contact-btn"
                style={{
                  display: isVisible ? "block" : "none",
                }}
              >
                <div className="navbar-contact-btn-inner-contianer ">
                  <BsFillTelephoneFill style={{ color: "white" }} />
                  +123-456-789
                </div>
              </button> */}
            </div>
          </div>
          {/* Mobile menu*/}
          <div className="sm:hidden fixed inset-y-0 w-64 bg-gray-900 z-30 left-0">
            <div className="space-y-1 px-4 py-4">
              {mobileNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  style={{ textDecoration: "none", color: "white" }}
                  className={classNames(
                    item.current ? " text-white" : " hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </div>
          <script
            src="https://kit.fontawesome.com/4d46ec0dc8.js"
            crossorigin="anonymous"
          ></script>
        </>
      )}
    </Disclosure>
  );
}
