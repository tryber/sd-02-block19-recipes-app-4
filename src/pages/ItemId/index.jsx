import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import Loading from '../../components-global/Loading';
import RecipeAppContext from '../../context/Context';
import Meal from './components/Meal';
import Drink from './components/Drink';
import './style/index.css';
import { convertTypeToData, switchType } from '../../services/convertDataType';

const renderFood = (type, data, making, history) => {
  switch (type) {
    case 'comida':
      return (
        <Meal
          convertTypeToData={convertTypeToData}
          data={data}
          making={making}
          type={type}
          history={history}
        />);
    case 'bebida':
      return (
        <Drink
          convertTypeToData={convertTypeToData}
          data={data}
          making={making}
          type={type}
          history={history}
        />);
    default:
      return null;
  }
};

const ItemId = (props) => {
  const { history } = props;
  const { fetchRecipe, isLoading, setIsLoading, idRecipe  } = useContext(RecipeAppContext);
  const { type, id, making } = useParams();
  const [data, setData] = useState();
  const cb = (resp) => {
    setData(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe(switchType(type), `lookup.php?i=${id || idRecipe}`, cb);
  }, [idRecipe]);

  return (
    <div className="page_itemid">
      {(isLoading || !data) ? (<Loading />) : (renderFood(type, data, making, history))}
    </div>
  );
};

ItemId.propTypes = {
  history: propTypes.instanceOf(Object).isRequired,
};

export default ItemId;
