import React, { useContext } from 'react';
import context from '../../context/Context';
import RecipeCard from './recipeCard';
import Loading from '../Loading';
import './style/index.css';

const RenderCards = () => {
  const { results: [data], dataBase: [db],
    selectedFilterContext: [selectedFilter] } = useContext(context);
  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';
  const minPrefix = db === 'themealdb' ? 'meals' : 'drinks';
  let adjustedData = data.meals || data.drinks;
  console.log(data);
  console.log(selectedFilter);
  if (data.length === 12) {
    adjustedData = data.map(({ [minPrefix]: [returnedData] }) => returnedData);
    console.log(adjustedData);
  }
  if (!adjustedData) return <Loading />
  console.log(adjustedData);
  return (
    <div className="container-all-recipes">
      {adjustedData.map((recipe) => (
        <div key={JSON.stringify(recipe)}>
          <RecipeCard details={recipe} dataBase={prefix} />
        </div>
      ))}
    </div>
  );
};

export default RenderCards;
