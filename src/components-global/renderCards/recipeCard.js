import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ details, dataBase }) => {
  // console.log(details);

  const { [`id${dataBase}`]: id, [`str${dataBase}`]: recipe, [`str${dataBase}Thumb`]: img, strCategory: category } = details;

  return (
    <div>
      <img src={img} height="100px" alt={recipe} />
      <h3>{category}</h3>
      <h1>{recipe}</h1>
    </div>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  dataBase: PropTypes.string.isRequired,
};
