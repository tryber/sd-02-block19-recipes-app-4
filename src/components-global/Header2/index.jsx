import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function btnPerson(history) {
  history.push('/perfil');
}

const Header2 = (props) => {
  const { title, history } = props;
  return (
    <div className="comp_header2">
      <button
      type="button"
      onClick={() => btnPerson(history)}
      className="material-icons"
    >
      person
    </button>
      <p className="title">{title}</p>
    </div>
  );
};

export default Header2;

