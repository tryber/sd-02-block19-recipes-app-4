import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsProfile = () => {
  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <React.Fragment>
      <div className="buttons">
        <Link to="/receitas-feitas">
          <button>Receitas Feitas</button>
        </Link>
      </div>
      <div className="buttons">
        <Link to="/receitas-favoritas">
          <button>Receitas Favoritas</button>
        </Link>
      </div>
      <div className="buttons">
        <Link to="/">
          <button onClick={() => clearStorage()}>Sair</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ButtonsProfile;
