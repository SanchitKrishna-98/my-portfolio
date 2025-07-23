import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function TechnicalSkills() {
  const skills = {
    'Programming Languages': [
      'Python', 'Java', 'SQL', 'JavaScript'
    ],
    'Web & Backend Development': [
      'React.js', 'Vue.js', 'Angular.js', 'Flask', 'FastAPI', 'Node.js', 'REST APIs', 'HTML5', 'CSS3', 'OOPs'
    ],
    'Cloud & DevOps': [
      'AWS', 'Docker', 'Git', 'Linux', 'CI/CD'
    ],
    'Databases': [
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'
    ],
    'Tools & Methodologies': [
      'Postman', 'Jira', 'Confluence', 'Agile/Scrum'
    ]
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
          <div className="skills-card project-card" key={index}>
            <div className="skills-header" onClick={() => toggleSection(category)}>
              <h3>{category}</h3>
              <span className={`dropdown-icon ${openSections[category] ? 'open' : ''}`}>
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
