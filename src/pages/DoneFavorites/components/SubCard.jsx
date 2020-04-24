import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { convertTypeToData, switchType } from '../../../services/convertDataType';
import RecipeAppContext from '../../../context/Context';
import Share from '../../../components-global/Share';
import Favorite from './Favorite';
import '../style/style.css';

function render(data, category, setShow, setItems) {
  return (
    <React.Fragment>
      <p className="subtitle">{category}</p>
      <p className="title">{data.strFood}</p>
      <div className="icons">
        <Favorite data={data} setItems={setItems} />
        <Share setShow={setShow} />
      </div>
    </React.Fragment>
  );
}

const SubCard = (props) => {
  const { category, setShow, setItems } = props;
  const { fetchRecipe } = useContext(RecipeAppContext);
  const { id, type } = props;
  const [data, setData] = useState();
  const cb = (resp) => {
    setData(convertTypeToData(type, resp));
  };

  useEffect(() => {
    fetchRecipe(switchType(type), `lookup.php?i=${id}`, cb);
  }, []);

  return (
    <div className="comp_subcard">
      {(data) ? render(data, category, setShow, setItems) : <div />}
    </div>
  );
};

export default SubCard;
