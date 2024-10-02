import React from 'react'
import { CardData } from '../data/CardData'
import Card from './Card'

function CardList() {

  return (
    <div className="card-container">
      {CardData.map((card, index) => (
        <Card
          key={index}
          version={card.version}
          date={card.date}
          author={card.author}
          content={card.content}
          badgeText={card.badgeText}
          badgeColor={card.badgeColor}  // Passing the badge color
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardList