import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';

import Generics from './Generecs';
import RecipeAppContext from '../../../context/Context';

function Meal(props) {
  const { convertTypeToData, id } = props;
  const { andrey, setAndrey, fetchRecipe } = useContext(RecipeAppContext);

  const cb = (resp) => {
    setAndrey(resp);
  };
  
  useEffect(() => { fetchRecipe('themealdb', `lookup.php?i=${id}`, cb); }, []);
  
  return (
    <React.Fragment>
      <Generics obj={convertTypeToData('comida', andrey)} />
    </React.Fragment>
  );
}

Meal.propTypes = {
  convertTypeToData: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
}

export default Meal;
