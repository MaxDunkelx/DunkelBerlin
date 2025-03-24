import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsCollapsed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Store the language preference in localStorage
    localStorage.setItem("i18nextLng", lng);
    // Set the document direction based on language
    document.documentElement.dir = lng === "he" ? "rtl" : "ltr";
  };

  return (
    <div
      className={`menu-bar ${isCollapsed ? "collapsed" : ""}`}
      onClick={isCollapsed ? toggleMenu : undefined}
    >
      <div className={`menu-buttons ${isCollapsed ? "hidden" : ""}`}>
        <button onClick={() => navigate("/contact-us")}>{t('menu.contactUs')}</button>
        <button onClick={() => navigate("/our-projects")}>{t('menu.ourProjects')}</button>
        <button onClick={() => navigate("/about-us")}>{t('menu.aboutUs')}</button>
        <button onClick={() => navigate("/")}>{t('menu.home')}</button>
        <button onClick={() => navigate("/our-services")}>{t('menu.ourServices')}</button>
        
        {/* Language switcher */}
      {/* Language switcher */}
{/* Language switcher */}
<div className="language-switcher">
  <button
    onClick={() => changeLanguage("en")}
    className={i18n.language === "en" ? "active" : ""}
  >
    <img src="https://flagcdn.com/w40/us.png" alt="English" width="24" height="18" />
  </button>
  <button
    onClick={() => changeLanguage("he")}
    className={i18n.language === "he" ? "active" : ""}
  >
    <img src="https://flagcdn.com/w40/il.png" alt="Hebrew" width="24" height="18" />
  </button>
</div>


      </div>
    </div>
  );
};

export default Menu;