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
    show && setTimeout(() => setShow(false), 5000);
  }, [show]);

  return (
    show && render(message)
  );
};

Message.propTypes = {
  message: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  setShow: propTypes.func.isRequired,
};

export default Message;
