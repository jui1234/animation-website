import React from 'react';

const NeonCard = ({ 
  title, 
  description, 
  color = "#0B0B0B",
  width = 300,
  height = 200,
  top = 0,
  left = 0,
  angle = 0,
  opacity = 1,
  className = "" 
}) => {
  const cardStyle = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`,
    transform: `rotate(${angle}deg)`,
    opacity: opacity,
    position: 'absolute'
  };

  return (
    <div className={`neon-card ${className}`} style={cardStyle}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NeonCard;
