import React, { useEffect, useContext, useState } from 'react';
import context from '../../../context/Context';
import '../style/RecipeFilters.css';

const selectedFilterClass = (filter, selectedFilter) => {
  if (filter === selectedFilter) return 'selected-border-red';
  return 'not-selected-border';
};

const selectFilterOnClick = (filter, selectedFilter, setSelectedFilter, setData) => {
  if (filter === selectedFilter) { setSelectedFilter("All") }
  else setSelectedFilter(filter);
  setData([])
};

const RecipeFilters = () => {
  const { dataBase: [db], fetchRecipe, selectedFilterContext: [selectedFilter, setSelectedFilter],
    results: [, setData], setIsLoading, isLoading,
  } = useContext(context);
  const [categories, setCategories] = useState([]);

  const getFilters = (response) => {
    setCategories(response);
    setIsLoading(false);
  }

  const categoriesList = categories.meals || categories.drinks || [];
  const arrCategories = ['All', ...categoriesList.filter((categorie, index) => {
    return (index < 5);
  }).map(({ strCategory }) => strCategory)];

  useEffect(() => {
    setIsLoading('true');
    fetchRecipe(db, "list.php?c=list", getFilters);
  }, [db]);

  return (
    <div>
      {!isLoading && <div>{arrCategories.map((filter) => {
        return (
          <button
            key={filter}
            className={selectedFilterClass(filter, selectedFilter)}
            onClick={() => selectFilterOnClick(filter, selectedFilter, setSelectedFilter, setData)}
            data-testid={`${filter}-category-filter`}
          >{filter}
          </button>)
      })}</div>}
    </div>
  );
}

export default RecipeFilters;
