import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className="footer-container">
    <div className="phantom-footer" />
    <div className="footer-list-container">
      <ul className="flex-footer-container">
        <Link to="/bebidas"><li><span className="material-icons">local_drink</span></li></Link>
        <Link to="/explorar"><li><span className="material-icons">local_dining</span></li></Link>
        <Link to="/comidas"><li><span className="material-icons">local_pizza</span></li></Link>
      </ul>
    </div>
  </div >
);

export default Footer;
