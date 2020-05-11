import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.css';

const btn = (history, type, data) => {
  const { id } = data;
  history.push(`/receitas/${type}/${id}`);
};

const Card2 = (props) => {
  const { image, children, data, type, imgTestid } = props;
  const history = useHistory();
  return (
    <div className="comp_card2">
      <button type="button" onClick={() => btn(history, type, data)}>
        <img src={image} alt="" data-testid={imgTestid} />
      </button>
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
  data: propTypes.instanceOf(Object).isRequired,
  imgTestid: propTypes.string.isRequired,
};

export default Card2;
