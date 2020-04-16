import React, { useContext } from 'react';
import RecipeAppContext from '../../../context/Context';

const InputEmail = () => {
  const context = useContext(RecipeAppContext);
  const resultadoEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { setEmail } = context;

  const onChangeHandleEmail = (e) => {
    if (resultadoEmail.test(e.value)) {
      setEmail(true);
      e.style.border = '1px solid green';
    } else {
      e.style.borderColor = 'red';
      setEmail(false);
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="EMAIL"
        data-testid="email-input"
        name="email"
        required
        onChange={(e) => onChangeHandleEmail(e.target)}
      />
    </React.Fragment>
  );
};

export default InputEmail;
