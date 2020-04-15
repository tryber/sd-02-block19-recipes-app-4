import React, { useContext, useEffect } from 'react';
import RecipeAppContext from '../context/Context';

const Test = () => {
  const { fetchRecipe, setArrabiata, arrabiata } = useContext(RecipeAppContext);

  const xablau = (response) => {
    setArrabiata(response);
  }

  useEffect(() => {
    fetchRecipe('themealdb', 'search.php?s=Arrabiata', xablau);
  }, []);
  return (
    <React.Fragment>
      <div id="meals">
        <p>{JSON.stringify(arrabiata)}</p>
      </div>
    </React.Fragment>
  );
};

export default Test;
