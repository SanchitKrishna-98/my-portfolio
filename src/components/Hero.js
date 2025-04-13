import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Correct path to the image in the public folder */}
        <img src={process.env.PUBLIC_URL + '/sanandra_pic.jpeg'} alt="Sanchit Krishna Anandraj" className="hero-img" />
        <h1>Hi, I'm Sanchit Krishna Anandraj</h1>
        <p>
  Computer Science Graduate | Ex-SDE @ Trimble | Full Stack Developer | Passionate about AI & ML | Data Science Enthusiast | Currently compiling a future in tech (and coffee ☕)
</p>
      </div>
    </section>
  );
}

export default Hero;
