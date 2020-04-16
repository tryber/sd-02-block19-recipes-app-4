import React, { useEffect, useContext } from 'react';
import FixedHeader from './FixedHeader';
import HiddenableHeader from './HiddenableHeader';
import RecipeAppContext from '../../context/Context';

const Header = ({ title, hasSearchBar }) => {
  const { isOnSearchBar } = useContext(RecipeAppContext);

  useEffect(() => {
    console.log(isOnSearchBar)
  }, [isOnSearchBar]);

  return (
    <div>
      <FixedHeader title={title} hasSearchBar={hasSearchBar}/>
      {isOnSearchBar && <HiddenableHeader />}
    </div>
  )
};

export default Header;
