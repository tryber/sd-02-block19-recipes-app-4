import React from 'react';
import propTypes from 'prop-types';

const btnShare = (setShow) => {
  setShow(true);
  window.navigator.clipboard.writeText(window.location.href);
};

const Share = (props) => {
  const { setShow } = props;
  return (
    <button type="button" data-testid="share-btn" onClick={() => btnShare(setShow)}>
      <span className="material-icons">
        share
      </span>
    </button>
  );
};

Share.propTypes = {
  setShow: propTypes.func.isRequired,
};

export default Share;
