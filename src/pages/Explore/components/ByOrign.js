import React, { useEffect, useState, useContext } from 'react';
import context from '../../../context/Context';
import '../style/ByOrign.css';
import '../style/renderIngredients.css';

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
    <div className="by-orign-container">
      <select onChange={(e) => setSelectedArea(e.target.value)}>
        {areas.map(({ strArea }) => <option value={strArea} key={strArea}>{strArea}</option>)}
      </select>
      {!recipesByContry.meals && <div>Nenhum resultado</div>}
      <div className="render-ing-container">
        {recipesByContry.meals && recipesByContry.meals.map((recipe) => (
          <div key={recipe.strMeal} className="card-ing">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} height="80vh" />
            <p>{recipe.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByOrign;
