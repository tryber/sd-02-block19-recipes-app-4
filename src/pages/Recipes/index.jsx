import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';
import Footer from '../../components-global/Footer';

const Recipe = () => {
  const context = useContext(RecipeAppContext);
  const { type } = useParams();
  console.log(context);

  return (
    <div>
      <p>Recipe: {type}</p>
      <Footer />
    </div>
  );
};

export default Recipe;
