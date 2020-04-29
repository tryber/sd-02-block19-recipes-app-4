import React from 'react';
import { fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import App from './App';
import {
  listFiltersMeal, randomMeal, filterByCategorie
} from './services/mockResults';

afterEach(cleanup);

const mockMultipleAPI = (result1ToBeMocked, result2ToBeMocked) => {
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('primeiro mock');
        return Promise.resolve(result1ToBeMocked)
      },
    }))
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('segundo mock');
        return Promise.resolve(result2ToBeMocked)
      },
    }));
}

const mockResultsAPI = (resultToBeMocked) => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('entrou')
        return Promise.resolve(resultToBeMocked)
      },
    }));
};

describe('Testing recipe page', () => {
  mockMultipleAPI(listFiltersMeal, randomMeal);
  test('Testing initial render of recipe page', async () => {
    const { getByText, getByTestId, queryAllByText } = renderWithRouter(
      <App />, {
      route: '/comidas',
    });

    expect(getByText("Comidas")).toBeInTheDocument();
    await waitForDomChange();
    listFiltersMeal.meals.map(({ strCategory }) => {
      expect(getByText(strCategory)).toBeInTheDocument();
    })
    const beaverTails = queryAllByText('BeaverTails');
    expect(beaverTails.length).toBe(12);
    
    mockResultsAPI(filterByCategorie);
    const btnFiltro = getByText('Bife');
    fireEvent.click(btnFiltro);
    await waitForDomChange();
    filterByCategorie.meals.map(({strMeal})=> {
      expect(getByText(strMeal)).toBeInTheDocument();
    });
  });
});
