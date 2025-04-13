import React, { useState } from 'react';
import { FaBriefcase, FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ProfessionalExperience() {
  const [isExperience1Open, setExperience1Open] = useState(false);
  const [isExperience2Open, setExperience2Open] = useState(false);

  return (
    <section className="professional-experience" id="professional-experience">
      <h2> Professional Experience</h2>

      {/* Trimble */}
      <div className="experience-item">
        <h3><FaBriefcase size={30} /> Software Development Engineer</h3>
        <p><strong>Trimble Inc.</strong> - Chennai, India</p>
        <p><em>Oct 2021 - Dec 2023</em></p>

        <div className="career-dropdown" onClick={() => setExperience1Open(!isExperience1Open)}>
  <span>My Contributions</span>
  {isExperience1Open ? <FaChevronUp style={{ color: '#ff6347' }} /> : <FaChevronDown />}
</div>


        {isExperience1Open && (
          <ul className="career-list">
            {[
              "Collaborated cross-functionally to design a scalable Vue.js interface for precision path planning using MapLibre and Trimble’s ALK tile server, visualizing real-time GeoJSON paths for autonomous tractors and streamlining deployments through CI/CD pipelines — driving adoption by AGCO, John Deere, Case IH, and Horsch.",
              "Architected and developed the Vue.js - based Field Manager for Trimble Agriculture, integrating TileServer APIs to render map data with features like guidance lines, landmarks, and task overlays—part of AGCO's $2B acquisition.",
              "Developed and deployed a metrics-driven analytics dashboard using AWS (Lambda, API Gateway, DynamoDB), automating reporting workflows and saving over 15 hours of manual effort per month.",
              "Designed interactive sprint performance dashboards by integrating Jira data into Domo, enabling automated visualization and reporting of sprint metrics for agile project tracking."
            ].map((text, i) => (
              <li key={i} className="list-item fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
                <span className="arrow">→</span> {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Payoda */}
      <div className="experience-item">
        <h3><FaLaptopCode size={30} /> Software Engineer Intern</h3>
        <p><strong>Payoda Inc.</strong> - Coimbatore, India</p>
        <p><em>Dec 2020 - Aug 2021</em></p>

        <div className="career-dropdown" onClick={() => setExperience2Open(!isExperience2Open)}>
  <span>My Contributions</span>
  {isExperience2Open
    ? <FaChevronUp style={{ color: '#ff6347' }} />
    : <FaChevronDown style={{ color: '#007bff' }} />}
</div>


        {isExperience2Open && (
          <ul className="career-list">
            {[
              "Created and designed a “Smart Call Center” dashboard for a telecom client using Flask and Vue.js, reducing customer response time by ≅35%.",
              "Integrated a sentiment analysis pipeline using NLTK and Google’s Speech-to-Text API with 88% accuracy; presented the solution to the CEO and stakeholders.",
              "Engineered a Kafka-based streaming pipeline processing 100K+ events/day, reducing latency by 60% and enhancing system throughput and fault tolerance."
            ].map((text, i) => (
              <li key={i} className="list-item fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
                <span className="arrow">→</span> {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default ProfessionalExperience;
