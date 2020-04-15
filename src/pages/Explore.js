import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../context/Context';

const Explore = () => {
  const context = useContext(RecipeAppContext);
  const { type, kindOfRecipe } = useParams();

  console.log(context);

  return (
    <div>
      <p>Explore: {type}</p>
      <p>Explore: {kindOfRecipe}</p>
    </div>
  );
};

export default Explore;
