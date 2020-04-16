import React, { useContext, useEffect } from 'react';
import RecipeAppContext from '../../context/Context';

const InputSearchBar = () => {
  const { searchBarInput, setSearchBarInput } = useContext(RecipeAppContext);

  useEffect(() => {
    console.log(searchBarInput)
  }, [searchBarInput]);

  return (
    <div className='input-search-container'>
      <input
        onChange={(e) => setSearchBarInput(e.target.value)}
        value={searchBarInput}
        placeholder="Digite aqui sua busca"
        className="input-search" />
    </div>
  )
};

export default InputSearchBar;
