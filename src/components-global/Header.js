import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeAppContext from '../context/Context';
import './Header.css';

const toggleClick = (setIsOnSearchBar, isOnSearchBar) => {
  setIsOnSearchBar(!isOnSearchBar);
}

const searchBarInputFunc = (e, setSearchBarInput) => {
  const { value } = e.target;
  setSearchBarInput(value)
}

const radioButtonFunc = (e,setRadioButtonSearch) => {
  const { value } = e.target;
  setRadioButtonSearch(value);
}

const searchField = (setSearchBarInput, searchBarInput, radioButtonSearch, setRadioButtonSearch) => {
  return (
    <div className='search-bar-container'>
      <div className='input-search-container'>
        <input onChange={(e) => searchBarInputFunc(e, setSearchBarInput)} value={searchBarInput} placeholder="Digite aqui sua busca" className="input-search" />
      </div>
      <form onChange={(e) => radioButtonFunc(e, setRadioButtonSearch)} value={radioButtonSearch} className='form-header-flex'>
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
    </div>
  )
};

const Header = ({ title }) => {
  const { searchBarInput, setSearchBarInput, isOnSearchBar, setIsOnSearchBar, radioButtonSearch,
    setRadioButtonSearch } = useContext(RecipeAppContext);

  useEffect(() => {
    console.log(isOnSearchBar, searchBarInput, radioButtonSearch)
  }, [searchBarInput, isOnSearchBar, radioButtonSearch]);

  return (
    <div>
      <nav className='header-container'>
        <Link to="./profile"><li><span className="material-icons">account_box</span></li></Link>
        <li>{title}</li>
        <li onClick={() => toggleClick(setIsOnSearchBar, isOnSearchBar)}><span className="material-icons">search</span></li>
      </nav>
      {isOnSearchBar && searchField(setSearchBarInput, searchBarInput, radioButtonSearch, setRadioButtonSearch)}
    </div>
  )
};

export default Header;
