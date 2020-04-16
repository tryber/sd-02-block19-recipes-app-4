import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import context from '../../context/Context';
import Header from '../../components-global/Header';
import RenderCards from '../../components-global/renderCards';
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
      <p>Recipe: {type}</p>
      <Footer />
    </div>
  );
};

export default Recipe;
