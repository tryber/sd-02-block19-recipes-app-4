import React from 'react';
import '../style/carousel.css';

function handleClick(e) {
  // const name = e.target.getAttribute('name');
  // const inputs = document.querySelectorAll('input[name="r"');
  // inputs.forEach((elem) => elem.setAttribute('checked', false));
  // document.querySelector(`.${name}`).setAttribute('checked', true);
}

function Carousel() {
  return (
    <div className="carousel">
      <div className="slides">
        <input type="radio" name="r" className="r1" id="r1" />
        <input type="radio" name="r" className="r2" id="r2" />
        <input type="radio" name="r" className="r3" id="r3" />
        <div className="slide s1">
          <img className="carousel_img" src="https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg" alt="" />
        </div>
        <div className="slide">
          <img className="carousel_img" src="https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg" alt="" />
        </div>
        <div className="slide">
          <img className="carousel_img" src="https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg" alt="" />
        </div>
      </div>

      <div className="navigation">
        <label onClick={(e) => handleClick(e)} htmlFor="r1" className="bar" />
        <label onClick={(e) => handleClick(e)} htmlFor="r2" className="bar" />
        <label onClick={(e) => handleClick(e)} htmlFor="r3" className="bar" />
      </div>
    </div>
  );
}

export default Carousel;
