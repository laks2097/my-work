import React from 'react';

const GameHeader = function (props) {
  return (
    <div className="header">
      <h2 style={{color:props.color}}>{props.title}</h2>
      <div className="item-list">
        <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
    </div>
  
  );
};

export default GameHeader;