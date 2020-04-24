import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const btn = (history, type, data) => {
  const { id } = data;
  history.push(`/receitas/${type}/${id}`);
}

const Card2 = (props) => {
  const { image, children, data, history, type } = props;
  return (
    <div className="comp_card2">
      <img src={image} alt="" onClick={() => btn(history, type, data)} />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

Card2.propTypes = {
  image: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
  type: propTypes.string.isRequired,
  history: propTypes.instanceOf(Object).isRequired,
  data: propTypes.instanceOf(Object).isRequired,
};

export default Card2;
