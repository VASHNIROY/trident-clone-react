import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import JobList from "./Components/JobsList/JobList";
import Services from "./Components/Services/Services";
import JobDetail from "./Components/JobDetail/JobDetail";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/jobdetails" element={<JobDetail />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
