import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Education() {
  const [isMasterCoursesOpen, setMasterCoursesOpen] = useState(false);
  const [isBachelorCoursesOpen, setBachelorCoursesOpen] = useState(false);

  const toggleMasterCourses = () => setMasterCoursesOpen(!isMasterCoursesOpen);
  const toggleBachelorCourses = () => setBachelorCoursesOpen(!isBachelorCoursesOpen);

  const masterCourses = [
    "Algorithms Analysis & Design 1", "Intro to Machine Learning", "Deep Learning", "Reinforcement Learning",
    "Data Models Query Language", "Data Intensive Computing", "Computer Vision & Image Processing", "Operating Systems",
    "Computer Security", "Statistical Data Mining I"
  ];

  const bachelorCourses = [
    "Programming in C", "Data Structures", "Cyber Security", "OOPs", "Project and Finance Management"
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>
  
      {/* Master of Science Degree */}
      <div className="education-card">
        <div className="card-header">
          <h3><FaGraduationCap /> Master of Science in Computer Science</h3>
          <p><FaUniversity /> University at Buffalo, SUNY | Buffalo, NY</p>
          <p>Graduated: May 2025</p>
        </div>
  
        <div className="course-dropdown" onClick={toggleMasterCourses}>
          <span>Related courses</span>
          {isMasterCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
  
        {isMasterCoursesOpen && (
          <div className="course-tags">
            {masterCourses.map((course, index) => (
              <span className="course-tag" key={index}>{course}</span>
            ))}
          </div>
        )}
      </div>
  
      {/* Bachelor of Engineering Degree */}
      <div className="education-card">
        <div className="card-header">
          <h3><FaGraduationCap /> Bachelor of Engineering in Electronics and Communication Engineering</h3>
          <p><FaUniversity /> Anna University | India</p>
          <p>Graduated: May 2021</p>
        </div>
  
        <div className="course-dropdown" onClick={toggleBachelorCourses}>
          <span>Related courses</span>
          {isBachelorCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
  
        {isBachelorCoursesOpen && (
          <div className="course-tags">
            {bachelorCourses.map((course, index) => (
              <span className="course-tag" key={index}>{course}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );  
}

export default Education;
