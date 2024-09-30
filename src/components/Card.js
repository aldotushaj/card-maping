import React from 'react'
import "../styles/Card.css"

function Card(props) {
    return (
        <div className="card">
          <div className="card-icon">{props.icon}</div>
          <div className='card-text'>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          </div>
        </div>
      );
}

export default Card