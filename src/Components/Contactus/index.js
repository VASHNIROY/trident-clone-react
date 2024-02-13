import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./index.css";
import { ContactusForm } from "../ContactusForm";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-us-page-main-container">
      <div className="contact-nav-first-container">
        <div className="contact-nav-heading-container">
          <h1 className="contact-nav-heading">Contact Us</h1>
        </div>
      </div>
      <div className="contactus-form-details-main-container">
        <ContactusForm />

        <div className="home-whychooseuscontactus-main-container">
          <div className="home-whychooseuscontactus-mini-container">
            <div className="home-whychooseuscontactus-content-container">
              <div className="home-whychooseuscontactus-content-data-container">
                <div className="pt-4 home-whychooseuscontactus-content-data-container-side-heading ">
                  Contact Us
                </div>
                <div className="contactus-content-heading">
                  Contact Us It's Easy
                </div>
                <p>
                  For HR recruitment inquiries, please reach out to us at
                  hr@srm360consulting.com. If you have queries related to
                  student visas, kindly contact us at info@srm360consulting.com.
                  We appreciate your interest and will respond to your emails at
                  the earliest convenience. Thank you for choosing SRM360
                  Consulting.
                </p>
              </div>
              <div className="home-whychooseuscontactus-points-container">
                <div className="home-whychooseuscontactus-point-container">
                  <div className="home-whychooseuscontactus-count-num-container">
                    <div className="contactus-call-icon-container">
                      <IoCall className="contactus-call-icon" />
                    </div>
                  </div>
                  <div>
                    <h1 className="home-whychooseuscontactus-point-heading">
                      Phone Number
                    </h1>
                    <p>+91 9966992207</p>
                  </div>
                </div>
                <div className="home-whychooseuscontactus-point-container">
                  <div className="home-whychooseuscontactus-count-num-container">
                    <div className="contactus-call-icon-container">
                      <MdEmail className="contactus-call-icon" />
                    </div>
                  </div>
                  <div>
                    <h1 className="home-whychooseuscontactus-point-heading">
                      Our Email
                    </h1>
                    <p>hr@srm360consulting.com</p>
                  </div>
                </div>
                <div className="home-whychooseuscontactus-point-container">
                  <div className="home-whychooseuscontactus-count-num-container">
                    <div className="contactus-call-icon-container">
                      <FaLocationDot className="contactus-call-icon" />
                    </div>
                  </div>
                  <div>
                    <h1 className="home-whychooseuscontactus-point-heading">
                      Address
                    </h1>
                    <p>
                      Cyber Space Building, 5th Floor, Madhapur Hi-Tech City,
                      500081
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
