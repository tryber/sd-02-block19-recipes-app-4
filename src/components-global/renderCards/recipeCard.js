import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/recipeCard.css';

const RecipeCard = ({ details, dataBase }) => {
  const { [`id${dataBase}`]: id, [`str${dataBase}`]: recipe, [`str${dataBase}Thumb`]: img, strCategory: category } = details;

  return (
    <Link className="linkDt" to={`/receitas/${dataBase === 'Meal' ? 'comida' : 'bebida'}/${id}`}>
      <div className="recipe-card-container">
        <div className="container-imgR">
          <img className="img-card" src={img} alt={recipe} />
        </div>
        <div className="container-infos">
          <div className="categorie-card">{category}</div>
          <div className="recipe-card">{recipe}</div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  dataBase: PropTypes.string.isRequired,
};
