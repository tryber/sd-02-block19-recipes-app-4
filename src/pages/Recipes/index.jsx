import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';

const Recipe = () => {
  const context = useContext(RecipeAppContext);
  const { type } = useParams();
  console.log(context);

  return (
    <div>
      <p>Recipe: {type}</p>
    </div>
  );
};

export default Recipe;
