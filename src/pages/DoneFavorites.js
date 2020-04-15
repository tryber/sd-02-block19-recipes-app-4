import React, { useContext } from 'react';
import RecipeAppContext from '../context/Context';

const DoneFavorites = () => {
  const context = useContext(RecipeAppContext);

  console.log(context);

  return (
    <div>
      <p>DoneFavorites</p>
    </div>
  );
};

export default DoneFavorites;
