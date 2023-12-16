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
      {/* <Navbar /> */}
      {/* <HomePage /> */}
      {/* <Footer /> */}
      {/* <JobList /> */}
      {/* <Services /> */}
      <JobDetail />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
