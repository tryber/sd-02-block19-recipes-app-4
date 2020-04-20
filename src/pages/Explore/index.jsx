import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';
import Header from '../../components-global/Header';
import BtnExplore from './components/BtnExplore';
import Footer from '../../components-global/Footer';

const Explore = () => {

  const { type } = useParams();

  console.log(type)

  const { results: [data, setData] } = useContext(RecipeAppContext);

  useEffect(() => { setData('themealdb') }, []);

  return (
    <div>
      <Header title={`Explorar`} hasSearchBar />
      {!type && <BtnExplore />}
      <Footer />
    </div>
  );
};

export default Explore;
