import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Education() {
  const [isMasterCoursesOpen, setMasterCoursesOpen] = useState(false);
  const [isBachelorCoursesOpen, setBachelorCoursesOpen] = useState(false);

  const toggleMasterCourses = () => setMasterCoursesOpen(!isMasterCoursesOpen);
  const toggleBachelorCourses = () => setBachelorCoursesOpen(!isBachelorCoursesOpen);

  return (
    <section className="education" id="education">
      <h2> Education</h2>

      {/* Master of Science Degree */}
      <div className="education-item">
        <h3><FaGraduationCap /> Master of Science in Computer Science</h3>
        <p><FaUniversity /> University at Buffalo</p>
        <p>Expected Graduation: May 2025</p>

        {/* Dropdown for courses */}
        <div className="course-dropdown" onClick={toggleMasterCourses}>
          <span>Click to see courses</span>
          {isMasterCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isMasterCoursesOpen && (
          <ul className="course-list">
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Database Systems</li>
          </ul>
        )}
      </div>

      {/* Bachelor of Engineering Degree */}
      <div className="education-item">
        <h3><FaGraduationCap /> Bachelor of Engineering in Electronics and Communication Engineering</h3>
        <p><FaUniversity /> Sri Ramakrishna Engineering College affiliated to Anna University</p>
        <p>Graduated: May 2021</p>

        {/* Dropdown for courses */}
        <div className="course-dropdown" onClick={toggleBachelorCourses}>
          <span>Click to see courses</span>
          {isBachelorCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isBachelorCoursesOpen && (
          <ul className="course-list">
            <li>Analog Electronics</li>
            <li>Digital Logic Design</li>
            <li>Microprocessors</li>
            <li>Communication Systems</li>
            <li>Control Systems</li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Education;
