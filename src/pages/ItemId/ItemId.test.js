import React from 'react';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, wait, fireEvent,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { randomMeal, randomDrink } from '../../services/mockResults';
import App from '../../App';


function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

const mockApi = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(randomMeal),
    }))
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(randomDrink),
    }));
}

const mockMeal = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(randomMeal),
    }));
};

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe('ItemId', () => {
  test('/receitas/:type/:id', async () => {
    mockApi();
    const {
      getByTestId, getByText, queryByText, getAllByTestId, container, history,
    } = renderWithRouter(
      <App />,
      { route: '/receitas/comida/52928' },
    );
    expect(history.location.pathname).toBe('/receitas/comida/52928');
    const apiMeals = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52928';
    const apiDrinkRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    expect(global.fetch).toHaveBeenCalledWith(apiMeals);
    await wait();
    expect(global.fetch).toHaveBeenCalledWith(apiDrinkRandom);
    expect(getByTestId('recipe-photo').src)
      .toBe('https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg');
    expect(getByTestId('share-btn')).toBeInTheDocument();
    expect(getByTestId('favorite-btn')).toBeInTheDocument();
    expect(getByTestId('recipe-title').innerHTML).toBe('BeaverTails');

    expect(container.querySelector('p[class="type"]').innerHTML).toBe('Dessert');
    const ingrids = getAllByTestId(/ingredient-name/i);
    expect(ingrids[0].innerHTML).toBe('Water');
    expect(ingrids[1].innerHTML).toBe('Yeast');
    expect(ingrids[2].innerHTML).toBe('Sugar');

    const measures = getAllByTestId(/ingredient-measure/i);
    expect(measures[0].innerHTML).toBe(' - 1/2 cup');
    expect(measures[1].innerHTML).toBe(' - 2 parts');
    expect(measures[2].innerHTML).toBe(' - 1/2 cup');

    expect(getByTestId('video').src).toBe('https://www.youtube.com/embed/Ds1Jb8H5Sg8');

    const recomended = getAllByTestId('17245-recomendation-card');
    expect(recomended[0].querySelector('img[class="img-card"]').src)
      .toBe('https://www.thecocktaildb.com/images/media/drink/qwc5f91512406543.jpg');
    expect(recomended[0].querySelector('div[class="categorie-card"]').innerHTML)
      .toBe('Cocktail');
    expect(recomended[0].querySelector('div[class="recipe-card"]').innerHTML)
      .toBe('Rosemary Blue');
    expect(getByTestId('start-recipe-btn').innerHTML).toBe('Iniciar receita');
  });

  test('/receitas/:type/:id/:making', async () => {
    mockMeal();
    const {
      getByTestId, getByText, queryByText, getAllByTestId, container, history,
    } = renderWithRouter (
      <App />,
      { route: '/receitas/comida/52928/making' },
    );
    expect(history.location.pathname).toBe('/receitas/comida/52928/making');
    await wait();
    expect(getByTestId('recipe-photo').src)
      .toBe('https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg');
    expect(getByTestId('share-btn')).toBeInTheDocument();
    expect(getByTestId('favorite-btn')).toBeInTheDocument();
    expect(getByTestId('recipe-title').innerHTML).toBe('BeaverTails');

    expect(getByTestId('start-recipe-btn').disabled).toBe(true);

    const inputs = container.querySelectorAll('input[type="checkbox"]');
    fireEvent.click(inputs[0]);
    expect(localStorage.getItem('proggress')).toBe('{"52928":["0"]}');
    fireEvent.click(inputs[1]);
    expect(localStorage.getItem('proggress')).toBe('{"52928":["0","1"]}');
    fireEvent.click(inputs[2]);
    expect(localStorage.getItem('proggress')).toBe('{"52928":["0","1","2"]}');

    expect(getByTestId('start-recipe-btn').disabled).toBe(false);
    fireEvent.click(getByTestId('start-recipe-btn'));

    expect(history.location.pathname).toBe('/receitas-feitas');
  });
});
