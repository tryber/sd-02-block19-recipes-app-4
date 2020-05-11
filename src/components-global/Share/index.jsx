import React from 'react';
import propTypes from 'prop-types';

import './icons.css';

const btnShare = (setShow) => {
  setShow(true);
  window.navigator.clipboard.writeText(window.location.href);
};

const Share = (props) => {
  const { setShow, testid } = props;
  return (
    <button
      type="button"
      data-testid={testid}
      onClick={() => btnShare(setShow)}
      className="material-icons"
    >
      share
    </button>
  );
};

Share.propTypes = {
  setShow: propTypes.func.isRequired,
};

export default Share;
