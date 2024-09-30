import React from 'react'
import { CardData } from '../data/CardData'
import Card from './Card'

function CardList() {

  return (
        <div className="card-container">
          {CardData.map((item) => (
            <Card key={item.id} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      
  )
}

export default CardList