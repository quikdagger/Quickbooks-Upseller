import React, { useState } from 'react';
import './App.css'; 

const Product = ({ name, features }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="product-item">
      <h2>{name}</h2>
      <button className="features-list-item" onClick={() => setExpanded(!expanded)}>
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

export default Product;
