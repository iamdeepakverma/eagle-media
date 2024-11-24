import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainServices from "./comoponents/Service/MainServices";
import Footer from "./comoponents/Footer/Footer";
import Navbar from "./comoponents/Navbar/Navbar";
import Home from "./comoponents/Home/Home";
import About from "./comoponents/About/About";
import MainContact from "./comoponents/ContactUs/MainContact";

function App() {
  return (
    <div className="min-h-screen bg-[#F3F1F6]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<MainServices/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<MainContact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
