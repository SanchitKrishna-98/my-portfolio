import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Projects() {
  // State to manage visibility of each project's details
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // Function to toggle the visibility of project 1
  const toggleProject1 = () => setIsOpen1(!isOpen1);

  // Function to toggle the visibility of project 2
  const toggleProject2 = () => setIsOpen2(!isOpen2);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project">
        <div className="project-header" onClick={toggleProject1}>
          <h3>WalkMate - ML-Enhanced Student Walking Companion</h3>
          <span>
            {isOpen1 ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        {isOpen1 && (
          <div className="project-details">
            <p>A machine learning-powered app for matching students with walking companions. Built with React, FastAPI, and AWS.</p>
            <p>Additional project details can go here, such as challenges faced, technology stack, and results achieved.</p>
          </div>
        )}
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-header" onClick={toggleProject2}>
          <h3>Color Suggestions Using Skin Tone Detection</h3>
          <span>
            {isOpen2 ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        {isOpen2 && (
          <div className="project-details">
            <p>Real-time skin tone detection for personalized clothing color recommendations. Built using OpenCV and PyTorch.</p>
            <p>Additional project details can go here, such as challenges faced, technology stack, and results achieved.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
