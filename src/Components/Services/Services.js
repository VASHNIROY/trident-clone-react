import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaExpandArrowsAlt, FaHandHoldingUsd } from "react-icons/fa";
import { FaNetworkWired, FaUsersRays } from "react-icons/fa6";
import {
  TbReportSearch,
  TbUsers,
  TbDeviceDesktopAnalytics,
} from "react-icons/tb";
import "./Services.css";
import {
  HomeCommonButton,
  HomeMainBoldHeadings,
  HomeSmallSideBlueHeadings,
} from "../Home/styledComponents";
import { AccordionCustomIcon } from "../Home/FAQs";

import boss from "../images/boss.png";
import { IoCall } from "react-icons/io5";
import { ContactusForm } from "../ContactusForm";
import { useEffect } from "react";
const ServicesList = [
  {
    id: 0,
    icon: <CgNotes className="services-card-icon" />,
    heading: "Recruitment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaUsersRays className="services-card-icon" />,
    heading: "HR Outsourcing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: <FaNetworkWired className="services-card-icon" />,
    heading: "Expatriate Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: <TbReportSearch className="services-card-icon" />,
    heading: "Executive Search",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    icon: <TbReportSearch className="services-card-icon" />,
    heading: "Executive Search",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    icon: <TbUsers className="services-card-icon" />,
    heading: "Expatriate Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    icon: <FaHandHoldingUsd className="services-card-icon" />,
    heading: "Payroll Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    icon: <TbDeviceDesktopAnalytics className="services-card-icon" />,
    heading: "Remote Worker Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    icon: <FaExpandArrowsAlt className="services-card-icon" />,
    heading: "Workforce System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="services-main-container mb-5">
      <div className="services-nav-first-container">
        <div className="services-nav-heading-container">
          <h1 className="services-nav-heading">Services</h1>
        </div>
      </div>
      <div className="services-second-main-container">
        <div className="services-second-container">
          <div className="services-second-image-container">
            <img src={boss} alt="boss" className="services-second-image" />
          </div>
          <div className="services-second-content-container">
            <div className="services-second-content-data-container">
              <div className="pt-4 services-second-content-data-container-side-heading ">
                About SRM360
              </div>
              <HomeMainBoldHeadings color="black">
                Nurturing Talent, Fueling Growth
              </HomeMainBoldHeadings>
              <p className="services-second-content-para">
                Nullam facilisis quam ac mi vulputate, ac finibus eros molestie.
                Donec tristique erat et felis cursus, a pretium neque fringilla.
              </p>
              <p>
                Vestibulum sit amet sapien felis. Suspendisse fermentum purus
                quis quam lacinia, id placerat lacus blandit. In hac habitasse
                platea dictumst. Nullam hendrerit egestas turpis vel aliquam.
              </p>
            </div>
            <div className="services-second-content-data-icons-container">
              <div className="services-second-content-data-icon2-container">
                <HomeCommonButton>Read More</HomeCommonButton>
                <div className="services-second-content-data-call-icon-main-container">
                  <div className="services-second-content-data-call-icon-mini-container">
                    <IoCall className="services-second-content-data-icon" />
                  </div>
                  <div className="home-aboutrident-content-data-icon-content-contianer">
                    <p className="services-second-content-data-icon-para">
                      Call us 24/7
                    </p>
                    <p className="services-second-content-phone">
                      +123 456 789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-third-container">
        <div className="services-third-heading-container">
          <h2 className="services-third-heading">Our Services</h2>
          <h1 className="services-third-para">
            Precision Placements, Profound Results
          </h1>
        </div>
        <div className="services-third-cards-container">
          {ServicesList.map((eachService) => (
            <div className="services-card">
              <div className="services-card-icon-contianer">
                {eachService.icon}
              </div>
              <div className="services-card-description-container">
                <h1 className="services-card-heading">{eachService.heading}</h1>
                <p className="services-card-para">{eachService.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-faq-section-main-container">
        <div className="home-faq-section-mini-container">
          <ContactusForm />
          <div className="home-faqs-main-container">
            <HomeSmallSideBlueHeadings style={{ textAlign: "start" }}>
              FAQs
            </HomeSmallSideBlueHeadings>
            <HomeMainBoldHeadings
              style={{
                textAlign: "start",
                paddingLeft: "0",
                paddingRight: "0",
              }}
            >
              Our Frequently Asked Question
            </HomeMainBoldHeadings>
            <p style={{ textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <AccordionCustomIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
