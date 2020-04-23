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
  switch (type) {
    case 'comida':
      return 'Drink';
    case 'bebida':
      return 'Meal';
    default:
      return null;
  }
}

function switcType(type) {
  switch (type) {
    case 'bebida':
      return 'comida';
    case 'comida':
      return 'bebida';
    default:
      return null;
  }
}

function switchObj(type) {
  switch (type) {
    case 'bebida':
      return 'meals';
    case 'comida':
      return 'drinks';
    default:
      return null;
  }
}

const cb = (setRandomResults, type) => (resp) => {
  setRandomResults(resp[`${switchObj(type)}`][0]);
};

const randomRecomended = (fetchRecipe, type, setRandomResults) => {
  const type2 = switcType(type);
  fetchRecipe(convertTypeToUrl(type2), 'random.php', cb(setRandomResults, type));
};

function CardRecomended(props) {
  const { fetchRecipe } = useContext(RecipeAppContext);
  const { type } = props;
  const [randomResults, setRandomResults] = useState({});

  useEffect(() => {
    randomRecomended(fetchRecipe, type, setRandomResults);
  }, []);

  return (
    <div className="comp_cardRecomended">
      <Card details={randomResults} dataBase={switchDataBase(type)} />
      <Card details={randomResults} dataBase={switchDataBase(type)} />
    </div>
  );
}

CardRecomended.propTypes = {
  type: propTypes.string.isRequired,
};

export default CardRecomended;
