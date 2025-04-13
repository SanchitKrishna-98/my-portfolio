import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  process.env.PUBLIC_URL + '/certs/Dalbir_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Dan_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Marty_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Poo_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Nisha_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Vignesh_recognition-1.png',
  process.env.PUBLIC_URL + '/certs/Expert.png',
  process.env.PUBLIC_URL + '/certs/Genius.png',
];

function AwardsAndInvolvement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="awards-involvement" id="awards-involvement">
      <h2 className="awards-heading">Awards and Involvement</h2>

      <div className="achievements-box">
  <ul>
    <li>Trimble Bravo Award (6x) – Recognized for project excellence.</li>
    <li>Winner – Poster Presentations, Tech Quizzes (200+ participants).</li>
    <li>Completed Eggplant Certification - Expert and Genius Levels</li>
    <li>
      Educational Blog –{' '}
      <a
        href="https://www.youjustcode.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="youjustcode-link"
      >
        youjustcode.uk <FaExternalLinkAlt style={{ marginLeft: '4px', fontSize: '0.9rem' }} />
      </a>
    </li>
  </ul>
</div>

      <div className="auto-carousel">
        <img
          src={certificates[currentIndex]}
          alt={`Certificate ${currentIndex + 1}`}
          className="full-cert-image"
        />
      </div>
    </section>
  );
}

export default AwardsAndInvolvement;
