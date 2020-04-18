import React from 'react';
import PropTypes from 'prop-types';
import './style/recipeCard.css';

const RecipeCard = ({ details, dataBase }) => {
  const { [`id${dataBase}`]: id, [`str${dataBase}`]: recipe, [`str${dataBase}Thumb`]: img, strCategory: category } = details;
  console.log(id);
  return (
    <div className="recipe-card-container">
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
