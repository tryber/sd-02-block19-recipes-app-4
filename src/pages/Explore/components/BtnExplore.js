import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/BtnExplore.css';

const BtnExplore = () => {
  const history = useHistory();

  const changeRoute = (route) => {
    history.push(`/explorar/${route}`);
  };

  return (
    <div className="btn-explore-container">
      <button onClick={() => changeRoute('comidas')}>Explorar Comidas</button>
      <button onClick={() => changeRoute('bebidas')}>Explorar Bebidas</button>
    </div>
  );
};

export default BtnExplore;
