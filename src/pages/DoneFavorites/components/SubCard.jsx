import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Card2 from '../../../components-global/Card2';
import { convertTypeToData, switchType } from '../../../services/convertDataType';
import RecipeAppContext from '../../../context/Context';
import Share from '../../../components-global/Share';
import Favorite from './Favorite';
import '../style/style.css';

const btnSubCard = (history, type, data) => {
  const { id } = data;
  history.push(`/receitas/${type}/${id}`);
};

function render({ image, id, data, category, setShow, setItems, history, type }) {
  return (
    <Card2 image={image} key={id} history={history} type={type} data={data} >
      <React.Fragment>
        <p className="subtitle">{category}</p>
        <button type="button" onClick={() => btnSubCard(history, type, data)}>
          <p className="title">{data.strFood}</p>
        </button>
        {(type === 'comida') ? <p>{data.strArea}</p> : <div />}
        <div className="icons">
          <Favorite data={data} setItems={setItems} />
          <Share setShow={setShow} />
        </div>
      </React.Fragment>
    </Card2>
  );
}

const SubCard = (props) => {
  const { image, category, setShow, setItems, id, type, history } = props;
  const { fetchRecipe } = useContext(RecipeAppContext);
  const [data, setData] = useState();
  const cb = (resp) => {
    setData(convertTypeToData(type, resp));
  };

  useEffect(() => {
    fetchRecipe(switchType(type), `lookup.php?i=${id}`, cb);
  }, []);

  const obj = { image, id, data, category, setShow, setItems, history, type };

  return (
    <div className="comp_subcard">
      {(data) ? render(obj) : <div />}
    </div>
  );
};

SubCard.propTypes = {
  category: propTypes.string.isRequired,
  setShow: propTypes.func.isRequired,
  setItems: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  history: propTypes.instanceOf(Object).isRequired,
};

export default SubCard;
