import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function TechnicalSkills() {
  const skills = {
    'Programming & Scripting': [
      'Python', 'Java', 'C', 'R', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'Bash'
    ],
    'Web & Full-Stack Development': [
      'React', 'Vue.js', 'Flask', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'
    ],
    'Data Engineering & Big Data': [
      'Apache NiFi', 'Apache Kafka', 'Apache Spark', 'Hadoop', 'Hive',
      'Docker', 'AWS (Lambda, EC2, S3)', 'GCP (BigQuery, Cloud Storage – basic)'
    ],
    'Machine Learning & Analytics': [
      'scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Streamlit',
      'Pandas', 'NumPy', 'Statsmodels'
    ],
    'Databases & Visualization': [
      'MySQL', 'PostgreSQL', 'MongoDB', 'Matplotlib', 'Seaborn',
      'Tableau', 'Power BI', 'Plotly', 'ggplot2', 'Domo'
    ],
    'Programming & Statistical Tools': [
      'Jupyter Notebook', 'Visula Studio code', 'Anaconda', 'RStudio'
    ],
    'Tools & Platforms': [
      'Git', 'GitHub', 'Postman', 'Jira', 'Confluence', 'Linux', 'Agile/Scrum'
    ],
    'Testing & Automation': [
      'Eggplant', 'Selenium', 'TestNG', 'Cucumber', 'Appium'
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
          <div className="skills-card" key={index}>
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
