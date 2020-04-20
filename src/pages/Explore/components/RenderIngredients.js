import React, { useContext } from 'react';
import context from '../../../context/Context';
import '../style/renderIngredients.css';

const RenderIngredients = () => {
  const { ing: [ingredients] } = useContext(context);

  const ingredientsArray = ingredients.meals || ingredients.drinks;
  const adjustedName = ingredientsArray[0].strIngredient ? 'strIngredient' : 'strIngredient1';
  const adjustedDB = ingredientsArray[0].strIngredient ? 'themealdb' : 'thecocktaildb';

  return (
    <div className="render-ing-container">
      {ingredientsArray.map((ing) => (
        <div className="card-ing" key={ing[adjustedName]}>
          <p>{ing[adjustedName]}</p>
          <img
            src={
              `https://www.${adjustedDB}.com/images/ingredients/${ing[adjustedName]}-Small.png`
            }
            alt={ing[adjustedName]}
          />
        </div>
      ))}
    </div>
  );
};

export default RenderIngredients;
