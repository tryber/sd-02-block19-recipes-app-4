import React, { useContext, useState } from 'react';
// import RecipeAppContext from '../../context/Context';
// import { Link } from 'react-router-dom';
import './style/style.css';

const Login = () => {
  // const context = useContext(RecipeAppContext);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const resultadoEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChangeHandleEmail = (e) => {
    if(resultadoEmail.test(e.value)) {
      setEmail(true);
      e.style.border = "1px solid green";
    } else {
      e.style.borderColor = "red";
      setEmail(false);
    }
  };

  const onChangeHandlePass = (e) => {
    if(e.value.length >= 8) {
      setPass(true);
      e.style.border = "1px solid green";
    } else {
      e.style.borderColor = "red";
      setPass(false);
    }
  };

  return (
    <div className="containerLogin">
      <h1>Login</h1>
      <form className="containerForm">
        <input
          type="text"
          placeholder="EMAIL"
          data-testid="email-input"
          name="email"
          required
          onChange={(e) => onChangeHandleEmail(e.target)}
        />
        <input
          type="password"
          placeholder="SENHA"
          name="password"
          data-testid="password-input"
          required minLength="8"
          onChange={(e) => onChangeHandlePass(e.target)}
        />
        {/* <Link to="/comidas"> */}
        {email && pass
        ? <button
            data-testid="login-submit-btn"
            onClick={(e) => handleSubmit(e)}>
            Entrar
          </button>
        : <button data-testid="login-submit-btn" disabled>Entrar</button>}
          
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;
