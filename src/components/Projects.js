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
            {/*<a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub size={20} /> View on GitHub
            </a>*/}
          </div>
        ) : null
      )}
    </section>
  );
}

const projects = [
  {
    title: 'WalkMate – ML-Enhanced Student Walking Companion',
    tech: 'React.js, FastAPI, AWS, PyTorch, Docker',
    description: [
      'Built a Neural Collaborative Filtering (NCF) model in PyTorch for walkmate matching, increasing success by 60%.',
      'Integrated LSTM Autoencoders & Isolation Forest for anomaly detection, reducing incidents by 45%.',
      'Implemented real-time SOS alerts in a React.js & Flask app deployed on AWS.',
    ],
    github: 'https://github.com/your-username/WalkMate',
  },
  {
    title: 'Color Suggestions Using Skin Tone Detection',
    tech: 'OpenCV, PyTorch, MobileNet, EfficientNet',
    description: [
      'Built a real-time skin tone detection system with OpenCV and K-Means, achieving 95%+ accuracy and <1s latency.',
      'Integrated CNN-based models for personalized color recommendations under noisy/poor lighting conditions.',
    ],
    github: 'https://github.com/your-username/SkinToneColorRecommendation',
  },
  {
    title: 'Pintos OS – Threading Component',
    tech: 'C, Pintos OS, Docker, Git',
    description: [
      'Designed threading components with synchronization (mutexes, condition vars) to resolve concurrency issues.',
      'Refined thread scheduling with 4.4BSD logic, improving resource usage and system reliability.',
    ],
    github: 'https://github.com/your-username/Pintos-OS',
  },
  {
    title: 'AeroSwift – Drone Delivery with RL',
    tech: 'Python, PyTorch, OpenAI Gym, Matplotlib',
    description: [
      'Simulated drone delivery using SARSA, Q-Learning, and DQN in 6x6 stochastic grid environments.',
      'Trained drones to minimize delivery time with obstacle navigation and reward-based learning.',
    ],
    github: 'https://github.com/SanchitKrishna-98/RL-AutonomousDroneDelivery',
  },
  {
    title: 'Start-up Success Prediction',
    tech: 'Python, XGBoost, scikit-learn, Streamlit',
    description: [
      'Built models (KNN, Naive Bayes, Logistic Regression, XGBoost) achieving 87.5% accuracy on startup data.',
      'Developed an interactive Streamlit app to visualize predictions and improve user insights.',
    ],
    github: 'https://github.com/your-username/startup-success-predictor',
  },
  {
    title: 'Work-Life Balance Classification',
    tech: 'R, Grid Search, dplyr, tidyr, caret, ggplot2',
    description: [
      'Performed classification on IBM HR Analytics dataset using KNN, SVM, RF, and XGBoost, achieving 94.26% accuracy with SVM.',
      'Fine-tuned SVM hyperparameters (C=1, γ=1) using grid search with 80-20 train-test split.',
    ],
    github: 'https://github.com/your-username/work-life-balance-classification',
  },
  {
    title: 'Sentiment Analysis on IMDb Movie Reviews',
    tech: 'Python, NLP, TensorFlow, Matplotlib',
    description: [
      'Built and optimized LSTM, BiLSTM, BERT, and CNN models for sentiment analysis, achieving ~90% accuracy.',
      'Conducted hyperparameter tuning and reduced model training time by 30% while maintaining accuracy.',
    ],
    github: 'https://github.com/your-username/imdb-sentiment-analysis',
  },
];

export default Projects;
