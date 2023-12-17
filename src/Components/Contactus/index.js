import { FAQForm } from "../Home/FAQForm";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page-main-container">
      <div className="contact-nav-first-container">
        <div className="contact-nav-heading-container">
          <h1 className="contact-nav-heading">Contact Us</h1>
        </div>
      </div>
      <div className="contactus-form-details-main-container">
        <FAQForm />

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
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
                    <p>+123 456 789</p>
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
                    <p>SRM360@gmail.com</p>
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
                    <p>+123 456 789</p>
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
