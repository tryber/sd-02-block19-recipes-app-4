import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import context from '../../context/Context';
import RecipeCard from './recipeCard';
import Loading from '../Loading';
import './style/index.css';

const changeRoute = (history, minPrefix, id) => {
  history.push(`/receitas/${minPrefix}/${id}`);
}

const RenderCards = () => {
  const { results: [data], dataBase: [db], isOnSearchBar,
    selectedFilterContext: [selectedFilter] } = useContext(context);
  let history = useHistory();
  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';
  const minPrefix = db === 'themealdb' ? 'meals' : 'drinks';
  let adjustedData = data.meals || data.drinks;
  if (data.length === 12) {
    adjustedData = data.map(({ [minPrefix]: [returnedData] }) => returnedData);
    console.log(adjustedData);
  }
  if (!adjustedData) return <Loading />;
  console.log(adjustedData[0]);
  return (
    <div className="container-all-recipes">
      {isOnSearchBar && adjustedData.length === 1
        && changeRoute(history, minPrefix, adjustedData[0][`id${prefix}`])}
      {adjustedData.map((recipe) => (
        <div key={JSON.stringify(recipe)}>
          <RecipeCard details={recipe} dataBase={prefix} />
        </div>
      ))}
    </div>
  );
};

export default RenderCards;
