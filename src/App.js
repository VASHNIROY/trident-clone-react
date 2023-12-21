import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import JobList from "./Components/JobsList/JobList";
import Services from "./Components/Services/Services";
import JobDetail from "./Components/JobDetail/JobDetail";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Team from "./Components/Team";
import ContactUs from "./Components/Contactus";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/jobdetails/:id" element={<JobDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
