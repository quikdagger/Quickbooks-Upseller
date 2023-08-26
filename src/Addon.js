import React, { useState } from 'react';
import './App.css'; 

const Addon = ({ name, features }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="addon">
      <h2>{name}</h2>
      <button className="addon-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide Features' : 'Show Features'}
      </button>
      {expanded && (
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="features-list-item">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Addon;
