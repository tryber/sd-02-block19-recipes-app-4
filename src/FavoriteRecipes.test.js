import React from 'react';
import { fireEvent, cleanup, waitFor, waitForDomChange, findByText, getAllByText } from '@testing-library/react';
import { favoriteRecipes } from './services/mockResults';
import { convertArrayObjToString } from './components-global/services/localservice';
import { login, profile, favoriteTest } from './services/navigationFlux';
import renderWithRouter from './services/renderWithRouter';
import App from './App';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup;
  localStorage.clear();
});

beforeEach(() => {
  localStorage.clear();
})

test('Testing Static Items on FavoritesRecipes', async () => {
  const { getByText, getByTestId, history, getAllByText } = renderWithRouter(<App />);

  history.push('/receitas/comida/52878');

  await waitForDomChange();

  const favBtn = getByTestId('favorite-btn');
  fireEvent.click(favBtn);

  const lStorage = JSON.parse(localStorage.getItem('favorite-recipes'));
  expect(lStorage).toEqual([{id:"52878",category:"Beef",image:"https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",type:"comida"}]);
  localStorage.setItem('user', JSON.stringify({"email":"Lipe_Lim@hotmail.com"}));

  history.push('/perfil');

  const favRecipesBtn = getByTestId('profile-favorite-btn');
  expect(favRecipesBtn).toBeInTheDocument();
  fireEvent.click(favRecipesBtn);
  expect(getByText(/Receitas favoritas/i)).toBeInTheDocument();

  await waitForDomChange();

  const location = getByText(/British/i);
  const subtitle = getAllByText(/Beef/i);
  const imageSrc = document.querySelector('img');
  expect(imageSrc.src).toEqual('https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg');
  expect(imageSrc).toBeInTheDocument();
  expect(subtitle[0]).toBeInTheDocument();
  expect(subtitle[0].innerHTML).toEqual('Beef');
  expect(subtitle[1]).toBeInTheDocument();
  expect(subtitle[1].innerHTML).toEqual('Beef and Oyster pie');
  expect(location).toBeInTheDocument();
})

