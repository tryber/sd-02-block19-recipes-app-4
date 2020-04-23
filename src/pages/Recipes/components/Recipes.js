import React, { useContext } from 'react';
import context from '../../../context/Context';
import RenderCards from '../../../components-global/renderCards';
import useRamdomCard from '../../../customHooks/useRamdomCard';
import RenderAllCards from '../../../components-global/RenderAllCards';
import RenderByFilter from '../components/RenderByFilter';

const Recipes = () => {
  const { dataBase: [db], fetchRecipe, selectedFilterContext: [selectedFilter],
    results: [, setData] } = useContext(context);

    useRamdomCard()
    
  return (
    <div>
      {selectedFilter === 'All' && <RenderAllCards />}
      {selectedFilter !== 'All' && <RenderByFilter />}
      <RenderCards />
    </div>
  );
};

export default Recipes;
