import "./index.css";

export function FAQForm() {
  return (
    <div className="home-faq-form-main-contianer mb-5">
      <h1 style={{fontWeight: 'bold', fontSize: '25px', textAlign: 'start', marginLeft: '10%', marginTop: '5%'}}>Have Anything To Ask ?</h1>
      <input
        type="text"
        className="home-faq-form-input-element"
        placeholder="Your Name"
      />
      <input
        type="text"
        className="home-faq-form-input-element"
        placeholder="Your Email"
      />
      <input
        type="text"
        className="home-faq-form-input-element"
        placeholder="Subject"
      />

      <textarea
        style={{ height: "250px" }}
        className="home-faq-form-input-element mb-3"
        placeholder="Your message here"
      />
      <button className="home-faq-form-submit-btn">Submit Now</button>
    </div>
  );
}
