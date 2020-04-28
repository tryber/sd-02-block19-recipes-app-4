import React from 'react';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, wait, fireEvent, waitForDomChange,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import App from '../../App';

afterEach(cleanup);
 

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

// const mockApi = () => {
//   jest.spyOn(global, 'fetch')
//     .mockImplementationOnce(() => Promise.resolve({
//       status: 200,
//       ok: true,
//       json: () => { 
//         console.log('primeiro mock')
//         return Promise.resolve(meals);
//       },
//     }))
//     .mockImplementation(() => Promise.resolve({
//       status: 200,
//       ok: true,
//       json: () => { 
//         console.log('segundo mock')
//         return Promise.resolve(drinks);
//       }
//     }));
// }

beforeEach(() => {
  localStorage.clear();
});

describe('ItemId', () => {
  test('Icons', async () => {
    // mockApi();
    // const {
    //   getByTestId, getByText, queryByText, getAllByTestId, container, history,
    // } = renderWithRouter(
    //   <App />,
    //   { route: '/receitas/comida/52882' },
    // );
    // expect(history.location.pathname).toBe('/receitas/comida/52882');
    // const apiMeals = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52882';
    // const apiDrinkRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    // expect(global.fetch).toHaveBeenCalledWith(apiMeals);
    // await wait();
    // expect(global.fetch).toHaveBeenCalledWith(apiDrinkRandom);

    // expect(getByTestId('recipe-photo')).toBeInTheDocument();
    // expect(getByTestId('share-btn')).toBeInTheDocument();
    // expect(getByTestId('favorite-btn')).toBeInTheDocument();
    // expect(getByTestId('recipe-title').innerHTML).toBe('Three Fish Pie');

    // expect(container.querySelector('p[class="type"]').innerHTML).toBe('Seafood');
    // const ingrids = getAllByTestId(/ingredient-name/i);
    // for (let i = 0; i < ingrids; i += 1) {
    //   expect(ingrids[i].innerHTML).toBe(meals.meals[0][`strIngredient${i + 1}`]);
    // }
    // const measures = getAllByTestId(/ingredient-measure/i);
    // for (let i = 0; i < ingrids; i += 1) {
    //   expect(measures[i].innerHTML).toBe(meals.meals[0][`strMeasure${i + 1}`]);
    // }

    // expect(getByTestId('start-recipe-btn')).toBeInTheDocument();
  });
});
