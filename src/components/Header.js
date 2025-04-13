import React from 'react';
import { FaLinkedin, FaGithub, FaRocket, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1>
          <FaRocket size={25} /> Hello, World! Meet my work — crafted with code and creativity.
        </h1>
      </div>
      <nav>
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/sanandraj/" 
            target="_blank" 
            rel="noopener noreferrer"
            data-tooltip="Connect on LinkedIn"
          >
            <FaLinkedin size={25} />
          </a>
          <a 
            href="https://github.com/SanchitKrishna-98" 
            target="_blank" 
            rel="noopener noreferrer"
            data-tooltip="View GitHub"
          >
            <FaGithub size={25} />
          </a>
          <a 
            href="mailto:asanchitkrishna@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            data-tooltip="Email Me"
          >
            <FaEnvelope size={25} />
          </a>
          <a 
            href="https://drive.google.com/file/d/1feTwFGh9bo_6PvEkF2PEr9AxH7a5jJVW/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            data-tooltip="View Resume"
          >
            <FaFileAlt size={25} />
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#education">Education</a></li>
          <li><a href="#professional-experience">Experience</a></li>
          <li><a href="#technical-skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
