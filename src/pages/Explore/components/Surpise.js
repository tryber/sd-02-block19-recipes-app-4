import React, { useEffect, useContext } from "react";
import { useHistory, useParams } from 'react-router-dom';
import context from '../../../context/Context';
import Loading from '../../../components-global/Loading';

const Surprise = () => {

  const { fetchRecipe } = useContext(context);

  const history = useHistory();
  const { type } = useParams();

  const returnDB = () => {
    if (type === 'comidas') return 'themealdb'
    if (type === 'bebidas') return 'thecocktaildb'
  }

  const changeHistory = (response) => {
    console.log(response);
    const route = response.meals || response.drinks;
    const { idDrink, idMeal } = route[0];
    const id = idDrink || idMeal;
    history.push(`/${type}/${id}`);
  }

  useEffect(() => {
    fetchRecipe(returnDB(), 'random.php', changeHistory);
  }, []);


  return <Loading />
};

export default Surprise;