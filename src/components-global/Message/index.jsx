import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import './style.css';

function render(message) {
  return (
    <div className="comp_message">
      <p>{message}</p>
    </div>
  );
}

const Message = (props) => {
  const { message, show, setShow } = props;

  useEffect(() => {
    setInterval(() => setShow(false), 3000);
  }, [show]);

  return (
    <React.Fragment>
      {show ? render(message) : <div />}
    </React.Fragment>
  );
};

Message.propTypes = {
  message: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  setShow: propTypes.func.isRequired,
};

export default Message;
