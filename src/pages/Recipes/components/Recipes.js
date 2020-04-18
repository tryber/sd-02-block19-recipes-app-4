import React, { useEffect, useContext } from 'react';
import context from '../../../context/Context';
import RenderCards from '../../../components-global/renderCards';

const Recipes = () => {
  const { dataBase: [db], fetchRecipe, selectedFilterContext: [selectedFilter],
    results: [data, setData],
  } = useContext(context);
  const randomMeals = (response) => {
    console.log(response.meals || response.drinks);
    setData((prevData) => [...prevData, response]);
  };
  useEffect(() => {
    if (selectedFilter !== 'All') {
      fetchRecipe(db, `filter.php?c=${selectedFilter}`, setData);
    } else {
      setData([]);
      for (let i = 0; i < 12; i += 1) {
        fetchRecipe(db, 'random.php', randomMeals);
      }
    }
    return () => {
      console.log('desmontou');
      setData([]);
    };
  }, [selectedFilter]);

  return (
    <div>
      <RenderCards />
    </div>
  );
};

export default Recipes;
