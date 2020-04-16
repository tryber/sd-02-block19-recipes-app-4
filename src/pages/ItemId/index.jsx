import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RecipeAppContext from '../../context/Context';
import './style/index.css';


const ingredients = (ingridients, makeRecipe) => {
  return (
    <div className="ingredients">
      <p className="subtitle">Ingredients</p>
      <div className="box">
        {(makeRecipe) ?
          ingredientsCheckbox(ingridients) :
          ingredientsList(ingridients)}
      </div>
    </div>
  );
};

const ingredientsList = (ingridients) => {
  return (
    <ul>
      {ingridients.map((item, index) => (
        <li key={item}>
          <span data-testid={`${index}-ingredient-name`}>{item[0]}</span>
          <span data-testid={`${index}-ingredient-measure`}> - {item[1]}</span>
        </li>
      ))}
    </ul>
  );
};

const ingredientsCheckbox = (ingridients) => {
  return (
    <div>
      {ingridients.map((item) => (
        <div className="checkbox" key={item}>
          <input type="checkbox" key={item} name={item} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

const instruction = (strInstructions) => {
  return (
    <div className="intructions">
      <p className="subtitle">Intructions</p>
      <div className="box">
        <p data-testid="instructions">{strInstructions}</p>
      </div>
    </div>
  );
};

const video = (strYoutube) => {
  strYoutube = strYoutube.replace('watch?v=', 'v/-');
  return (
    <div className="video">
      <p className="subtitle">Video</p>
      <embed
        data-testid="video"
        src={strYoutube}
        type="application/x-shockwave-flash"
        allowscriptaccess="always"
        allowFullScreen={true}
      />
    </div>
  );
};

const header = (strMeal) => {
  return (
    <div className="header">
      <p className="title" data-testid="recipe-title">{strMeal}</p>
      <div>
        <button type="button" data-testid="share-btn">
          <span className="material-icons">
            share
          </span>
        </button>
        <button type="button" data-testid="favorite-btn">
          <span className="material-icons">
            favorite_border
          </span>
        </button>
      </div>
    </div>
  );
};

const recomended = () => {
  return (
    <div className="recomended">
      <p className="subtitle">Recomended</p>
    </div>
  );
};

const filterX = (meal) => {
  const ingridients = [...filterIngridient(meal)];
  const measure = [...filterMeasure(meal)];
  return ingridients.map((item, index) => [item, measure[index]]);
};

const filterIngridient = (meal) => {
  const arr = [];
  for (let item in meal) {
    if (/^strIngredient/.test(item) && meal[item]) {
      arr.push(meal[item]);
    };
  };
  return arr;
};

const filterMeasure = (meal) => {
  const arr = [];
  for (let item in meal) {
    if (/^strMeasure/.test(item) && meal[item]) {
      arr.push(meal[item]);
    };
  };
  return arr;
};

const handleClick = (makeRecipe, setMakeRecipe) => {
  setMakeRecipe(!makeRecipe);
};

const convertTypeToUrl = (type) => {
  switch(type) {
    case 'comida':
      return 'themealdb';
    case 'bebida':
      return 'thecocktaildb';
    default:
      return null;
  };
};

const ItemID = () => {
  const { makeRecipe, setMakeRecipe, fetchRecipe, andrey, setAndrey } = useContext(RecipeAppContext);
  const { type, id } = useParams();
  const cb = (resp) => {
    setAndrey(resp);
  };
  
  useEffect( async () => { await fetchRecipe(convertTypeToUrl('comida'), `lookup.php?i=52882`, cb) }, []);

  const { strMeal, strCategory, strInstructions, strMealThumb, strYoutube } = andrey.meals[0];
  const ingridients = filterX(andrey.meals[0]);
  
  return (
    <div className="page_itemid">
      <img src={strMealThumb} data-testid="recipe-photo" />
      <div className="main">
        {header(strMeal)}
        <p className="type">{strCategory}</p>
        {ingredients(ingridients, makeRecipe)}
        {instruction(strInstructions)}
        {(makeRecipe) ? <div /> : (video(strYoutube))}
        {(makeRecipe) ? <div /> : recomended()}
        <button
          type="button"
          className="init"
          data-testid="start-recipe-btn"
          onClick={() => handleClick(makeRecipe, setMakeRecipe)}
        >
          {(makeRecipe) ? 'Finalize Recipe' : 'Init Recipe'} 
        </button>
      </div>
    </div>
  );
};


export default ItemID;
