import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Drink(props) {
  const { convertTypeToData, data, making, type, history } = props;

  return (
    <Generics
      data={convertTypeToData('bebida', data)}
      making={making}
      type={type}
      history={history}
    />
  );
}

Drink.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  data: propTypes.func.isRequired,
  making: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  history: propTypes.func.isRequired,
};

export default Drink;
