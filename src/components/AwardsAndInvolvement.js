import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AwardsAndInvolvement() {
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const toggleAwards = () => setIsAwardsOpen(!isAwardsOpen);

  return (
    <section className="awards-involvement" id="awards-involvement">
      <div className="awards-header" onClick={toggleAwards}>
        <h2>
          Awards and Involvement
        </h2>
        <span className="dropdown-icon">
          {isAwardsOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </span>
      </div>

      {isAwardsOpen && (
        <ul className="award-list">
          <li>Trimble Bravo Award (6x) – High-impact project delivery.</li>
          <li>Winner – Paper & Poster Presentations, College Quiz competitions.</li>
        </ul>
      )}
    </section>
  );
}

export default AwardsAndInvolvement;
