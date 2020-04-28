import React from 'react';
import { createMemoryHistory } from 'history';
import {
  render, cleanup, wait, fireEvent, waitForDomChange,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import App from '../../App';
import { meals, drinks } from '../../services/data';

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

const mockApi = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => { 
        console.log('primeiro mock')
        return Promise.resolve(meals);
      },
    }))
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => { 
        console.log('segundo mock')
        return Promise.resolve(drinks);
      }
    }));
}

const mockDrinksRandom = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => { 
        console.log('segundo mock')
        return Promise.resolve(drinks);
      }
    }));
}


beforeEach(() => {
  localStorage.clear();
});

describe('ItemId', () => {
  test('Icons', async () => {
    mockApi();
    const {
      getByTestId, getByText, queryByText, getAllByTestId, container, history,
    } = renderWithRouter(
      <App />,
      { route: '/receitas/comida/52882' },
    );
    expect(history.location.pathname).toBe('/receitas/comida/52882');
    const apiMeals = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52882';
    const apiDrinkRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    expect(global.fetch).toHaveBeenCalledWith(apiMeals);
    // mockDrinksRandom();
    // expect(global.fetch).toHaveBeenCalledWith(apiDrinkRandom);
    // await waitForDomChange();
    await wait();

    expect(getByTestId('recipe-photo')).toBeInTheDocument();
    expect(getByTestId('share-btn')).toBeInTheDocument();
    expect(getByTestId('favorite-btn')).toBeInTheDocument();
    expect(getByTestId('recipe-title').innerHTML).toBe('Three Fish Pie');

    expect(container.querySelector('p[class="type"]').innerHTML).toBe('Seafood');
    const ingrids = getAllByTestId(/ingredient-name/i);
    for (let i = 0; i < ingrids; i += 1) {
      expect(ingrids[i].innerHTML).toBe(meals.meals[0][`strIngredient${i + 1}`]);
    }
    const measures = getAllByTestId(/ingredient-measure/i);
    for (let i = 0; i < ingrids; i += 1) {
      expect(measures[i].innerHTML).toBe(meals.meals[0][`strMeasure${i + 1}`]);
    }

    expect(getByTestId('start-recipe-btn')).toBeInTheDocument();
  });

//   test('Filter by name', async () => {
//     const { getByTestId, queryByText } = await tableRender();
//     const filters = getByTestId('filters');
//     expect(filters).toBeInTheDocument();

//     const inputName = getByTestId('inputName');
//     fireEvent.change(inputName, { target: { value: 'Alderaan' } });
//     expect(inputName.value).toBe('Alderaan');

//     expect(queryByText(/Alderaan/)).toBeInTheDocument();
//     expect(queryByText(/Yavin IV/)).not.toBeInTheDocument();
//   });

//   test('Filter by condition', async () => {
//     const { getAllByTestId, queryByText, getByText } = await tableRender();
//     await wait();
//     const add = getByText('Add filter');
//     fireEvent.click(add);
//     const allfilter = getAllByTestId('filter');
//     expect(allfilter.length).toBe(2);

//     const rotationPeriod = allfilter[0].querySelector("button[name*='rotation_period']");
//     const selectType = allfilter[0].querySelector("p[name*='tagtype']");
//     fireEvent.click(rotationPeriod);
//     expect(selectType.innerHTML).toBe('rotation_period');

//     const menorQue = allfilter[0].querySelector("button[name*='Menor que']");
//     const selectCond = allfilter[0].querySelector("p[name*='tagcondition']");
//     fireEvent.click(menorQue);
//     expect(selectCond.innerHTML).toBe('Menor que');

//     const inputCondition = allfilter[0].querySelector("input[name*='inputCondition']");
//     fireEvent.change(inputCondition, { target: { value: '25' } });
//     expect(inputCondition.value).toBe('25');

//     expect(queryByText(/Yavin IV/)).not.toBeInTheDocument();
//     expect(queryByText(/Alderaan/)).toBeInTheDocument();
//   });

//   test('Filter by order', async () => {
//     const { getByTestId } = await tableRender();

//     const table = getByTestId('table');
//     const comp_order = getByTestId('comp_order');
//     const btnAsc = comp_order.querySelector("button[name*='ASC']");
//     fireEvent.click(btnAsc);

//     const order = getByTestId('order');
//     const name = order.querySelector("button[name*='name']");
//     fireEvent.click(name);

//     const tbody = table.querySelector('tbody');
//     const trs = tbody.querySelectorAll('tr');

//     expect(trs[0].querySelectorAll('td')[0].innerHTML).toBe('Alderaan');
//   });
});
