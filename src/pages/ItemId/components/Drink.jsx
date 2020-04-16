import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';

import Generics from './Generecs';
import RecipeAppContext from '../../../context/Context';

function Drink(props) {
  const { convertTypeToData, id } = props;
  const { andrey2, setAndrey2, fetchRecipe } = useContext(RecipeAppContext);

  const cb = (resp) => {
    setAndrey2(resp);
  };

  useEffect(() => { fetchRecipe('thecocktaildb', `lookup.php?i=${id}`, cb); }, []);

  return (
    <React.Fragment>
      <Generics obj={convertTypeToData('bebida', andrey2)} />
    </React.Fragment>
  );
}

Drink.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default Drink;
