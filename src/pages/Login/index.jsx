import React, { useContext } from 'react';
import InputEmail from './components/InputEmail.jsx';
import InputPass from './components/InputPass';
import RecipeAppContext from '../../context/Context';
// import { Link } from 'react-router-dom';
import './style/style.css';

const Login = () => {
  const context = useContext(RecipeAppContext);
  const { emailBol, pass, submitLogin } = context;
  // console.log(context);
  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div className="containerLogin">
      <h1>Login</h1>
      <form className="containerForm">
        <InputEmail />
        <InputPass />
        {/* <Link to="/comidas"> */}
        {emailBol && pass
        ? <button
          data-testid="login-submit-btn"
          onClick={(e) => handleSubmit(e)}
        >Entrar</button>
        : <button data-testid="login-submit-btn" disabled>Entrar</button>}
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;
