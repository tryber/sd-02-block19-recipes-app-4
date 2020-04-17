import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  favoriteLocal,
  initFavoriteParam,
} from '../services/favorite';
import { proggressHasId, addProggress } from '../services/proggress';

const recomended = () => (
  <div className="recomended">
    <p className="subtitle">Recomended</p>
  </div>
);

const ingredientsList = (ingridients) => (
  <ul>
    {ingridients.map((item, index) => (
      <li key={`${item[0]}${item[1]}`}>
        <span data-testid={`${index}-ingredient-name`}>{item[0]}</span>
        <span data-testid={`${index}-ingredient-measure`}> - {item[1]}</span>
      </li>
    ))}
  </ul>
);

const ingredientsCheckbox = (ingridients) => (
  <div>
    {ingridients.map((item) => (
      <div className="checkbox" key={item}>
        <input type="checkbox" key={item} name={item} />
        <p>{item}</p>
      </div>
    ))}
  </div>
);

const ingredients = (ingridients, making) => (
  <div className="ingredients">
    <p className="subtitle">Ingredients</p>
    <div className="box">
      {(making) ?
        ingredientsCheckbox(ingridients) :
        ingredientsList(ingridients)}
    </div>
  </div>
);

const instruction = (strInstructions) => (
  <div className="intructions">
    <p className="subtitle">Intructions</p>
    <div className="box">
      <p data-testid="instructions">{strInstructions}</p>
    </div>
  </div>
);

const renderVideo = (strYoutube) => {
  const youtube = strYoutube.replace('watch?v=', 'v/-');
  return (
    <embed
      data-testid="video"
      src={youtube}
      type="application/x-shockwave-flash"
      allowscriptaccess="always"
    />
  );
};

const not = () => (
  <div className="video">
    <p>Video not found</p>
  </div>
);

const video = (strYoutube) => (
  <div className="video">
    <p className="subtitle">Video</p>
    {(strYoutube) ? renderVideo(strYoutube) : not()}
  </div>
);

const switchInit = (bool) => {
  if (bool) {
    return 'Continuar receita';
  }
  return 'Iniciar receita';
};

const btnFavorite = (data, setFavorite) => {
  favoriteLocal(data, setFavorite);
};

const header = (strFood, data, favorite, setFavorite) => (
  <div className="header">
    <p className="title" data-testid="recipe-title">{strFood}</p>
    <div>
      <button type="button" data-testid="share-btn">
        <span className="material-icons">
          share
        </span>
      </button>
      {<button type="button" data-testid="favorite-btn">
        <span
          className="material-icons"
          onClick={() => btnFavorite(data, setFavorite)}
        >
          {(favorite) ? 'favorite' : 'favorite_border'}
        </span>
      </button>}
    </div>
  </div>
);

const handleBtnMaking = (history) => {
  history.push('/receitas-feitas');
};

const handleBtnStart = (data, type, history) => {
  addProggress(data);
  const id = data.id;
  history.push(`/receitas/${type}/${id}/making`);
};

const btnMaking = (history) => (
  <button
    type="button"
    className="init"
    data-testid="start-recipe-btn"
    onClick={() => handleBtnMaking(history)}
  >
    Finalizar receita
  </button>
);

const btnStart = (data, type, history) => (
  <button
    type="button"
    className="init"
    data-testid="start-recipe-btn"
    onClick={() => handleBtnStart(data, type, history)}
  >
    {switchInit(proggressHasId(data))}
  </button>
);

const buttonSwitch = (making, data, type, history) => {
  if (making) {
    return btnMaking(history);
  }
  return btnStart(data, type, history);
};

function Generics(props) {
  const { data, making, type, history } = props;
  const [favorite, setFavorite] = useState(initFavoriteParam(data));
  const { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients } = data;
  return (
    <React.Fragment>
      <img src={strThumb} data-testid="recipe-photo" alt="" />
      <div className="main">
        {header(strFood, data, favorite, setFavorite)}
        <p className="type">{strCategory}</p>
        {ingredients(ingridients, making)}
        {instruction(strInstructions)}
        {(making) ? <div /> : (video(strYoutube))}
        {(making) ? <div /> : recomended()}
        {buttonSwitch(making, data, type, history)}
      </div>
    </React.Fragment>
  );
}

Generics.propTypes = {
  obj: propTypes.instanceOf(Object),
};

export default Generics;
