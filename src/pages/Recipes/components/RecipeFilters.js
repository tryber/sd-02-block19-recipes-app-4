import React, { useEffect, useContext, useState } from 'react';
import context from '../../../context/Context';
import '../style/RecipeFilters.css';

const selectedFilterClass = (filter, selectedFilter) => {
  if (filter === selectedFilter) return 'selected-border-red';
  return 'not-selected-border';
};

const selectFilterOnClick = (filter, selectedFilter, setSelectedFilter, setData) => {
  if (filter === selectedFilter) setSelectedFilter('All');
  else setSelectedFilter(filter);
  setData([]);
};

const disableFuncBtnFilter = (selectedFilter, data) => {
  switch (selectedFilter) {
    case ("All"):
      return (data.length !== 12);
    default:
      return false;
  }
};

const RecipeFilters = () => {
  const { dataBase: [db], fetchRecipe, selectedFilterContext: [selectedFilter, setSelectedFilter],
    results: [data, setData], setIsLoading, isLoading,
  } = useContext(context);
  const [categories, setCategories] = useState([]);

  const getFilters = (response) => {
    setCategories(response);
    setIsLoading(false);
  };

  const categoriesList = categories.meals || categories.drinks || [];
  const arrCategories = ['All',
    ...categoriesList
      .filter((categorie, index) => index < 5)
      .map(({ strCategory }) => strCategory)];

  useEffect(() => {
    setIsLoading('true');
    fetchRecipe(db, 'list.php?c=list', getFilters);
  }, [db]);

  return (
    <div>
      {!isLoading && <div className="btn-filter-container">{arrCategories.map((filter) => (
        <button
          key={filter}
          className={selectedFilterClass(filter, selectedFilter)}
          onClick={() => selectFilterOnClick(filter, selectedFilter, setSelectedFilter, setData)}
          data-testid={`${filter}-category-filter`}
          disabled={disableFuncBtnFilter(selectedFilter, data)}
        >{filter}
        </button>
      ))}</div>}
    </div>
  );
};

export default RecipeFilters;
