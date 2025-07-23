import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

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
      <div className="project-card animated" style={{ animationDelay: `0s` }}>
        <h3>
          <FaTrophy style={{ color: '#ffb300', marginRight: 8, verticalAlign: 'middle' }} />
          Recognition, Competitions & Community
        </h3>
        <ul className="awards-list">
          <li>
            <strong>Trimble Bravo Award (6×)</strong> – Recognized six times for delivering high-impact projects under tight deadlines, consistently exceeding expectations on priority tasks and stretch goals.
          </li>
          <li>
            <strong>Winner</strong> – Poster Presentations, Tech Quizzes (200+ participants).
          </li>
          <li>
            <strong>Completed Eggplant Certification</strong> - Expert and Genius Levels
          </li>
          <li>
            <strong>Educational Blog</strong> –{' '}
            <a
              href="https://www.youjustcode.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="youjustcode-link"
            >
              youjustcode.uk{' '}
              <FaExternalLinkAlt style={{ marginLeft: '4px', fontSize: '0.9rem', verticalAlign: 'middle' }} />
            </a>
          </li>
        </ul>
        <div className="auto-carousel" style={{ textAlign: 'center', marginTop: '1.2em' }}>
          <img
            src={certificates[currentIndex]}
            alt={`Certificate ${currentIndex + 1}`}
            className="full-cert-image"
            style={{
              maxWidth: '320px',
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              margin: '0 auto'
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AwardsAndInvolvement;
