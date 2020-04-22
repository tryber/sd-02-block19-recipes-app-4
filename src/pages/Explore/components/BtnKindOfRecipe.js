import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../style/BtnExplore.css';

const BtnKindOfRecipe = () => {
  const history = useHistory();
  const { type } = useParams();

  const changeRoute = (route) => {
    history.push(`/explorar/${type}/${route}`);
  };

  return (
    <div className="btn-explore-container">
      <button onClick={() => changeRoute('ingredientes')}>Por ingredientes</button>
      {type !== 'bebidas' &&
        <button onClick={() => changeRoute('area')}>Por local de origem</button>}
      <button onClick={() => changeRoute('surprise-me')}>Me surpreenda!</button>
    </div>
  );
};

export default BtnKindOfRecipe;
