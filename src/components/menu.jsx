import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  return (
    <div
      className={`menu-bar ${isCollapsed ? "collapsed" : ""}`}
      onClick={isCollapsed ? toggleMenu : undefined}
    >
      <div className={`menu-buttons ${isCollapsed ? "hidden" : ""}`}>
        <button onClick={() => navigate("/contact-us")}>Contact Us</button>
        <button onClick={() => navigate("/our-projects")}>Our Projects</button>
        <button onClick={() => navigate("/about-us")}>About Us</button>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/our-services")}>Our Services</button>
      </div>
    </div>
  );
};

export default Menu;
