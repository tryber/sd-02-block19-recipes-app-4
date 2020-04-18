import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import context from '../../context/Context';
import Header from '../../components-global/Header';
import RenderCards from '../../components-global/renderCards';
import RecipeFilters from './components/RecipeFilters';
import Recipes from './components/Recipes';
import Footer from '../../components-global/Footer';

const Recipe = () => {
  const { type } = useParams();
  const { isLoading } = useContext(context);

  return (
    <div>
      {type === 'comidas' && <Header title="Comidas" hasSearchBar />}
      {type === 'bebidas' && <Header title="Bebidas" hasSearchBar />}
      {isLoading && <ReactLoading type="spin" color="green" height={150} />}
      {!isLoading && <RenderCards />}
      <RecipeFilters />
      <Recipes />
      <Footer />
    </div>
  );
};

export default Recipe;
