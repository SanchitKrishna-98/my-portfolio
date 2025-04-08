import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function TechnicalSkills() {
  const skills = {
    'Programming Languages': ['Python', 'Java'],
    'Full-Stack Development': ['Flask', 'REST API', 'Vue.js', 'React', 'HTML', 'CSS', 'JavaScript'],
    'Data & Analytics': ['MySQL', 'PostgreSQL', 'Power BI', 'Tableau'],
    'Tools & Frameworks': [
      'Cloudflare', 'AWS (EC2, S3, Lambda, DynamoDB, API Gateway)', 'Hadoop', 'HIVE', 'Spark',
      'TensorFlow', 'PyTorch', 'Keras', 'Kafka', 'Docker', 'Jira', 'Git', 'Pandas', 'Postman', 'Streamlit'
    ],
    'Testing & Automation': ['Eggplant', 'Selenium', 'TestNG', 'Cucumber', 'Appium']
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section className="technical-skills" id="technical-skills">
      <h2 className="technical-main-title">Technical Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, tags], index) => (
          <div className="skills-card" key={index}>
            <div className="skills-header" onClick={() => toggleSection(category)}>
              <h3>{category}</h3>
              <span
  className={`dropdown-icon ${openSections[category] ? 'open' : ''}`}
>
  {openSections[category] ? <FaChevronUp /> : <FaChevronDown />}
</span>
            </div>
            {openSections[category] && (
              <div className="skill-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalSkills;
