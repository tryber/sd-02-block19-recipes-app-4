import React, { useState } from 'react';
import propTypes from 'prop-types';

import { convertArrayObjToString } from '../../../components-global/services/localservice';
import { inProggressHasId, addInProggress } from '../services/inProggress';
import Carousel from './Carousel';
import CardRecomended from './CardRecomended';
import Message from '../../../components-global/Message';
import Favorite from '../../../components-global/Favorite';
import Share from '../../../components-global/Share';
import Ingridients from './Ingridients';


const recomended = (type) => {
  return (
    <div className="recomended">
      <p className="subtitle">Recomended</p>
      <Carousel>
        <CardRecomended type={type} />
        <p>tr</p><p>tr</p>
      </Carousel>
    </div>
  );
};

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

const header = (strFood, data, setShow) => (
  <div className="header">
    <p className="title" data-testid="recipe-title">{strFood}</p>
    <div>
      <Share setShow={setShow} />
      <Favorite data={data} />
    </div>
  </div>
);

const handleBtnMaking = (history, data) => {
  const { strCategory: category, id, strFood: title, strThumb: image } = data;
  const arr = localStorage.getItem('done-recipes') || [];
  arr.push({ id, category, title, image });
  localStorage.setItem('done-recipes', convertArrayObjToString(arr));
  history.push('/receitas-feitas');
};

const handleBtnStart = (data, type, history) => {
  addInProggress(data);
  const id = data.id;
  history.push(`/receitas/${type}/${id}/making`);
};

const btnMaking = (history, allChecked2, data) => (
  <button
    type="button"
    className="init"
    data-testid="start-recipe-btn"
    onClick={() => handleBtnMaking(history, data)}
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
    {switchInit(inProggressHasId(data))}
  </button>
);

const buttonSwitch = (making, data, type, history, checks) => {
  if (making) {
    return btnMaking(history, checks, data);
  }
  return btnStart(data, type, history);
};

function Generics(props) {
  const { data, making, type, history } = props;
  const { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients } = data;
  const [show, setShow] = useState(false);
  const [allChecked, setAllChecked] = useState(true);

  return (
    <React.Fragment>
      <img src={strThumb} data-testid="recipe-photo" alt="" />
      <div className="main">
        {header(strFood, data, setShow)}
        <p className="type">{strCategory}</p>
        <Ingridients ingridients={ingridients} setAllChecked={setAllChecked} making={making} data={data} />
        {instruction(strInstructions)}
        {(making) ? <div /> : (video(strYoutube))}
        {(making) ? <div /> : recomended(type)}
        {buttonSwitch(making, data, type, history, allChecked)}
      </div>
      <Message message="Cliped!" show={show} setShow={setShow} />
    </React.Fragment>
  );
}

Generics.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  making: propTypes.string,
  type: propTypes.string.isRequired,
  history: propTypes.instanceOf(Object).isRequired,
};

Generics.defaultProps = {
  making: undefined,
};

export default Generics;
