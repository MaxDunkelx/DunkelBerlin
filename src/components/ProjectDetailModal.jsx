import React from 'react';
import { motion } from 'framer-motion';
import './ProjectDetailModal.css';
import HexagonBallAnimation from './HexagonBallAnimation';

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="project-detail-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} className="modal-image" />
        
        {project.type === 'realestate' && (
          <>
            <p className="project-description">
              {project.detailedDescription ||
                `This real estate agency platform is designed to provide an all-in-one solution for buying, selling, and renting properties. It features interactive property sliders, detailed property listings, integrated reviews, and advanced search filters. The platform offers virtual tours, secure communication channels, and a dynamic mortgage calculator to give users a comprehensive view of available properties and their financing options. The user interface is optimized for both desktop and mobile devices, ensuring a seamless and immersive experience.`}
            </p>
            <p className="project-more">
              In addition, the site is built with performance and scalability in mind, integrating modern APIs and analytics to monitor user engagement. The real estate project stands as a testament to cutting-edge web design, high-quality multimedia integration, and robust backend functionality.
            </p>
          </>
        )}

        {project.type === 'portfolio' && (
          <>
            <p className="project-description">
              {project.detailedDescription ||
                `This portfolio project is a comprehensive showcase built for a computer science graduate eager to land a job in tech. The website features an elegant, modern design with an emphasis on clean typography, intuitive navigation, and responsive layouts. The portfolio highlights a variety of projects, including code samples, interactive demos, and case studies. It also includes sections for skills, education, professional experience, and personal interests, all presented with dynamic animations and subtle micro-interactions that enhance the user experience.`}
            </p>
            <p className="project-more">
              {`The portfolio goes into extensive detail over several pages, covering every aspect of the candidate’s professional journey. It features in-depth project case studies that explain the challenges, technologies used, design decisions, and the outcomes of each project. This level of detail demonstrates not only technical expertise but also a clear narrative that speaks to problem-solving skills and a passion for innovation. Each section is carefully crafted to engage potential employers, providing both visual and textual evidence of the candidate’s capabilities. The site is optimized for performance and accessibility, ensuring a smooth and engaging experience on any device. It also includes interactive elements that allow visitors to explore the candidate’s work through immersive animations and a unique, physics-based demonstration below—a ball endlessly bouncing within a hexagon, symbolizing creative energy and continuous improvement.`}
            </p>
            <div className="animation-section">
              <h3>Cool Animation: Ball in a Hexagon</h3>
              <HexagonBallAnimation />
            </div>
          </>
        )}

        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
