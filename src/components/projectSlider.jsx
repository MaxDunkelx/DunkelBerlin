import React, { useState } from "react";
import "./ProjectSlider.css";
import HexagonBallAnimation from "./HexagonBallAnimation"; // Ensure this file exists if using the animation

const projects = [
  {
    id: 1,
    name: "Real Estate Pro",
    type: "realestate",
    logo: "/DunkelBerlin/assets/project1.PNG",
    image: "/DunkelBerlin/assets/project1.PNG",
    detailedDescription:
      "A cutting-edge real estate agency platform offering dynamic property listings, virtual tours, and integrated mortgage tools. Designed to provide an immersive experience for both buyers and sellers. It integrates advanced search filters, interactive property maps, and virtual tours, ensuring that users find their ideal property quickly and efficiently. The platform also includes client testimonials, detailed property information, neighborhood insights, and pricing trends.",
    url: "https://maxdunkelx.github.io/Romano-Exp/"
  },
  {
    id: 2,
    name: "Portfolio Plus",
    type: "portfolio",
    logo: "/DunkelBerlin/assets/project2.PNG",
    image: "/DunkelBerlin/assets/project2.PNG",
    detailedDescription:
      "A full-scale portfolio website showcasing projects, skills, and professional achievements of a computer science graduate. The site is designed with an innovative layout, interactive elements, and in-depth project case studies that span multiple pages. It is fully responsive and optimized for performance, ensuring a smooth experience on all devices. The portfolio tells a story of technical expertise and creative problem solving, engaging potential employers with immersive content and a standout visual design.",
    url: "https://my-new-portfolio-teal-nine.vercel.app"
  }
  // Additional projects...
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="project-slider">
      <div className="slider-controls">
        <button onClick={prevProject} className="slider-btn">Prev</button>
        <button onClick={nextProject} className="slider-btn">Next</button>
      </div>
      <div className="project-slide">
        <div className="project-image-container">
          <img
            src={currentProject.logo}
            alt={currentProject.name}
            className="project-image"
            onClick={() => openProject(currentProject)}
          />
        </div>
        <h2 className="project-name">{currentProject.name}</h2>
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeProject}>&times;</span>
            <h2>{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />
            <p className="project-description">
              {selectedProject.detailedDescription}
            </p>
            {selectedProject.type === "portfolio" && (
              <div className="animation-section">
                <h3>Cool Animation: Ball in a Hexagon</h3>
                <HexagonBallAnimation />
              </div>
            )}
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
