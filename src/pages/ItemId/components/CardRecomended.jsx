import React, { useState, useContext, useEffect } from 'react';
import propTypes from 'prop-types';

import '../style/cardRecomended.css';
import RecipeAppContext from '../../../context/Context';
import Card from '../../../components-global/renderCards/recipeCard';

function convertTypeToUrl(type) {
  switch (type) {
    case 'comida':
      return 'themealdb';
    case 'bebida':
      return 'thecocktaildb';
    default:
      return null;
  }
}

function switchDataBase(type) {
  if (type === 'comida') return 'Drink';
  if (type === 'bebida') return 'Meal';
}

function switcType(type) {
  if (type === 'comida') return 'bebida';
  if (type === 'bebida') return 'comida';
}

function switchObj(type) {
  if (type === 'comida') return 'drinks';
  if (type === 'bebida') return 'meals';
}

const cb = (setRandomResults, type) => (resp) => {
  setRandomResults(resp[`${switchObj(type)}`][0]);
};

const randomRecomended = (fetchRecipe, type, setRandomResults, setRandomResults2) => {
  const type2 = switcType(type);
  fetchRecipe(convertTypeToUrl(type2), 'random.php', cb(setRandomResults, type));
  fetchRecipe(convertTypeToUrl(type2), 'random.php', cb(setRandomResults2, type));
};

function CardRecomended(props) {
  const { fetchRecipe } = useContext(RecipeAppContext);
  const { type } = props;
  const [randomResults, setRandomResults] = useState({});
  const [randomResults2, setRandomResults2] = useState({});

  useEffect(() => {
    randomRecomended(fetchRecipe, type, setRandomResults, setRandomResults2);
  }, []);

  return (
    <div className="comp_cardRecomended">
      <Card details={randomResults} dataBase={switchDataBase(type)} />
      <Card details={randomResults2} dataBase={switchDataBase(type)} />
    </div>
  );
}

CardRecomended.propTypes = {
  type: propTypes.string.isRequired,
};

export default CardRecomended;
