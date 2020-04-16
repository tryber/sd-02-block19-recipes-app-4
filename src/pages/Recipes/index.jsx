import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';
import Header from '../../components-global/Header';
import Footer from '../../components-global/Footer';

const Recipe = () => {
  const context = useContext(RecipeAppContext);
  const { type } = useParams();
  console.log(context);

  return (
    <div>
      {type === "comidas" && <Header title='Comidas' hasSearchBar />}
      {type === "bebidas" && <Header title='Bebidas' hasSearchBar />}
      <p>Recipe: {type}</p>
      <Footer />
    </div>
  );
};

export default Recipe;
