import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Correct path to the image in the public folder */}
        <img src={process.env.PUBLIC_URL + '/sanandra_pic.jpeg'} alt="Sanchit Krishna Anandraj" className="hero-img" />
        <h1>Hi, I'm Sanchit Krishna Anandraj</h1>
        <div className="location">
          <FaMapMarkerAlt style={{ marginRight: '5px' }} />
          Seattle, Washington
        </div>
        <p>
          SDE II | Ex-Trimble | Scaled Systems Behind Trimble’s $2B AgTech Joint Venture | Python, AWS, Vue/React, ML | Currently compiling a future in tech (and coffee ☕)
        </p>
      </div>
    </section>
  );
}

export default Hero;
