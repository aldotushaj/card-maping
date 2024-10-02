import React from 'react'
import "../styles/Card.css"

const Card = ({ version, date, author, content, badgeText, badgeColor,imageUrl }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="version">{version} ({date})</span>
      </div>
      <div className="card-body">
        <div className='body1'>
          {/* Badge with dynamic background color */}
         <div className="badge" style={{ backgroundColor: badgeColor }}>
          {badgeText}
        </div>
        <div className="author">
          {/* Placeholder author image */}
          <img src={"https://via.placeholder.com/30"} alt="author" className="author-image" />
          <span>{author}</span>
        </div>
        </div>
        <p className="content">{content}</p>
      </div>
      <div className="card-footer">
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default Card;
