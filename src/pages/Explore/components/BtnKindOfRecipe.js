import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BtnKindOfRecipe = () => {
  const history = useHistory();
  const { type } = useParams();

  const changeRoute = (route) => {
    history.push(`/explorar/${type}/${route}`);
  };

  return (
    <div>
      <button onClick={() => changeRoute('by-ingredient')}>Por ingredientes</button>
      {type !== 'bebidas' &&
        <button onClick={() => changeRoute('by-orign')}>Por local de origem</button>}
      <button onClick={() => changeRoute('surprise-me')}>Me surpreenda!</button>
    </div>
  );
};

export default BtnKindOfRecipe;