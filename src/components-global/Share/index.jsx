import React from 'react';
import propTypes from 'prop-types';

import './icons.css';

const btnShare = (setShow, type, data) => {
  const id = data.id;
  setShow(true);
  window.navigator.clipboard.writeText(`http://localhost:3000/receitas/${type}/${id}`);
};

const Share = (props) => {
  const { setShow, testid, type, data } = props;
  return (
    <button
      type="button"
      data-testid={testid}
      onClick={() => btnShare(setShow, type, data)}
      className="material-icons"
    >
      share
    </button>
  );
};

Share.propTypes = {
  setShow: propTypes.func.isRequired,
  testid: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  data: propTypes.instanceOf(Object).isRequired,
};

export default Share;
