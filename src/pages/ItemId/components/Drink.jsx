import React from 'react';
import propTypes from 'prop-types';

import Generics from './Generics';

function Drink(props) {
  const { convertTypeToData, data, making } = props;

  return (
    <React.Fragment>
      <Generics obj={convertTypeToData('bebida', data)} making={making} />
    </React.Fragment>
  );
}

Drink.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
};

export default Drink;
