import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  favoriteLocal,
  initFavoriteParam,
} from '../services/favorite';
import { proggressHasId, addProggress } from '../services/proggress';
import Carousel from './Carousel';

const recomended = () => (
  <div className="recomended">
    <p className="subtitle">Recomended</p>
    <Carousel />
  </div>
);

const ingredientsList = (checks) => (
  <ul>
    {checks.map((item, index) => (
      <li key={`${item.ingridient}${item.measure}`}>
        <span data-testid={`${index}-ingredient-name`}>{item.ingridient}</span>
        <span data-testid={`${index}-ingredient-measure`}> - {item.measure}</span>
      </li>
    ))}
  </ul>
);

const allCheckedFunc = (checks) => (!checks.every((obj) => obj.check));

const changeHandle = (e, checks, setChecks, item, setAllChecked) => {
  const { name, checked } = e.target;
  document.querySelector(`.${item.ingridient}${item.measure}`.replace(/\s/g, ''))
    .style.textDecoration = (checked) ? 'line-through' : 'none';
  const obj = checks;
  obj[name].check = checked;
  setChecks(() => obj);
  setAllChecked(allCheckedFunc(obj));
};

const ingredientsCheckbox = (checks, setChecks, setAllChecked) => (
  <div>
    {checks.map((item, index) => (
      <div className="checkbox" key={`${item.ingridient}${item.measure}`}>
        <input
          type="checkbox"
          name={index}
          onChange={(e) => changeHandle(e, checks, setChecks, item, setAllChecked)}
        />
        <div className={`${item.ingridient}${item.measure}`.replace(/\s/g, '')}>
          <span data-testid={`${index}-ingredient-name`}>{item.ingridient}</span>
          <span data-testid={`${index}-ingredient-measure`}> - {item.measure}</span>
        </div>
      </div>
    ))}
  </div>
);

const ingredients = (checks, making, setChecks, setAllChecked) => (
  <div className="ingredients">
    <p className="subtitle">Ingredients</p>
    <div className="box">
      {(making) ?
        ingredientsCheckbox(checks, setChecks, setAllChecked) :
        ingredientsList(checks)}
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
      <button
        type="button"
        data-testid="favorite-btn"
        className="material-icons"
        onClick={() => btnFavorite(data, setFavorite)}
      >
        {(favorite) ? 'favorite' : 'favorite_border'}
      </button>
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

const btnMaking = (history, allChecked2) => (
  <button
    type="button"
    className="init"
    data-testid="start-recipe-btn"
    onClick={() => handleBtnMaking(history)}
    disabled={allChecked2}
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

const buttonSwitch = (making, data, type, history, checks) => {
  if (making) {
    return btnMaking(history, checks);
  }
  return btnStart(data, type, history);
};

const initChecks = (ingridients) => {
  const arr = [];
  ingridients.forEach((item) => {
    const obj = {};
    obj.ingridient = item[0];
    obj.measure = item[1];
    obj.check = false;
    arr.push(obj);
  });
  return arr;
};

function Generics(props) {
  const { data, making, type, history } = props;
  const { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients } = data;
  const [checks, setChecks] = useState(initChecks(ingridients));
  const [allChecked, setAllChecked] = useState(true);
  const [favorite, setFavorite] = useState(initFavoriteParam(data));

  return (
    <React.Fragment>
      <img src={strThumb} data-testid="recipe-photo" alt="" />
      <div className="main">
        {header(strFood, data, favorite, setFavorite)}
        <p className="type">{strCategory}</p>
        {ingredients(checks, making, setChecks, setAllChecked)}
        {instruction(strInstructions)}
        {(making) ? <div /> : (video(strYoutube))}
        {(making) ? <div /> : recomended()}
        {buttonSwitch(making, data, type, history, allChecked)}
      </div>
    </React.Fragment>
  );
}

Generics.propTypes = {
  data: propTypes.func.isRequired,
  making: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  history: propTypes.func.isRequired,
};

export default Generics;
