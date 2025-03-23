import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/home";

// Import these pages when you create them
// import AboutUs from "./pages/aboutUs";
// import OurServices from "./pages/ourServices";
// import OurProjects from "./pages/ourProjects";
// import ContactUs from "./pages/contactUs";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Set document direction on initial load and route change
  useEffect(() => {
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language, location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add these routes when you create the components */}
      {/* <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/our-projects" element={<OurProjects />} />
      <Route path="/contact-us" element={<ContactUs />} /> */}
      
      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;