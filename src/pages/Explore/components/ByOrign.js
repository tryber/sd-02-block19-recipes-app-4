import React, { useEffect, useState, useContext } from 'react';
import context from '../../../context/Context';

const ByOrign = () => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);
  const [recipesByContry, setRecipesByContry] = useState([]);
  const { fetchRecipe } = useContext(context);

  const adjustSelectorArea = (response) => {
    setAreas(() => [{ strArea: 'All areas' }, ...response.meals]);
  };

  useEffect(() => {
    fetchRecipe('themealdb', 'list.php?a=list', adjustSelectorArea);
  }, []);

  useEffect(() => {
    fetchRecipe('themealdb', `filter.php?a=${selectedArea}`, setRecipesByContry);
  }, [selectedArea]);

  return (
    <div>
      <select onChange={(e) => setSelectedArea(e.target.value)}>
        {areas.map(({ strArea }) => <option value={strArea} key={strArea}>{strArea}</option>)}
      </select>
      {!recipesByContry.meals && <div>Nenhum resultado</div>}
      {recipesByContry.meals && recipesByContry.meals.map((recipe) => (
        <p key={recipe.strMeal}>{recipe.strMeal}</p>
      ))}
    </div>
  );
};

export default ByOrign;
