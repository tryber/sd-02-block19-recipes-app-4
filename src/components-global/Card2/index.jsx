import React from 'react';
import propTypes from 'prop-types';

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

Card2.propTypes = {
  image: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};

export default Card2;
