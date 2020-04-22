import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Meal(props) {
  const { convertTypeToData, data, making, type, history } = props;

  return (
    <React.Fragment>
      <Generics
        data={convertTypeToData('comida', data)}
        making={making}
        type={type}
        history={history}
      />
    </React.Fragment>
  );
}

Meal.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  data: propTypes.func.isRequired,
  making: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  history: propTypes.func.isRequired,
};

export default Meal;
