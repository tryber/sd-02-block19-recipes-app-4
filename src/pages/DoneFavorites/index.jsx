import React from 'react';
import propTypes from 'prop-types';
import DoneRecipes from './DoneRecipes';
import FavoritesRecipes from './FavoritesRecipes';

function switchDoneFavorite(history) {
  if (window.location.href === 'http://localhost:3000/receitas-favoritas') {
    return <FavoritesRecipes history={history} />;
  }
  if (window.location.href === 'http://localhost:3000/receitas-feitas') {
    return <DoneRecipes history={history} />;
  }
}

const DoneFavorites = (props) => {
  const { history } = props;
  return (
    <div>
      {switchDoneFavorite(history)}
    </div>
  );
};

DoneFavorites.propTypes = {
  history: propTypes.instanceOf(Object).isRequired,
};

export default DoneFavorites;
