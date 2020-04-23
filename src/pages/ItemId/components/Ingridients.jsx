import React, { useState, useEffect } from 'react';
import { addProggress, deleteProggress } from '../services/proggress';
import {
  stringToObj,
} from '../../../components-global/services/localservice';

const initChecks = (data, ingridients) => {
  const arr = [];
  ingridients.forEach((item) => {
    const obj = {};
    obj.ingridient = item[0];
    obj.measure = item[1];
    obj.check = false;
    arr.push(obj);
  });
  initChecked(data, arr)
  return arr;
};

const initChecked = (data, arr) => {
  const { id } = data;
  const obj = stringToObj(localStorage.getItem('proggress'));
  const checks2 = arr;
  obj[id].forEach((item) => {
    checks2[item].check = true;
  });
};

const allCheckedFunc = (checks) => (!checks.every((obj) => obj.check));

const changeHandle = (e, checks, setChecks, item, setAllChecked, data) => {
  const { name, checked } = e.target;
  // document.querySelector(`.${item.ingridient}${item.measure}`.replace(/\s/g, ''))
  //   .style.textDecoration = (checked) ? 'line-through' : 'none';
  const obj = checks;
  obj[name].check = checked;
  setChecks(() => obj);
  setAllChecked(allCheckedFunc(obj));
  (checked) ? addProggress(data, name) : deleteProggress(data, name);
};

const ingredientsList = (checks) => (
  <ul>
    {checks.map((item, index) => (
      <li key={`${item.ingridient}${item.measure}`}>
        <span data-testid={`${index}-ingredient-name`}>{item.ingridient}</span>
        <span data-testid={`${index}-ingredient-measure`}> - {item.measure}</span>
      </li>
    ))}
  </ul>
);

const ingredientsCheckbox = (checks, setChecks, setAllChecked, data) => (
  <React.Fragment>
    {checks.map((item, index) => (
      <div className="checkbox" key={`${item.ingridient}${item.measure}`}>
        <input
          type="checkbox"
          name={index}
          onChange={(e) => changeHandle(e, checks, setChecks, item, setAllChecked, data)}
          checked={checks[index].check}
        />
        <div style={(checks[index].check) ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
          <span data-testid={`${index}-ingredient-name`}>{item.ingridient}</span>
          <span data-testid={`${index}-ingredient-measure`}> - {item.measure}</span>
        </div>
      </div>
    ))}
  </React.Fragment>
);

const IngridientsCheckbox = (props) => {
  const { ingridients, setAllChecked, making, data } = props;
  const [checks, setChecks] = useState(initChecks(data, ingridients));

  return (
    <div className="ingredients">
      <p className="subtitle">Ingredients</p>
      <div className="box">
        {(making) ?
          ingredientsCheckbox(checks, setChecks, setAllChecked, data) :
          ingredientsList(checks)}
      </div>
    </div>
  );
};

export default IngridientsCheckbox;
