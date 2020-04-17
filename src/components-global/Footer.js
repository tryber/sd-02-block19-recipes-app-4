import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../context/Context';
import './Footer.css';

const linkToDrinks = (setDB) => (
  <Link
    data-testid="drinks-bottom-btn"
    to="/bebidas"
    onClick={() => setDB('thecocktaildb')}
  >
    <li><span className="material-icons">local_bar</span></li>
  </Link>
);

const linkToExplore = () => (
  <Link
    to="/explorar"
    data-testid="explore-bottom-btn"
  >
    <li><span className="material-icons">explore</span></li>
  </Link>
);

const linkToFood = (setDB) => (
  <Link
    data-testid="food-bottom-btn"
    to="/comidas"
    onClick={() => setDB('themealdb')}
  >
    <li><span className="material-icons">local_pizza</span></li>
  </Link>
);

const Footer = () => {
  const { dataBase: [, setDB] } = useContext(context);
  return (
    <div className="footer-container">
      <div className="phantom-footer" />
      <div className="footer-list-container">
        <ul className="flex-footer-container">
          {linkToDrinks(setDB)}
          {linkToExplore()}
          {linkToFood(setDB)}
        </ul>
      </div>
    </div >
  );
};

export default Footer;
