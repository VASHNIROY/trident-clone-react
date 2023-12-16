import React from "react";
import companylogo from "../images/copywriter-logo.png";

const jobDetailList = [
  {
    id: 0,
    logo: companylogo,
    location: "Singapura",
    jobType: "Full Time",
    role: "Frontend Developer",
    jobdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    salary: "$100k",
    q1: "What Is Frontend Developer ?",
    ans1: "Nulla ultrices lacinia orci, non gravida nisl malesuada sed. Curabitur enim orci, rutrum et imperdiet ac, iaculis nec tellus. Praesent molestie, odio ac ultrices tristique, nisl tortor tristique augue, sit amet sagittis velit lorem eu lectus. Sed non nisl non ex feugiat vulputate eget non urna. Nullam in ligula magna.",
    q2: "What Does A Cost Frontend Do?",
    ans2: "Etiam bibendum nisl rhoncus, mollis nisi sed, porta magna. Morbi placerat odio ac nunc vulputate, vel placerat nisi consectetur.Nunc hendrerit ex ipsum, sit amet consectetur risus gravida quis duis nec massa ultricies.",
    inclueList: {
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
    },
    img: "image",
    responsibilites: [
      {
        id: 0,
        value:
          "Use markup languages like HTML to create user-friendly web pages",
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
        value:
          "Get feedback from, and build solutions for, users and customers",
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
  },
];

const JobDetail = () => {
  return (
    <div className="job-detail-main-container">
      <div className="job-detail-first-container">
        <h1>Job Detail</h1>
      </div>
    </div>
  );
};

export default JobDetail;
