import React from 'react';
import './style.css';

const Card2 = (props) => {
  const { image, children } = props;
  return (
    <div className="comp_card2">  
      <img src={image} alt="" />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Card2;