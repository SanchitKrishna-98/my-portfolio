import React, { useState } from 'react';
import { FaBriefcase, FaLaptopCode, FaDatabase, FaChalkboardTeacher, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ProfessionalExperience() {
  const [open, setOpen] = useState({
    trimble: false,
    payoda: false,
    technoble: false,
    buffalo: false
  });

  const handleToggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="professional-experience" id="professional-experience">
      <h2>Professional Experience</h2>

      {/* Technoble */}
      <div className="experience-item">
        <h3>
          <FaDatabase size={28} /> Software Engineering Intern
        </h3>
        <p><strong>Technoble</strong> – Remote, USA</p>
        <p><em>Dec 2024 – May 2025</em></p>
        <div className="career-dropdown" onClick={() => handleToggle('technoble')}>
          <span>My Contributions</span>
          {open.technoble ? <FaChevronUp style={{ color: '#ff6347' }} /> : <FaChevronDown />}
        </div>
        {open.technoble && (
          <ul className="career-list">
            {[
              "Devised an alerting system for CI/CD health using Node.js, MongoDB, and Redis queues to process build/test logs, improving incident detection speed.",
              "Integrated a FastAPI-based anomaly microservice leveraging Isolation Forest, boosting alert reliability by 75% and automating root cause analysis."
            ].map((text, i) => (
              <li key={i} className="list-item fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
                <span className="arrow">→</span> {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* University at Buffalo, Graduate Teaching Assistant */}
      <div className="experience-item">
        <h3>
          <FaChalkboardTeacher size={28} /> Graduate Teaching Assistant
        </h3>
        <p><strong>University at Buffalo, SUNY</strong> – Buffalo, NY</p>
        <p><em>Aug 2024 – Dec 2024</em></p>
        <div className="career-dropdown" onClick={() => handleToggle('buffalo')}>
          <span>My Contributions</span>
          {open.buffalo ? <FaChevronUp style={{ color: '#ff6347' }} /> : <FaChevronDown />}
        </div>
        {open.buffalo && (
          <ul className="career-list">
            {[
              "Assisted in CSE 531B (Algorithms) by grading assignments, conducting quizzes, and supporting students in algorithm design."
            ].map((text, i) => (
              <li key={i} className="list-item fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
                <span className="arrow">→</span> {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Trimble */}
      <div className="experience-item">
        <h3>
          <FaBriefcase size={30} /> Software Development Engineer II
        </h3>
        <p><strong>Trimble Inc.</strong> – Chennai, India</p>
        <p><em>Oct 2021 – Dec 2023</em></p>
        <div className="career-dropdown" onClick={() => handleToggle('trimble')}>
          <span>My Contributions</span>
          {open.trimble ? <FaChevronUp style={{ color: '#ff6347' }} /> : <FaChevronDown />}
        </div>
        {open.trimble && (
          <ul className="career-list">
            {[
  // Existing points
  "Collaborated cross-functionally to build a Vue.js interface for Trimble’s autonomous path planning system, using MapLibre and ALK tile server to render real-time GeoJSON trajectories.",
  "Led Flask backend development with Redis and CI/CD, reducing planner failures by 90% and setup time by 80%, driving adoption across AGCO, John Deere, Case IH, and HORSCH.",
  "Architected and developed a Vue.js-based Field Manager for Trimble Agriculture, integrating MapLibre and TileServer to render interactive field data.",
  "Built Flask REST APIs with PostGIS and Redis for real-time GeoJSON sync, versioning, and spatial validation, boosting setup speed by 85% and contributing to AGCO’s $2B joint venture.",
  "Built a serverless interview management tool with an Angular frontend and AWS services (Lambda, API Gateway, DynamoDB, S3, CloudWatch Events, SES), automating scheduling, reminders, and feedback collection, reducing manual coordination by 70%.",

  // NEW POINTS (from your latest message)
  "Developed Selenium test automation using TestNG and Cucumber BDD for Trimble Atlas, reducing regression effort by 80%.",
  "Authored and executed end-to-end test cases across web, mobile, APIs, and hardware using Postman and Eggplant Functional, performing both manual and automated testing with assertions, CI integration, and image/OCR validations to ensure cross-platform quality and stability.",
  "Led test planning, defect tracking in Jira, and cross-functional collaboration within Agile Scrum teams—providing accurate testing estimations, triaging issues with developers, and ensuring timely resolution across evolving sprint requirements.",
  "Deployed an interview management dashboard using React and AWS, cutting administrative tasks by 50%.",
  "Developed Python scripts for Jira Cloud/Server to automate Zephyr test cycle creation, containerized execution via Docker, and generated test execution reports with runtime data, reducing setup effort and improving QA visibility."
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
        <h3>
          <FaLaptopCode size={30} /> Software Engineer Intern
        </h3>
        <p><strong>Payoda Inc.</strong> – Coimbatore, India</p>
        <p><em>Dec 2020 – Aug 2021</em></p>
        <div className="career-dropdown" onClick={() => handleToggle('payoda')}>
          <span>My Contributions</span>
          {open.payoda ? <FaChevronUp style={{ color: '#ff6347' }} /> : <FaChevronDown />}
        </div>
        {open.payoda && (
          <ul className="career-list">
            {[
              "Designed and deployed a real-time Smart Call Center dashboard for a telecom client using Flask, Vue.js, WebSockets, and MongoDB, enabling live transcription, sentiment analysis, and AI-driven solution suggestions updated live during conversations.",
              "Reduced average response time by 35% and improved agent efficiency, generating $50K in revenue.",
              "Integrated Google Speech-to-Text and NLTK Vader for real-time sentiment scoring (88% accuracy), exposed insights via RESTful APIs, and supported both live interactions and post-call coaching; presented to the CEO to drive adoption.",
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
