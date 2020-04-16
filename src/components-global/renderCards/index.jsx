import React, { useContext } from 'react';
import context from '../../context/Context';
import RecipeCard from './recipeCard';

const RenderCards = () => {

  const { results: [data, setData] } = useContext(context);
  const adjustedData = data.meals || data.drinks;

  return (
    <div>
      {adjustedData.map((recipe) => {
        return (
          <div key={recipe.idMeal}>
            <RecipeCard details={recipe} />
          </div>
        )
      })}
    </div>
  )
}

export default RenderCards;