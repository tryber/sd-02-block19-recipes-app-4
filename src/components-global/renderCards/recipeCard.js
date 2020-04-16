import React, { useContext } from 'react';

const RecipeCard = (recipe) => {
  const {strMealThumb, strCategory, strMeal} = recipe.details
  console.log(recipe)
  return (
    <div>
      <img src={strMealThumb} height='150px' />
      <h3>{strCategory}</h3>
      <h1>{strMeal}</h1>
    </div>
  )
}

export default RecipeCard;