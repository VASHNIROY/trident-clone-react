import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import JobList from "./Components/JobsList/JobList";
import Services from "./Components/Services/Services";
import JobDetail from "./Components/JobDetail/JobDetail";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services/Services";
import Team from "./Components/Team";
import JobList from "./Components/JobsList/JobList";
import ContactUs from "./Components/Contactus";
import Pricing from "./Components/Pricing";
import Template from "./Components/pricingCards";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
