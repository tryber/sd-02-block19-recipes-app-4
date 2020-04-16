import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="phantom-footer" />
    <div className="footer-list-container">
      <ul className="flex-footer-container">
        <Link
          data-testid="drinks-bottom-btn"
          to="/bebidas">
          <li><span className="material-icons">local_bar</span></li>
        </Link>
        <Link
          to="/explorar"
          data-testid="explore-bottom-btn">
          <li><span className="material-icons">explore</span></li>
        </Link>
        <Link
          data-testid="food-bottom-btn"
          to="/comidas">
          <li><span className="material-icons">local_pizza</span></li>
        </Link>
      </ul>
    </div>
  </div >
);

export default Footer;
