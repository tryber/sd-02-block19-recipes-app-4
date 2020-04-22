import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import Loading from '../../components-global/Loading';
import RecipeAppContext from '../../context/Context';
import Meal from './components/Meal';
import Drink from './components/Drink';
import './style/index.css';


const filterIngridient = (food) => {
  const arr = [];
  Object.keys(food).forEach((item) => {
    if (/^strIngredient/.test(item) && food[item]) {
      arr.push(food[item]);
    }
  });
  return arr;
};

const filterMeasure = (food) => {
  const arr = [];
  Object.keys(food).forEach((item) => {
    if (/^strMeasure/.test(item) && food[item]) {
      arr.push(food[item]);
    }
  });
  return arr;
};

const filterX = (food) => {
  const ingridients = [...filterIngridient(food)];
  const measure = [...filterMeasure(food)];
  return ingridients.map((item, index) => [item, measure[index]]);
};

const dataMeal = (andrey) => {
  const id = andrey.meals[0].idMeal;
  const strFood = andrey.meals[0].strMeal;
  const strThumb = andrey.meals[0].strMealThumb;
  const strCategory = andrey.meals[0].strCategory;
  const strInstructions = andrey.meals[0].strInstructions;
  const strYoutube = andrey.meals[0].strYoutube;
  const ingridients = filterX(andrey.meals[0]);

  return { id, strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients };
};

const dataCocktail = (andrey) => {
  const id = andrey.drinks[0].idDrink;
  const strFood = andrey.drinks[0].strDrink;
  const strThumb = andrey.drinks[0].strDrinkThumb;
  const strCategory = andrey.drinks[0].strAlcoholic;
  const strInstructions = andrey.drinks[0].strInstructions;
  const strYoutube = andrey.drinks[0].strYoutube;
  const ingridients = filterX(andrey.drinks[0]);

  return { id, strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients };
};

const convertTypeToData = (type, andrey) => {
  switch (type) {
    case 'comida':
      return dataMeal(andrey);
    case 'bebida':
      return dataCocktail(andrey);
    default:
      return null;
  }
};

const renderFood = (type, data, making, history) => {
  switch (type) {
    case 'comida':
      return (
        <Meal
          convertTypeToData={convertTypeToData}
          data={data}
          making={making}
          type={type}
          history={history}
        />);
    case 'bebida':
      return (
        <Drink
          convertTypeToData={convertTypeToData}
          data={data}
          making={making}
          type={type}
          history={history}
        />);
    default:
      return null;
  }
};

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

const ItemId = (props) => {
  const { history } = props;
  const { fetchRecipe } = useContext(RecipeAppContext);
  const { type, id, making } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const cb = (resp) => {
    setData(resp);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe(convertTypeToUrl(type), `lookup.php?i=${id}`, cb);
  }, []);

  return (
    <div className="page_itemid">
      {(loading) ? (<Loading />) : (renderFood(type, data, making, history))}
    </div>
  );
};

ItemId.propTypes = {
  history: propTypes.instanceOf(Object).isRequired,
};

export default ItemId;
