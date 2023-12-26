import React, { useState } from "react";
import "./index.css";
import Fade from "react-reveal/Fade";

const apiurl = process.env.REACT_APP_API_DOMAIN_URL;

export function ContactusForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const api = `${apiurl}api-contact-us`;
    console.log(api);
    //   process.env.REACT_APP_API_BASE_URL;
    console.log("Form Data:", formData);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "5a544978596d59324d4749355a4749354e3249784e4445784d3251315a546c6a595451314d445a684e47493d",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(api, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    console.log("response");
    console.log(response);
    const data = await response.json();
    console.log(data);

    // For demonstration purposes, logging the formData to the console

    // Reset the form after submission if needed
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Fade bottom>
      <div className="contactus-form-main-contianer">
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "start",
            marginLeft: "10%",
            marginTop: "5%",
          }}
        >
          Have Anything To Ask ?
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contactus-form-input-element"
          placeholder="Your Name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contactus-form-input-element"
          placeholder="Your Email"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="contactus-form-input-element"
          placeholder="Subject"
        />

        <textarea
          style={{ height: "250px" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contactus-form-input-element mb-3"
          placeholder="Your message here"
        />
        <button onClick={handleSubmit} className="contactus-form-submit-btn">
          Submit Now
        </button>
      </div>
    </Fade>
  );
}
