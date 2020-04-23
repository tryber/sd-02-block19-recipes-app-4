import React, { useContext, useState } from 'react';
import context from '../../../context/Context';
import Loading from '../../../components-global/Loading';
import useRamdomCard from '../../../customHooks/useRamdomCard';
import RecipeCard from '../../../components-global/renderCards/recipeCard';

const RenderByFilter = () => {
  const { dataBase: [db], fetchRecipe } = useContext(context);
  const [resultsAll, setResultsAll] = useState([]);

  useRamdomCard(setResultsAll, 12, db, fetchRecipe);

  const prefix = db === 'themealdb' ? 'Meal' : 'Drink';

  return (
    <div>
      {resultsAll.length !== 12 && <Loading />}
      <div>Oi</div>
    </div>
  );
};

export default RenderByFilter;