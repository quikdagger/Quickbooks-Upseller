import React from 'react';

const Changelog = ({ entries }) => {
  const latestEntries = entries.slice(0, 7); // Get the latest 7 entries

  return (
    <div className="changelog">
      <h2 className="section-heading">Changelog</h2>
      <div className="changelog-list">
        {latestEntries.map((entry, index) => (
          <div key={index} className="changelog-item">
            <h3 className="changelog-item-heading">{entry.version}</h3>
            <p className="changelog-item-description">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;
