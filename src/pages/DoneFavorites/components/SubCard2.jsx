import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { convertTypeToData, switchType } from '../../../services/convertDataType';
import RecipeAppContext from '../../../context/Context';
import Share from '../../../components-global/Share';
import '../style/style.css';

function render(data, category, setShow, doneDate) {
  return (
    <React.Fragment>
      <div className="header">
        <p className="subtitle">{category}</p>
        <Share setShow={setShow} />
      </div>
      <p className="title">{data.strFood}</p>
      <p className="date">Feita em: {doneDate}</p>
      <div className="tags">
        {data.strTags.split(',').map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </React.Fragment>
  );
}

const SubCard2 = (props) => {
  const { category, setShow, doneDate, id, type } = props;
  const { fetchRecipe } = useContext(RecipeAppContext);
  const [data, setData] = useState();
  const cb = (resp) => {
    setData(convertTypeToData(type, resp));
  };

  useEffect(() => {
    fetchRecipe(switchType(type), `lookup.php?i=${id}`, cb);
  }, []);

  return (
    <div className="comp_subcard2">
      {(data) ? render(data, category, setShow, doneDate) : <div />}
    </div>
  );
};

SubCard2.propTypes = {
  category: propTypes.string.isRequired,
  setShow: propTypes.func.isRequired,
  doneDate: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default SubCard2;
