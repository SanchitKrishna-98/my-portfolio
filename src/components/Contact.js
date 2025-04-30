import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Contact Me
      </h2>
      <div className="contact-info">
        <p>
          Feel free to reach out to me at{' '}
          <span className="highlight">
            <a
              href="mailto:asanchitkrishna@gmail.com"
              className="contact-link"
            >
              <FaEnvelope size={20} /> asanchitkrishna@gmail.com
            </a>
          </span>
        </p>
        <p>
          Connect on{' '}
          <a
            href="https://www.linkedin.com/in/sanandraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </p>
        <p>
          Visit my{' '}
          <a
            href="https://github.com/SanchitKrishna-98"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </p>
        <p>
          View my resume{' '}
          <a
            href="https://drive.google.com/file/d/1NJz3S0C-Tq6owN6Sl5bz5kEPcShzIVbD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaFileAlt size={20} /> Resume
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
