import React, { useState } from 'react';
import propTypes from 'prop-types';

import {
  convertArrayObjToString,
  convertStringToArrayObj,
} from '../../../components-global/services/localservice';
import { favoriteDeletebyId } from '../../../components-global/services/favorite';

import './icons.css';

const btnFavorite = (data, setItems) => {
  const arr = favoriteDeletebyId(data);
  localStorage.setItem('favoriteRecipes', convertArrayObjToString(arr));
  const str = convertStringToArrayObj(localStorage.getItem('favoriteRecipes'));
  setItems(str);
};

const Favorite = (props) => {
  const { data, setItems } = props
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="material-icons"
      onClick={() => btnFavorite(data, setItems)}
    >
      favorite
    </button>
  );
};

Favorite.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  setItems: propTypes.func.isRequired,
};

export default Favorite;
