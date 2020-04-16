import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';
import Header from '../../components-global/Header';
import Footer from '../../components-global/Footer';

const Explore = () => {
  const context = useContext(RecipeAppContext);
  const { type, kindOfRecipe } = useParams();

  console.log(context);

  return (
    <div>
      <Header title={`Explorar ${type}`} hasSearchBar={true}/>
      <p>Explore: {type}</p>
      <p>Explore: {kindOfRecipe}</p>
      <Footer />
    </div>
  );
};

export default Explore;
