import React, { useEffect, useState } from "react";
import "./JobList.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import financelogo from "../images/finance-logo.png";
import copy from "../images/copywriter-logo.png";
import c from "../images/c-letter-logo.png";
import brain from "../images/labyrinth-brain-logo.png";
import rocket from "../images/rocket-gear-logo.png";
import falscon from "../images/falcon-security-logo.png";
import OurServices from "../Home/OurServices";
import PlayBtnBanner from "../Home/PlaybtnBanner";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_DOMAIN_URL;

const dummyJobsList = [
  {
    id: 0,
    logo: financelogo,
    company: "Net79 Investment",
    location: "Canada",
    jobType: "Full Time",
    role: "Marketing Expertise",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
  {
    id: 1,
    logo: c,
    company: "Rometheme Studio",
    location: "Singapura",
    jobType: "Full Time",
    role: "Web Developer",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
  {
    id: 2,
    logo: falscon,
    company: "Merpati Airlane",
    location: "Malaysia",
    jobType: "Full Time",
    role: "Steward Crew",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
  {
    id: 3,
    logo: copy,
    company: "Fastnet Provider",
    location: "Canada",
    jobType: "Full Time",
    role: "Sales Executive",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
  {
    id: 4,
    logo: rocket,
    company: " Rocket Hostinger",
    location: "Canada",
    jobType: "Full Time",
    role: "Marketing Expertise",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
  {
    id: 5,
    logo: brain,
    company: "Brain Software",
    location: "Finland",
    jobType: "Full Time",
    role: "Web developer",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elittellus, luctus nec ullamcorper.",
  },
];

const JobList = () => {
  const [jobsList, setjobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log("Fetching jobs...");
        const apiUrl = `${baseUrl}api-job-list`;
        const options = {
          method: "GET",
          headers: {
            Authorization:
              "5a544978596d59324d4749355a4749354e3249784e4445784d3251315a546c6a595451314d445a684e47493d",
          },
        };

        console.log("Requesting data from the server...");
        const response = await fetch(apiUrl, options);

        if (!response.ok) {
          throw new Error(
            `Server error: ${response.status} - ${response.statusText}`
          );
        }

        console.log("Server response received.");
        const data = await response.json();

        const updatedData = data.data.map((item) => ({
          jobId: item.job_id,
          jobLocation: item.job_location,
          jobLogo: item.job_logo,
          jobTitle: item.job_title,
          description: item.shor_description,
        }));

        console.log("Data received:", data);

        setjobList(updatedData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    // Fetch jobs when the component mounts
    fetchJobs();
  }, []);

  console.log(jobsList);

  return (
    <div className="job-list-main-container">
      <div className="job-list-first-container">
        <div className="job-list-heading-container">
          <h1 className="job-list-heading">Joblist</h1>
        </div>
      </div>
      <div className="job-list-second-container">
        <div className="job-list-second-text-container">
          <div className="job-list-second-heading-container">
            <h4 className="job-list-second-heading">Jobs Are Available</h4>
            <h1 className="job-list-second-heading-1">
              Job Recommendations You Might Need
            </h1>
          </div>
        </div>
        <div className="job-list-second-cards-container">
          {jobsList.map((eachJob) => (
            <div className="job-list-card-container" key={eachJob.id}>
              <div className="job-list-card-image-heading-container">
                <img
                  alt="financelogo"
                  className="job-list-card-image"
                  src={eachJob.jobLogo}
                />
                <h1 className="job-list-card-heading">{eachJob.jobId}</h1>
              </div>
              <div className="job-list-card-hr-container">
                <hr className="job-list-card-hr" />
              </div>
              <div className="job-list-card-details-main-contianer">
                <div className="job-list-card-location-container">
                  <FaLocationDot className="job-list-card-location-icon" />
                  <p>{eachJob.jobLocation}</p>
                </div>
                <div className="job-list-card-location-container">
                  <BiSolidTimeFive className="job-list-card-location-icon" />
                  <p>Full Time</p>
                </div>
              </div>
              <div className="job-list-card-description-container">
                <h1 className="job-list-card-role-name">{eachJob.jobTitle}</h1>
                <p className="job-list-card-role-description">
                  {eachJob.description}
                </p>
              </div>
              <div className="job-list-card-button-container">
                <button className="job-list-card-button">
                  <Link to={`/jobdetails/${eachJob.jobId}`}>Job details </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PlayBtnBanner />
      <OurServices />
    </div>
  );
};

export default JobList;

// {jobsList.map((eachJob) => (
//   <div className="job-list-card-container" key={eachJob.id}>
//     <div className="job-list-card-image-heading-container">
//       <img
//         alt="financelogo"
//         className="job-list-card-image"
//         src={eachJob.logo}
//       />
//       <h1 className="job-list-card-heading">{eachJob.company}</h1>
//     </div>
//     <div className="job-list-card-hr-container">
//       <hr className="job-list-card-hr" />
//     </div>
//     <div className="job-list-card-details-main-contianer">
//       <div className="job-list-card-location-container">
//         <FaLocationDot className="job-list-card-location-icon" />
//         <p>{eachJob.location}</p>
//       </div>
//       <div className="job-list-card-location-container">
//         <BiSolidTimeFive className="job-list-card-location-icon" />
//         <p>{eachJob.jobType}</p>
//       </div>
//     </div>
//     <div className="job-list-card-description-container">
//       <h1 className="job-list-card-role-name">{eachJob.role}</h1>
//       <p className="job-list-card-role-description">
//         {eachJob.description.substring(0, 70)}...
//       </p>
//     </div>
//     <div className="job-list-card-button-container">
//       <button className="job-list-card-button">
//         <Link to={`/jobdetails/${eachJob.id}`}>Job details </Link>
//       </button>
//     </div>
//   </div>
// ))}
