import React, { useContext, useEffect } from 'react';
import RecipeAppContext from '../../context/Context';
import './style/RadioBtnSearchBar.css';

const RadioBtnSearchBar = () => {
  const { radioButtonSearch, setRadioButtonSearch } = useContext(RecipeAppContext);

  useEffect(() => {
    console.log(radioButtonSearch)
  }, [radioButtonSearch]);

  return (
    <form
      onChange={(e) => setRadioButtonSearch(e.target.value)}
      value={radioButtonSearch}
      className='form-header-flex'
    >
      <div className="option-container">
        <input type="radio" name="gender" value="ingredients" />
        <div>Ingredientes</div>
      </div>
      <div className="option-container">
        <input type="radio" name="gender" value="name" />
        <div>Nome</div>
      </div>
      <div className="option-container">
        <input type="radio" name="gender" value="first" />
        <div>Primeira letra</div>
      </div>
    </form>
  )
};

export default RadioBtnSearchBar;
