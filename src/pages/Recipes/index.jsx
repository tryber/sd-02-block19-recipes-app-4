import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import context from '../../context/Context';
import Header from '../../components-global/Header';
import RecipeFilters from './components/RecipeFilters';
import Recipes from './components/Recipes';
import Footer from '../../components-global/Footer';

const Recipe = () => {
  const { type } = useParams();
  const { isLoading, isOnSearchBar } = useContext(context);

  return (
    <div>
      {type === 'comidas' && <Header title="Comidas" hasSearchBar />}
      {type === 'bebidas' && <Header title="Bebidas" hasSearchBar />}
      {isLoading && <ReactLoading type="spin" color="green" height={150} />}
      {!isOnSearchBar && <RecipeFilters />}
      {!isOnSearchBar && <Recipes />}
      <Footer />
    </div>
  );
};

export default Recipe;
