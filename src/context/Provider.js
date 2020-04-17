import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from './Context';
import recipeAPI from '../services/callAPI';

const RecipeAppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [emailBool, setEmailBool] = useState(false);
  const [emailUser, setEmailUser] = useState('');
  const [pass, setPass] = useState(false);
  const [storage, setStorage] = useState({});

  const fetchRecipe = (type, search, toDoFunction, toDoError) => {
    recipeAPI(type, search)
      .then((response) => toDoFunction(response),
        (error) => toDoError(error),
      );
  };

  const submitLogin = () => {
    localStorage.setItem('meals-token', 1);
    localStorage.setItem('cocktails-token', 1);
    setStorage(() => {
      const dados = { email: emailUser };
      localStorage.setItem('user', JSON.stringify(dados));
      return dados;
    });
  };

  const context = {
    isLoading,
    setIsLoading,
    fetchRecipe,
    emailBool,
    setEmailBool,
    emailUser,
    setEmailUser,
    pass,
    setPass,
    submitLogin,
    storage,
    setStorage,
  };

  return (
    <RecipeAppContext.Provider value={context}> {children}</RecipeAppContext.Provider>
  );
};

export default RecipeAppProvider;

RecipeAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
