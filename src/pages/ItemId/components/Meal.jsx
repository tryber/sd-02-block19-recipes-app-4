import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Meal(props) {
  const { convertTypeToData, data, making } = props;

  return (
    <React.Fragment>
      <Generics data={convertTypeToData('comida', data)} making={making} />
    </React.Fragment>
  );
}

Meal.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
};

export default Meal;
