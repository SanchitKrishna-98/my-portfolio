import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    let delay = 300;
    const timeouts = [];

    for (let i = 0; i < projects.length; i++) {
      const timeout = setTimeout(() => {
        setVisibleProjects((prev) => [...prev, i]);
      }, i * delay);
      timeouts.push(timeout);
    }

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) =>
        visibleProjects.includes(index) ? (
          <div
            className="project-card animated"
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <ul>
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {<a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub size={20} /> View on GitHub
            </a>}
          </div>
        ) : null
      )}
    </section>
  );
}

const projects = [
  {
    title: 'SkinToneRec – Real-Time Skin Tone & Product Suggestion System',
    tech: 'OpenCV, PyTorch, Spring Boot, React',
    description: [
      'Implemented a real-time skin tone detection system using OpenCV, K-Means, and EfficientNet with over 90% accuracy and sub-second latency, handling poor lighting and noisy images.',
      'Delivered a personalized solution in a Java Spring Boot and React web app on AWS, providing personalized clothing and skincare suggestions via Amazon APIs, tested by 50+ students with 80% real-world accuracy.',
    ],
    github: 'https://github.com/your-username/skintonerec',
  },
  {
    title: 'WalkMate – ML-Enhanced Student Walking Companion',
    tech: 'React.js, FastAPI, AWS, PyTorch, Docker',
    description: [
      'Built a modular Neural Collaborative Filtering (NCF) model in PyTorch using Object-Oriented Programming (OOP) principles, achieving a 60% improvement in user match success through personalized recommendations—enhancing peer-to-peer engagement and campus safety participation.',
      'Integrated LSTM Autoencoders & Isolation Forest for anomaly detection, reducing incidents by 45%.',
      'Implemented real-time SOS alerts in a React.js & Flask app deployed on AWS.',
    ],
    github: 'https://github.com/your-username/walkmate',
  },
  {
    title: 'AeroSwift – Reinforcement Learning for Drone Delivery',
    tech: 'Python, PyTorch, OpenAI Gym, Matplotlib',
    description: [
      'Constructed an AeroSwift framework for drone delivery, addressing single-agent and multi-agent scenarios in stochastic environments.',
      'Optimized delivery routes using SARSA, DQN, and Q-Learning, achieving efficient navigation.',
      'Simulated a 6×6 grid with dynamic obstacles and reward structures, yielding consistent learning improvements over 500+ episodes.',
    ],
    github: 'https://github.com/SanchitKrishna-98/AeroSwift',
  },
  {
    title: 'Start-up Success Prediction',
    tech: 'Python, Pandas, scikit-learn, Matplotlib, Streamlit',
    description: [
      'Constructed an end-to-end machine learning pipeline: performed extensive EDA, feature selection, missing value imputation, and normalization.',
      'Trained machine learning models (KNN, Naive Bayes, Logistic Regression, Random Forest, XGBoost, SVM) on Kaggle’s Startup Prediction dataset, achieving 87.5% accuracy with XGBoost.',
      'Launched an interactive Streamlit-based webpage to visualize predictions and analyze 10,000+ entries, enabling data-driven decision-making for early-stage investors and entrepreneurs by identifying key success factors.',
    ],
    github: 'https://github.com/your-username/startup-success-prediction',
  },
  {
    title: 'Implementing the Threading Component of Pintos OS',
    tech: 'C, Pintos OS, Docker, Git',
    description: [
      'Designed and integrated threading components with synchronization primitives like mutexes and condition variables, effectively mitigating concurrency issues.',
      'Refined thread scheduling algorithms based on the 4.4BSD scheduler, enhancing resource allocation and system reliability through rigorous testing and debugging in a kernel-level environment.',
    ],
    github: 'https://github.com/SanchitKrishna-98/Threading-component-pintos-os',
  },
  {
    title: 'Employee Churn Prediction',
    tech: 'R, Grid Search, dplyr, tidyr, caret, ggplot2',
    description: [
      'Built an end-to-end data pipeline using tidyverse in R, performing data cleaning (missing value handling, label encoding), feature engineering, outlier detection, and scaling for the IBM HR Analytics dataset.',
      'Conducted EDA on 1,470 employee records to identify trends in attrition, job satisfaction, and overtime behavior.',
      'Trained and evaluated ML models (K-NN, SVM, Random Forest, XGBoost), achieving 94.26% accuracy with SVM, and identified key predictors of poor work-life balance—providing actionable insights to improve HR policies and retention.',
    ],
    github: 'https://github.com/SanchitKrishna-98/Employee-churn-prediction',
  },
  {
    title: 'Sentiment Analysis on IMDb Movie Reviews',
    tech: 'Python, NLP, TensorFlow, Matplotlib',
    description: [
      'Created a robust NLP pipeline with text preprocessing (tokenization, stopword removal, stemming), BERT embeddings, and sequence padding.',
      'Built and optimized neural network architectures (LSTM, Bidirectional LSTM, BERT, CNN) for sentiment analysis, achieving nearly 90% accuracy.',
      'Conducted hyperparameter tuning and comparative analysis, reducing model training time by 30% while maintaining performance—demonstrating potential for real-time content moderation and customer feedback analytics in media platforms.',
    ],
    github: 'https://github.com/SanchitKrishna-98/DeepLearning',
  },
  {
    title: 'Aerobook - Airline Booking Management System',
    tech: 'Python, SQL, Vue.js',
    description: [
      'Designed and implemented normalized SQL tables in BCNF form to ensure data integrity and eliminate redundancy; generated 50,000+ synthetic entries using Python for testing and validation.',
      'Crafted a user-friendly Vue.js interface for flight booking, reservations, and customer inquiries, showcasing full-stack proficiency and optimized database queries.'
    ],
    github: 'https://github.com/SanchitKrishna-98/Aerobook',
  },
];

export default Projects;
