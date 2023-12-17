import React from "react";
import companylogo from "../images/copywriter-logo.png";
import "./JobDetail.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import computer from "../images/writing-computer.jpg";

const jobDetailList = {
  id: 0,
  logo: companylogo,
  location: "Singapura",
  jobType: "Full Time",
  company: "Rometheme Studio",
  role: "Frontend Developer",
  jobdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  salary: "$100k",
  q1: "What Is Frontend Developer ?",
  ans1: "Nulla ultrices lacinia orci, non gravida nisl malesuada sed. Curabitur enim orci, rutrum et imperdiet ac, iaculis nec tellus. Praesent molestie, odio ac ultrices tristique, nisl tortor tristique augue, sit amet sagittis velit lorem eu lectus. Sed non nisl non ex feugiat vulputate eget non urna. Nullam in ligula magna.",
  q2: "What Does A Cost Frontend Do?",
  ans2: "Etiam bibendum nisl rhoncus, mollis nisi sed, porta magna. Morbi placerat odio ac nunc vulputate, vel placerat nisi consectetur.Nunc hendrerit ex ipsum, sit amet consectetur risus gravida quis duis nec massa ultricies.",
  inclueList: {
    heading: "Front-End Developer Responsibilities Include :",
    include:
      "Suspendisse mi neque, tempor et odio non, luctus dapibus libero. Quisque egestas tristique libero. Vivamus at tellus malesuada, malesuada neque quis, volutpat elit. Ut a nisi quis ex finibus ornare vitae sodales orci.",
    list: [
      {
        id: 0,
        data: "Using markup languages like HTML to create user-friendly web pages",
      },
      {
        id: 1,
        data: "Maintaining and improving website",
      },
      {
        id: 2,
        data: "Optimizing applications for maximum speed",
      },
    ],
    jobimg: computer,
  },
  img: "image",
  responsibilites: [
    {
      id: 0,
      value: "Use markup languages like HTML to create user-friendly web pages",
    },
    {
      id: 1,
      value: "Maintain and improve website",
    },
    {
      id: 2,
      value: "Optimize applications for maximum speed",
    },
    {
      id: 3,
      value: "Design mobile-based features",
    },

    {
      id: 4,
      value:
        "Collaborate with back-end developers and web designers to improve usability",
    },
    {
      id: 5,
      value: "Get feedback from, and build solutions for, users and customers",
    },
    {
      id: 6,
      value: "Write functional requirement documents and guides",
    },
    {
      id: 7,
      value: "Create quality mockups and prototypes",
    },
    {
      id: 8,
      value: "Help back-end developers with coding and troubleshooting",
    },
    {
      id: 9,
      value: "Ensure high quality graphic standards and brand consistency",
    },
    {
      id: 10,
      value: "Stay up-to-date on emerging technologies",
    },
  ],
  requirements: [
    {
      id: 0,
      value: "Proven work experience as a Front-end developer",
    },
    {
      id: 1,
      value: "Hands on experience with markup languages",
    },
    {
      id: 2,
      value: "Experience with JavaScript, CSS and jQuery",
    },
    {
      id: 3,
      value: "Familiarity with browser testing and debugging",
    },
    {
      id: 4,
      value:
        "In-depth understanding of the entire web development process (design, development and deployment)",
    },
    {
      id: 5,
      value: "Understanding of layout aesthetics",
    },
    {
      id: 6,
      value: "Knowledge of SEO principles",
    },
    {
      id: 7,
      value:
        "Familiarity with software like Adobe Suite, Photoshop and content management systems",
    },
    {
      id: 8,
      value: "An ability to perform well in a fast-paced environment",
    },
    {
      id: 9,
      value: "PExcellent analytical and multitasking skills",
    },
  ],
};

const JobDetail = () => {
  return (
    <div className="job-detail-main-container">
      <div className="job-detail-first-container">
        <h1 className="job-detail-first-heading">Job Detail</h1>
      </div>
      <div className="job-detail-second-main-container">
        <div className="job-detail-second-container">
          <div className="job-detail-second-job-apply-container">
            <div className="job-detail-second-job-container">
              <div
                className="job-detail-job-card-container"
                key={jobDetailList.id}
              >
                <div className="job-detail-job-card-image-heading-container">
                  <img
                    alt="financelogo"
                    className="job-detail-job-card-image"
                    src={jobDetailList.logo}
                  />
                  <h1 className="job-detail-job-card-heading">
                    {jobDetailList.company}
                  </h1>
                </div>
                <div className="job-detail-job-card-hr-container">
                  <hr className="job-detail-job-card-hr" />
                </div>
                <div className="job-detail-job-card-details-main-contianer">
                  <div className="job-detail-job-card-location-container">
                    <FaLocationDot className="job-detail-job-card-location-icon" />
                    <p>{jobDetailList.location}</p>
                  </div>
                  <div className="job-detail-job-card-location-container">
                    <BiSolidTimeFive className="job-detail-job-card-location-icon" />
                    <p>{jobDetailList.jobType}</p>
                  </div>
                </div>
                <div className="job-detail-job-card-description-container">
                  <h1 className="job-detail-job-card-role-name">
                    {jobDetailList.role}
                  </h1>
                  <p className="job-detail-job-card-role-description">
                    {jobDetailList.jobdesc.substring(0, 70)}...
                  </p>
                </div>
                <div className="job-detail-job-card-button-container">
                  <h1 className="job-detail-job-card-salary-heading">
                    {jobDetailList.salary}
                    <span className="job-detail-job-card-span">/Year</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="job-detail-second-apply-container">
              <div className="job-detail-second-form-main-contianer">
                <h1 className="job-detail-second-apply-now-head">Apply Now</h1>
                <input
                  type="text"
                  className="job-detail-second-form-input-element"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="job-detail-second-form-input-element"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="job-detail-second-form-input-element"
                  placeholder="Subject"
                />
                <button className="job-detail-second-form-submit-btn">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="job-detail-second-job-overview-main-container">
            <div className="job-detail-second-job-overview-first-container">
              <div className="job-detail-second-job-overview-first-question-container">
                <h1 className="job-detail-second-job-overview-question">
                  {jobDetailList.q1}
                </h1>
                <p className="job-detail-second-job-overview-first-answer">
                  {jobDetailList.ans1}
                </p>
              </div>
              <div className="job-detail-second-job-overview-first-question-container">
                <h1 className="job-detail-second-job-overview-question">
                  {jobDetailList.q2}
                </h1>
                <p className="job-detail-second-job-overview-first-answer">
                  {jobDetailList.ans2}
                </p>
              </div>
            </div>
            <div className="job-detail-second-job-overview-second-container">
              <h1 className="job-detail-second-job-overview-question">
                {jobDetailList.inclueList.heading}
              </h1>
              <p className="job-detail-second-job-overview-first-answer">
                {jobDetailList.inclueList.include}
              </p>
              <ul className="job-detail-second-job-overview-list">
                {jobDetailList.inclueList.list.map((eachPoint) => (
                  <li
                    key={eachPoint.id}
                    className="job-detail-second-job-list-item"
                  >
                    <GoDotFill />
                    {eachPoint.data}
                  </li>
                ))}
              </ul>

              <img
                className="job-detail-second-job-overview-img"
                src={jobDetailList.inclueList.jobimg}
                alt="job"
              />
            </div>
            <div className="job-detail-second-job-overview-first-container">
              <div className="job-detail-second-job-overview-first-question-container">
                <h1 className="job-detail-second-job-overview-question">
                  Responsibilities:
                </h1>
                <ul>
                  {jobDetailList.responsibilites.map((eachRes) => (
                    <li
                      key={eachRes.id}
                      className="job-detail-second-job-list-item"
                    >
                      {" "}
                      <GoDotFill />
                      {eachRes.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="job-detail-second-job-overview-first-question-container">
                <h1 className="job-detail-second-job-overview-question">
                  Requirements & Skills :
                </h1>
                <ul>
                  {jobDetailList.requirements.map((eachReq) => (
                    <li
                      key={eachReq.id}
                      className="job-detail-second-job-list-item"
                    >
                      {" "}
                      <GoDotFill />
                      {eachReq.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
