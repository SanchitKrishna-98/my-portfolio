import React from 'react';
import { FaLinkedin, FaGithub, FaRocket, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1><FaRocket size={40} /> Welcome to My Portfolio!!</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#education">Education</a></li>
          <li><a href="#professional-experience">Experience</a></li>
          <li><a href="#technical-skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sanandraj/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/SanchitKrishna-98" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="mailto:asanchitkrishna@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
