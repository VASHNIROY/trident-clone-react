import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import srmlogo from "../images/srmlogo.jpg";
import "./index.css";

import { BsFillTelephoneFill } from "react-icons/bs";
const navigation = [
  { name: "Homepage", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Jobs List", href: "#", current: false },
  { name: "Pages", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
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
  return (
    <Disclosure as="nav" style={{ backgroundColor: "#2a6fe8" }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    width="100"
                    height="80"
                    src={srmlogo}
                    class="attachment-full size-full wp-image-300"
                    alt=""
                    sizes="(max-width: 350px) 100vw, 350px"
                  ></img>
                </div>
                <div className="hidden sm:ml-6 sm:block navbar-items-main-container">
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
                          <div className="d-flex">
                            {item.name}
                            {item.name === "About Us" ||
                            item.name === "Jobs List" ||
                            item.name === "Pages" ? (
                              <MdOutlineKeyboardArrowDown className="nav-item-downArrow" />
                            ) : (
                              ""
                            )}
                          </div>
                          <ul className="nav-item-dropdown-container">
                            {item.name === "About Us" ? (
                              <div className="nav-item-dropdown">
                                <li>About Us</li>
                                <li>Team</li>
                              </div>
                            ) : item.name === "Jobs List" ? (
                              <div className="nav-item-dropdown">
                                <li>Jobs list</li>
                                <li>Team</li>
                              </div>
                            ) : item.name === "Pages" ? (
                              <div className="nav-item-dropdown">
                                <li>Pages</li>
                                <li>Team</li>
                              </div>
                            ) : (
                              <div
                                style={{ backgroundColor: "transparent" }}
                              ></div>
                            )}
                          </ul>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  style={{ backgroundColor: "#14397a" }}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <button
                className="navbar-contact-btn "
                style={{
                  display: isVisible ? "block" : "none",
                }}
              >
                <div className="navbar-contact-btn-inner-contianer">
                  <BsFillTelephoneFill style={{ color: "white" }} />
                  +123-456-789
                </div>
              </button>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden fixed inset-y-0 w-64 bg-gray-900 z-30 left-0 ">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  style={{ textDecoration: "none" }}
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
          </Disclosure.Panel>
          <script
            src="https://kit.fontawesome.com/4d46ec0dc8.js"
            crossorigin="anonymous"
          ></script>
        </>
      )}
    </Disclosure>
  );
}