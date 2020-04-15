import React from 'react';
import './Header.css';

const SearchField = () => (
  <div className='search-bar-container'>
    <div className='input-search-container'>
      <input placeholder="Digite aqui sua busca" className="input-search" />
    </div>
    <form className='form-header-flex'>
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
);

const Header = ({ title }) => {
  return (
    <div>
      <nav className='header-container'>
        <li><span className="material-icons">account_box</span></li>
        <li>{title}</li>
        <li><span className="material-icons">search</span></li>
      </nav>
      <SearchField />
    </div>
  )
};

export default Header;
