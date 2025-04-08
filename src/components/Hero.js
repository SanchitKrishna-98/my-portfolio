import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Correct path to the image in the public folder */}
        <img src={process.env.PUBLIC_URL + '/sanandra_pic.jpeg'} alt="Sanchit Krishna Anandraj" className="hero-img" />
        <h1>Hi, I'm Sanchit Krishna Anandraj</h1>
        <p>Graduate Student in Computer Science | Software Developer | Passionate about AI, Machine Learning, and Full-Stack Development</p>
      </div>
    </section>
  );
}

export default Hero;
