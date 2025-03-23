import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./home.css"; // Your global styles for the home page
import Menu from "../components/menu";
import ProjectSlider from "../components/projectSlider";
import HexagonBallAnimation from "../components/HexagonBallAnimation";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [cursorPosition, setCursorPosition] = useState({ x: -9999, y: -9999 });
  const animationFrame = useRef();
  const isRTL = i18n.language === "he"; // Check if current language is Hebrew

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    // Apply a body class for additional styling
    document.body.className = isRTL ? "rtl-body" : "ltr-body";
  }, [isRTL]);

  // Handle mouse movement for interactive overlay effects
  const handleMouseMove = (e) => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  };

  const handleTouchMove = (e) => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      const touch = e.touches[0];
      setCursorPosition({ x: touch.clientX, y: touch.clientY });
    });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: -9999, y: -9999 });
  };

  // CSS classes with RTL awareness
  const containerClass = `home-container ${isRTL ? "rtl" : "ltr"}`;
  const textAlignClass = isRTL ? "text-center" : "";

  return (
    <div
      className={containerClass}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
    >
      {/* Global Menu */}
      <Menu />

      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/DunkelBerlin/assets/background.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      {/* Overlay Image with DB Mask Effect */}
      <div
        className="overlay-image"
        style={{
          "--x": `${cursorPosition.x}px`,
          "--y": `${cursorPosition.y}px`,
        }}
      ></div>

      {/* Hero Section */}
      <section className={`hero-section ${textAlignClass}`}>
        <div className={`content-overlay ${textAlignClass}`}>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <a href="#about" className="cta-btn">
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Hexagon Animation Section */}
      <section className="animation-section">
        <div className="hexagon-animation-wrapper">
          <HexagonBallAnimation />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about-section ${textAlignClass}`}>
        <div className={`section-container ${textAlignClass}`}>
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`services-section ${textAlignClass}`}>
        <div className={`section-container ${textAlignClass}`}>
          <h2>{t('services.title')}</h2>
          <div className="services-grid">
            <div className={`service-card ${textAlignClass}`}>
              <h3>{t('services.webDev.title')}</h3>
              <p>{t('services.webDev.description')}</p>
            </div>
            <div className={`service-card ${textAlignClass}`}>
              <h3>{t('services.mobileApps.title')}</h3>
              <p>{t('services.mobileApps.description')}</p>
            </div>
            <div className={`service-card ${textAlignClass}`}>
              <h3>{t('services.uiUx.title')}</h3>
              <p>{t('services.uiUx.description')}</p>
            </div>
            <div className={`service-card ${textAlignClass}`}>
              <h3>{t('services.cloud.title')}</h3>
              <p>{t('services.cloud.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects-section ${textAlignClass}`}>
        <div className={`section-container ${textAlignClass}`}>
          <h2>{t('projects.title')}</h2>
          <ProjectSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`testimonials-section ${textAlignClass}`}>
        <div className={`section-container ${textAlignClass}`}>
          <h2>{t('testimonials.title')}</h2>
          <div className="testimonials-grid">
            <div className={`testimonial ${textAlignClass}`}>
              <p>{t('testimonials.client1.quote')}</p>
              <span>{t('testimonials.client1.name')}</span>
            </div>
            <div className={`testimonial ${textAlignClass}`}>
              <p>{t('testimonials.client2.quote')}</p>
              <span>{t('testimonials.client2.name')}</span>
            </div>
            <div className={`testimonial ${textAlignClass}`}>
              <p>{t('testimonials.client3.quote')}</p>
              <span>{t('testimonials.client3.name')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Extra Content Section */}
      <section className={`contact-section ${textAlignClass}`}>
        <div className={`section-container ${textAlignClass}`}>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
          <a href="/contact" className="cta-btn">
            {t('contact.cta')}
          </a>
        </div>
      </section>

      <section className={`extra-content-section ${textAlignClass}`}>
  <div className={`section-container ${textAlignClass}`}>
    <h2>{t('extraContent.title')}</h2>
    {t('extraContent.paragraphs', { returnObjects: true }).map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
</section>

      
    </div>
  );
};

export default Home;