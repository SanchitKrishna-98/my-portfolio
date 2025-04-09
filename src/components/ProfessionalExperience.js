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
              "Built a Vue.js interface for precision path planning with AutoSync integration to connected farm cloud systems, boosting user acquisition for agricultural leaders like John Deere, Case IH, and Horsch.",
              "Contributed in the development of the Vue Field Manager for Trimble Agriculture Solutions, which turned out to be a driving factor in a $2 billion joint venture between AGCO and Trimble.",
              "Deployed a React and AWS-based interview management dashboard (Lambda, API gateway, Dynamo DB), cutting administrative tasks by 50% and improving internal workflow efficiency."
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
        <p><em>Dec 2020 - Aug 2023</em></p>

        <div className="career-dropdown" onClick={() => setExperience2Open(!isExperience2Open)}>
  <span>My Contributions</span>
  {isExperience2Open
    ? <FaChevronUp style={{ color: '#ff6347' }} />
    : <FaChevronDown style={{ color: '#007bff' }} />}
</div>


        {isExperience2Open && (
          <ul className="career-list">
            {[
              "Engineered a “Smart Call Center” dashboard for a U.S. telecom client using Vue.js and Python Flask, achieving a 35% reduction in customer response time.",
              "Integrated NLTK and Google’s Speech-to-Text API for sentiment analysis, attaining 88% accuracy, and successfully presented the solution to the CEO and stakeholders.",
              "Utilized Flask to build RESTful APIs, and integrated it with Vue.js to deliver seamless user experiences for telecom clients."
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
