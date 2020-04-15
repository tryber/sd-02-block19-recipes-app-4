import React, { useContext } from 'react';
import RecipeAppContext from '../../context/Context';

const Login = () => {
  const context = useContext(RecipeAppContext);

  console.log(context);

  return (
    <div>
      <p>Login</p>
    </div>
  );
};

export default Login;
