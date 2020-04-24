import React, { useState, useEffect } from 'react';

import Filters from './components/Filters';
import Header2 from '../../components-global/Header2';
import SubCard from './components/SubCard';
import Message from '../../components-global/Message';
import Card2 from '../../components-global/Card2';
import { convertStringToArrayObj } from '../../components-global/services/localservice';
import './style/style.css';

const FavoritesRecipes = (props) => {
  const { history } = props;
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setItems(convertStringToArrayObj(localStorage.getItem('favoriteRecipes')));
  }, []);

  return (
    <div>
      <Header2 title="Receitas favoritas" history={history} />
      <Filters setItems={setItems} local="favoriteRecipes" />
      {items.map((item) => {
        const { category, id, image, type } = item;
        return (
          <Card2 image={image} key={id}>
            <SubCard
              category={category}
              id={id}
              setShow={setShow}
              type={type}
              setItems={setItems}
            />
          </Card2>
        );
      })}
      <Message message="Cliped!" show={show} setShow={setShow} />
    </div>
  );
};

export default FavoritesRecipes;
