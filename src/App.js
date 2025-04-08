import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import ProfessionalExperience from './components/ProfessionalExperience';  
import TechnicalSkills from './components/TechnicalSkills'; 
import AwardsAndInvolvement from './components/AwardsAndInvolvement';  
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <ProfessionalExperience />
      <TechnicalSkills /> 
      <Projects />
      <AwardsAndInvolvement /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
