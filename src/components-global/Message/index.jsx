import React, { useEffect } from 'react';
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
    setInterval(() => setShow(false), 2000);
  }, [show]);

  return (
    <React.Fragment>
      {show ? render(message) : <div />}
    </React.Fragment>
  );
};

export default Message;
