import React from 'react';
import NeonCard from './NeonCard';

const NeonCardsContainer = ({ cards = [] }) => {
  return (
    <div className="neon-cards">
      {cards.map((card, index) => (
        <NeonCard
          key={index}
          title={card.title}
          description={card.description}
          color={card.color}
          width={card.width}
          height={card.height}
          top={card.top}
          left={card.left}
          angle={card.angle}
          opacity={card.opacity}
          className={card.className || ""}
        />
      ))}
    </div>
  );
};

export default NeonCardsContainer;
