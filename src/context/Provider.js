import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RecipeAppContext from './Context';
import recipeAPI from '../services/callAPI';
import { meals, drinks } from '../services/params';

const RecipeAppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [makeRecipe, setMakeRecipe] = useState(false);
  const [andrey, setAndrey] = useState(meals);
  const [andrey2, setAndrey2] = useState(drinks);

  const fetchRecipe = (type, search, toDoFunction, toDoError) => {
    recipeAPI(type, search)
      .then((response) => toDoFunction(response),
        (error) => toDoError(error),
      );
  };

  const context = {
    isLoading,
    setIsLoading,
    fetchRecipe,
    makeRecipe,
    setMakeRecipe,
    andrey,
    setAndrey,
    andrey2,
    setAndrey2,
  };

  return (
    <RecipeAppContext.Provider value={context}> {children}</RecipeAppContext.Provider>
  );
};

export default RecipeAppProvider;

RecipeAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
