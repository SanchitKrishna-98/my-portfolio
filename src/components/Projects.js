import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaGithub} from 'react-icons/fa';

function Projects() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleProject1 = () => setIsOpen1(!isOpen1);
  const toggleProject2 = () => setIsOpen2(!isOpen2);

  return (
    <section className="projects" id="projects">
      <h2>
        Projects
      </h2>

      {/* Project 1 */}
      <div className="project">
        <div className="project-header" onClick={toggleProject1}>
          <h3>WalkMate - ML-Enhanced Student Walking Companion</h3>
          <span>{isOpen1 ? <FaReact /> : <FaNodeJs />}</span>
        </div>
        {isOpen1 && (
          <div className="project-details">
            <p>
              A machine learning-powered app for matching students with walking companions.
              Built with React, FastAPI, and AWS.
            </p>
            <a href="https://github.com/your-username/WalkMate" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        )}
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-header" onClick={toggleProject2}>
          <h3>Color Suggestions Using Skin Tone Detection</h3>
          <span>{isOpen2 ? <FaReact /> : <FaNodeJs />}</span>
        </div>
        {isOpen2 && (
          <div className="project-details">
            <p>
              Real-time skin tone detection for personalized clothing color recommendations.
              Built using OpenCV and PyTorch.
            </p>
            <a href="https://github.com/your-username/SkinToneColorRecommendation" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
