import React, { useContext } from 'react';
import context from '../../context/Context';
import RecipeCard from './recipeCard';

const RenderCards = () => {
  const { results: [data], dataBase: [db] } = useContext(context);
  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';
  console.log(prefix);
  const adjustedData = data.meals || data.drinks;
  if (!adjustedData) return <div>Sem resultados!</div>;
  console.log(adjustedData);
  return (
    <div>
      {adjustedData.map((recipe) => (
        <div>
          <RecipeCard details={recipe} dataBase={prefix} />
        </div>
      ))}
    </div>
  );
};

export default RenderCards;
