import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div>
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
