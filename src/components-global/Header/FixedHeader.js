import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';
import './style/FixedHeader.css';

const FixedHeader = ({ title, hasSearchBar }) => {
  const { isOnSearchBar, setIsOnSearchBar } = useContext(RecipeAppContext);

  const toggleClick = () => {
    setIsOnSearchBar(!isOnSearchBar);
  }

  return (
    <div>
      <nav className='header-container'>
        <Link to="./profile"><li><span className="material-icons">account_box</span></li></Link>
        <li>{title}</li>
        {hasSearchBar &&
          <li><span onClick={() => toggleClick()} className="material-icons">search</span></li>}
      </nav>
    </div>
  )
};

export default FixedHeader;
