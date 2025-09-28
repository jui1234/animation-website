import React from 'react';

const MolecularStructure = () => {
  return (
    <div className="molecular-container">
      <div className="molecular-structure">
        {/* Spheres */}
        <div className="molecule-sphere"></div>
        <div className="molecule-sphere"></div>
        <div className="molecule-sphere"></div>
        
        {/* Connectors */}
        <div className="molecule-connector"></div>
        <div className="molecule-connector"></div>
        <div className="molecule-connector"></div>
        
        {/* Text overlay */}
        <div className="molecule-text">
          Lorem.<br />
          Ipsum.<br />
          Lorem.
        </div>
      </div>
    </div>
  );
};

export default MolecularStructure;
