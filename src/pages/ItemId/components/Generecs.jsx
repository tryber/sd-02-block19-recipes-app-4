import React, { useContext } from 'react';
import RecipeAppContext from '../../../context/Context';

const recomended = () => {
  return (
    <div className="recomended">
      <p className="subtitle">Recomended</p>
    </div>
  );
};

const ingredients = (ingridients, makeRecipe) => {
  return (
    <div className="ingredients">
      <p className="subtitle">Ingredients</p>
      <div className="box">
        {(makeRecipe) ?
          ingredientsCheckbox(ingridients) :
          ingredientsList(ingridients)}
      </div>
    </div>
  );
};

const ingredientsList = (ingridients) => {
  return (
    <ul>
      {ingridients.map((item, index) => (
        <li key={item}>
          <span data-testid={`${index}-ingredient-name`}>{item[0]}</span>
          <span data-testid={`${index}-ingredient-measure`}> - {item[1]}</span>
        </li>
      ))}
    </ul>
  );
};

const ingredientsCheckbox = (ingridients) => {
  return (
    <div>
      {ingridients.map((item) => (
        <div className="checkbox" key={item}>
          <input type="checkbox" key={item} name={item} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

const instruction = (strInstructions) => {
  return (
    <div className="intructions">
      <p className="subtitle">Intructions</p>
      <div className="box">
        <p data-testid="instructions">{strInstructions}</p>
      </div>
    </div>
  );
};

const renderVideo = (strYoutube) => {
  strYoutube = strYoutube.replace('watch?v=', 'v/-');
  return (
    <div className="video">
      <p className="subtitle">Video</p>
      <embed
        data-testid="video"
        src={strYoutube}
        type="application/x-shockwave-flash"
        allowscriptaccess="always"
        allowFullScreen={true}
      />
    </div>
  );
};

const video = (strYoutube) => {
  const not = () => {
    return (
      <div className="video">
        <p>Video not found</p>
      </div>
    );
  }

  return (
    <div className="video"> 
      <p className="subtitle">Video</p>
      {(strYoutube) ? renderVideo(strYoutube) : not()}
    </div>
  );
};

const header = (strMeal) => {
  return (
    <div className="header">
      <p className="title" data-testid="recipe-title">{strMeal}</p>
      <div>
        <button type="button" data-testid="share-btn">
          <span className="material-icons">
            share
          </span>
        </button>
        <button type="button" data-testid="favorite-btn">
          <span className="material-icons">
            favorite_border
          </span>
        </button>
      </div>
    </div>
  );
};

const handleClick = (makeRecipe, setMakeRecipe) => {
  setMakeRecipe(!makeRecipe);
};

function Generics(props) {
  const { obj } = props;
  const { makeRecipe, setMakeRecipe } = useContext(RecipeAppContext);
  const { strFood, strThumb, strCategory, strInstructions, strYoutube, ingridients } = obj;
  
  return (
    <React.Fragment>
      <img src={strThumb} data-testid="recipe-photo" alt="" />
      <div className="main">
        {header(strFood)}
        <p className="type">{strCategory}</p>
        {ingredients(ingridients, makeRecipe)}
        {instruction(strInstructions)}
        {(makeRecipe) ? <div /> : (video(strYoutube))}
        {(makeRecipe) ? <div /> : recomended()}
        <button
          type="button"
          className="init"
          data-testid="start-recipe-btn"
          onClick={() => handleClick(makeRecipe, setMakeRecipe)}
        >
          {(makeRecipe) ? 'Finalize Recipe' : 'Init Recipe'} 
        </button>
      </div>
    </React.Fragment>
  );
}

export default Generics;
