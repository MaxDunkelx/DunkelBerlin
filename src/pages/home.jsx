import React, { useState, useRef } from "react";
import "./home.css"; // Your global styles for the home page
import Menu from "../components/menu";
import ProjectSlider from "../components/projectSlider";
import HexagonBallAnimation from "../components/HexagonBallAnimation";

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -9999, y: -9999 });
  const animationFrame = useRef();

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

  return (
    <div
      className="home-container"
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
      <section className="hero-section">
        <div className="content-overlay">
          <h1>Innovative Software Solutions</h1>
          <p>
            We develop cutting-edge applications and websites while offering
            complete software solutions—from design to deployment. Experience the
            future of technology with us.
          </p>
          <a href="#about" className="cta-btn">
            Learn More
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
      <section id="about" className="about-section">
        <div className="section-container">
          <h2>About Us</h2>
          <p>
            We are a high-tech company that offers comprehensive digital solutions.
            Our team combines expertise in design, development, and strategy to create
            products that drive business success. With years of experience, we stay
            ahead of trends and continuously innovate to meet the evolving demands of
            the market.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Cutting-edge responsive websites tailored to your business needs.
              </p>
            </div>
            <div className="service-card">
              <h3>Mobile Apps</h3>
              <p>
                Innovative mobile applications designed for performance and user
                engagement.
              </p>
            </div>
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Elegant and intuitive designs that enhance user experience.
              </p>
            </div>
            <div className="service-card">
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud-based platforms that empower your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2>Our Projects</h2>
          <ProjectSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "The team delivered beyond expectations. Their innovative approach and
                attention to detail transformed our digital presence."
              </p>
              <span>- Client Romano-Exp</span>
            </div>
            <div className="testimonial">
              <p>
                "Professional, creative, and efficient—highly recommended for any business
                looking to elevate their brand."
              </p>
              <span>- Client Max dunkel</span>
            </div>
            <div className="testimonial">
              <p>
                "A truly transformative experience. Our project was handled with utmost
                professionalism."
              </p>
              <span>- Client Motor Indestries Jerusalem</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Extra Content Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2>Get In Touch</h2>
          <p>
            Ready to take your digital experience to the next level? Contact us today
            and let’s build something extraordinary.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section>

      {/* Extra Content for Scrolling */}
      <div className="extra-content">
        <h2>More Information</h2>
        <p>
          This extra section is added to allow scrolling. Replace this content with
          your actual sections as needed.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan
          consequat ligula, et hendrerit libero dapibus a. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Vivamus sollicitudin, metus non gravida congue, massa libero maximus velit,
          ac sagittis elit tellus ac elit. Sed sit amet ligula a erat viverra aliquam.
        </p>
      </div>
    </div>
  );
};

export default Home;
