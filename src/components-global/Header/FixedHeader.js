import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import context from '../../context/Context';
import './style/FixedHeader.css';

const FixedHeader = ({ title, hasSearchBar }) => {
  const { isOnSearchBar, setIsOnSearchBar, defaultSettings
     } = useContext(context);

  const toggleClick = () => {
    if (!isOnSearchBar) {
      defaultSettings();
    };
    setIsOnSearchBar(!isOnSearchBar);
  }
  return (
    <div>
      <nav className="header-container">
        <Link
          to="./profile"
          data-testid="profile-top-btn"
        >
          <li><span className="material-icons">account_box</span></li>
        </Link>
        <li data-testid="page-title">{title}</li>
        {hasSearchBar &&
          <li><button data-testid="search-top-btn" onClick={() => toggleClick()}>
            <span className="material-icons">search</span>
          </button></li>}
      </nav>
    </div>
  );
};

export default FixedHeader;

FixedHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearchBar: PropTypes.bool.isRequired,
};
