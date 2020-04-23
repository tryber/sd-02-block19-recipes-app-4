import React, { useEffect, useContext, useState } from 'react';
import context from '../context/Context';
import Loading from './Loading';
import useRamdomCard from '../customHooks/useRamdomCard';
import RecipeCard from './renderCards/recipeCard';

const RenderAllCards = () => {
  const { dataBase: [db], fetchRecipe, setIsLoading } = useContext(context);
  const [resultsAll, setResultsAll] = useState([]);

  useRamdomCard(setResultsAll, 12, db, fetchRecipe);

  useEffect(() => {
    setIsLoading(true);
    if (resultsAll.length === 12) setIsLoading(false);
  }, [resultsAll, db]);

  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';

  return (
    <div>
      {resultsAll.length !== 12 && <Loading />}
      {resultsAll.length === 12 &&
        resultsAll.map(recipe => (
          <div key={recipe[`id${prefix}`]}>
            <RecipeCard details={recipe} dataBase={prefix} />
          </div>
        ))
      }
    </div>
  );
};

export default RenderAllCards;
