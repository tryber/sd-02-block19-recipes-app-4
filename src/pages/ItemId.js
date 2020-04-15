import React, { useContext } from 'react';
import RecipeAppContext from '../context/Context';
import { useParams } from 'react-router-dom';

const ItemID = () => {
  const context = useContext(RecipeAppContext);
  const { type, id } = useParams();
  console.log(context)

  return (
    <div>
      <p>itemID: {type, id}</p>
    </div>
  );
}

export default ItemID;