import React, { useEffect, useContext } from 'react';
import InputSearchBar from './InputSearchBar';
import RadioBtnSearchBar from './RadioBtnSearchBar';
import context from '../../context/Context';
import './style/HiddenableHeader.css';

const HiddenableHeader = () => (
    <div className="search-bar-container">
      <InputSearchBar />
      <RadioBtnSearchBar />
    </div>
  );

export default HiddenableHeader;
