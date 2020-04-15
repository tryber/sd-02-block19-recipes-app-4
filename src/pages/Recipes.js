import React, { useContext } from 'react';
import RecipeAppContext from '../context/Context';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const context = useContext(RecipeAppContext);
  const { type } = useParams()
  console.log(context)

  return (
    <div>
      <p>Recipe: {type}</p>
    </div>
  );
}

export default Recipe;