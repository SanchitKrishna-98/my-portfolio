import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Education() {
  const [isMasterCoursesOpen, setMasterCoursesOpen] = useState(false);
  const [isBachelorCoursesOpen, setBachelorCoursesOpen] = useState(false);

  const toggleMasterCourses = () => setMasterCoursesOpen(!isMasterCoursesOpen);
  const toggleBachelorCourses = () => setBachelorCoursesOpen(!isBachelorCoursesOpen);

  return (
    <section className="education" id="education">
      <h2>Education</h2>

      {/* Master of Science Degree */}
      <div className="education-item">
        <h3><FaGraduationCap /> Master of Science in Computer Science</h3>
        <p><FaUniversity /> University at Buffalo, SUNY | Buffalo, NY</p>
        <p>Expected Graduation: May 2025</p>

        <div className="course-dropdown" onClick={toggleMasterCourses}>
          <span>Related courses</span>
          {isMasterCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isMasterCoursesOpen && (
          <ul className="course-list">
            <li>Algorithms Anal & Dsgn 1, Data Models Query Lang, Intro Machine Learning, Data Intensive Computing</li>
            <li>Deep Learning, Computer Vision & Image Processing, Operating Systems, Reinforcement Learning</li>
            <li>Computer Security, Statistical Data Mining I</li>
          </ul>
        )}
      </div>

      {/* Bachelor of Engineering Degree */}
      <div className="education-item">
        <h3><FaGraduationCap /> Bachelor of Engineering in Electronics and Communication Engineering</h3>
        <p><FaUniversity /> Anna University | India</p>
        <p>Graduated: May 2021</p>

        <div className="course-dropdown" onClick={toggleBachelorCourses}>
          <span>Related courses</span>
          {isBachelorCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isBachelorCoursesOpen && (
          <ul className="course-list">
            <li>Programming in C, Data Structures, Cyber Security, Oops</li>
            <li>Project and Finance Management</li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Education;
