import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeAppContext from '../../context/Context';

const ItemID = () => {
  const context = useContext(RecipeAppContext);
  const { type, id } = useParams();
  console.log(context);

  return (
    <div>
      <p>itemID: {type}</p>
      <p>itemID: {id}</p>
    </div>
  );
};

export default ItemID;
