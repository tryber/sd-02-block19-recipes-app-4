import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/recipeCard.css';

const goToId = (id, history, db) => {
  history.push(`/receitas/${db === 'themealdb' ? 'meals' : 'drinks'}/${id}`);
};

const RecipeCard = ({ details, dataBase }) => {
  const history = useHistory();
  const { [`id${dataBase}`]: id, [`str${dataBase}`]: recipe, [`str${dataBase}Thumb`]: img, strCategory: category } = details;
  return (
    <div onClick={()=> goToId(id, history, dataBase)} className="recipe-card-container">
      <img className="img-card" src={img} alt={recipe} />
      <div className="categorie-card">{category}</div>
      <div className="recipe-card">{recipe}</div>
    </div>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  dataBase: PropTypes.string.isRequired,
};
