import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function TechnicalSkills() {
  const skills = {
    'Programming Languages & Scripting': [
      'Python', 'Java', 'C', 'R', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'OOPs', 'Bash'
    ],
    'Web & Full-Stack Development': [
      'Vue.js', 'React', 'Angular', 'Flask', 'REST APIs', 'FAST APIs'
    ],
    'Machine Learning & Deep Learning': [
      'scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Statsmodels',
      'Pandas', 'NumPy', 'Streamlit'
    ],
    'Data Engineering & Cloud': [
      'Apache NiFi', 'Apache Kafka', 'Apache Spark', 'Hadoop', 'Hive',
      'AWS (Lambda, EC2, S3)', 'GCP (BigQuery, Cloud Storage – basic)', 'Docker'
    ],
    'Databases & BI Tools': [
      'MySQL', 'PostgreSQL', 'MongoDB', 'Matplotlib', 'Seaborn', 'Plotly', 
      'Tableau', 'Power BI', 'ggplot2', 'Domo'
    ],
    'Tools & Platforms': [
      'Git', 'GitHub', 'Postman', 'Jira', 'Confluence', 'Linux', 'Agile/Scrum'
    ],
    'Testing & Automation': [
      'Eggplant', 'Selenium', 'TestNG', 'Cucumber', 'Appium'
    ],
    'Programming & Statistical Tools': [
      'Jupyter Notebook', 'Visual Studio Code', 'Anaconda', 'RStudio'
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
