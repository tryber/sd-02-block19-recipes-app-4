import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeAppContext from './Context';
import recipeAPI from '../services/callAPI';

const RecipeAppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchBarInput, setSearchBarInput] = useState('');
  const [isOnSearchBar, setIsOnSearchBar] = useState(false);
  const [radioButtonSearch, setRadioButtonSearch] = useState(false);

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
    searchBarInput,
    setSearchBarInput,
    isOnSearchBar,
    setIsOnSearchBar,
    radioButtonSearch,
    setRadioButtonSearch,
  };

  return (
    <RecipeAppContext.Provider value={context}> {children}</RecipeAppContext.Provider>
  );
};

export default RecipeAppProvider;

RecipeAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
