import React, { useState } from 'react';
import propTypes from 'prop-types';

import {
  favoriteLocal,
  initFavoriteParam,
} from './services/favorite';

const btnFavorite = (data, setFavorite) => {
  favoriteLocal(data, setFavorite);
};

const Favorite = (props) => {
  const { data } = props;
  const [favorite, setFavorite] = useState(initFavoriteParam(data));
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="material-icons"
      onClick={() => btnFavorite(data, setFavorite)}
    >
      {(favorite) ? 'favorite' : 'favorite_border'}
    </button>
  );
};

Favorite.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};

export default Favorite;
