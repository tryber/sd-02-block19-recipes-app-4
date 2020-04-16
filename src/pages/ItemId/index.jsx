import React from 'react';
import { useParams } from 'react-router-dom';

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
    if (/^strIngredient/.test(item) && food[item]) {
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
  const strFood = andrey.meals[0].strMeal;
  const strThumb = andrey.meals[0].strMealThumb;
  const strCategory = andrey.meals[0].strCategory;
  const strInstructions = andrey.meals[0].strInstructions;
  const strYoutube = andrey.meals[0].strYoutube;
  const ingridients = filterX(andrey.meals[0]);

  return { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients };
};

const dataCocktail = (andrey) => {
  const strFood = andrey.drinks[0].strDrink;
  const strThumb = andrey.drinks[0].strDrinkThumb;
  const strCategory = andrey.drinks[0].strCategory;
  const strInstructions = andrey.drinks[0].strInstructions;
  const strYoutube = andrey.drinks[0].strYoutube;
  const ingridients = filterX(andrey.drinks[0]);

  return { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients };
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

const renderFood = (type, id) => {
  switch (type) {
    case 'comida':
      return <Meal convertTypeToData={convertTypeToData} id={id} />;
    case 'bebida':
      return <Drink convertTypeToData={convertTypeToData} id={id} />;
    default:
      return null;
  }
};

const ItemId = () => {
  const { type, id } = useParams();

  return (
    <div className="page_itemid">
      {renderFood(type, id)}
    </div>
  );
};


export default ItemId;
