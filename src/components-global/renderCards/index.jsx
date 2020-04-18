import React, { useContext } from 'react';
import context from '../../context/Context';
import RecipeCard from './recipeCard';

const RenderCards = () => {
  const { results: [data], dataBase: [db], selectedFilterContext: [selectedFilter] } = useContext(context);
  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';
  const minPrefix = db === 'themealdb' ? 'meals' : 'drinks';
  let adjustedData = data.meals || data.drinks;
  console.log(data);
  console.log(selectedFilter);
  if (selectedFilter === 'All' && data.length === 12) {
    console.log(adjustedData);
    adjustedData = data.map(({ [minPrefix]: [returnedData] }) => {
      return returnedData;
    });
  }
  if (!adjustedData) return <div>Sem resultados!</div>;
  console.log(adjustedData);
  return (
    <div>
      {adjustedData.map((recipe) => (
        <div key={JSON.stringify(recipe)}>
          <RecipeCard details={recipe} dataBase={prefix} />
        </div>
      ))}
    </div>
  );
};

export default RenderCards;
