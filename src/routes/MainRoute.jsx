import { Route, Routes } from "react-router-dom";

import About from "../pages/About";

import Contact from "../pages/Contact";
import Reveal from "../pages/reveal";
import PageNotFound from "../pages/PageNotFound";
import Work from "../pages/Work";
import ComingSoon from "../pages/ComingSoon";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Reveal />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
       <Route path="*" element={<PageNotFound/>} />
       <Route path="coming" element={<ComingSoon/>} />
     
    </Routes>
  );
};

export default Mainroutes;
