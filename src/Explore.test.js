import React from 'react';
import { fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import App from './App';
import { ingredientsResults, areaResults } from './services/mockResults';

afterEach(cleanup);

const mockResultsAPI = (resultToBeMocked) => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('debug')
        return Promise.resolve(resultToBeMocked)
      },
    }));
};

describe('Testing explore page', () => {
  test('Testing first page of explore', () => {
    const { getByText, getByTestId } = renderWithRouter(
      <App />, {
      route: '/explorar',
    });

    const btnExploreMeal = getByTestId("explore-food");
    const btnExploreDrink = getByTestId("explore-drinks");

    expect(btnExploreMeal).toBeInTheDocument();
    expect(btnExploreDrink).toBeInTheDocument();

    fireEvent.click(btnExploreMeal);
    expect(getByText("Por local de origem")).toBeInTheDocument();
    expect(getByText("Me surpreenda!")).toBeInTheDocument();
    expect(getByText("Explorar comidas")).toBeInTheDocument();
    expect(getByText("Por ingredientes")).toBeInTheDocument();
  });

  test('Testing drink page of explore', () => {
    const { getByText, queryByText, getByTestId } = renderWithRouter(
      <App />, {
      route: '/explorar',
    });

    const btnExploreDrink = getByTestId("explore-drinks");
    fireEvent.click(btnExploreDrink);

    expect(queryByText("Por local de origem")).toBeNull()
    expect(getByText("Me surpreenda!")).toBeInTheDocument();
    expect(getByText("Explorar bebidas")).toBeInTheDocument();
    expect(getByText("Por ingredientes")).toBeInTheDocument();
  });

  test('Testing ingredients page explore', async () => {
    const { getByText, getByTestId, queryByText, getAllByText } = renderWithRouter(
      <App />, {
      route: '/explorar/comidas',
    });

    mockResultsAPI(ingredientsResults);

    const btnByIng = getByTestId("explore-by-ingredient");
    expect(btnByIng).toBeInTheDocument();
    fireEvent.click(btnByIng);
    await waitForDomChange();
    expect(getByText("Explorar ingredientes")).toBeInTheDocument();
    expect(getByText("Chicken")).toBeInTheDocument();
    expect(getByText("Salmon")).toBeInTheDocument();
    expect(getByText("Beef")).toBeInTheDocument();
    expect(queryByText("Pork")).toBeNull();
    fireEvent.click(getAllByText(/Ver Receitas!/i)[0]);
    expect(getByText("Comidas")).toBeInTheDocument();
  });

  test('Testing by area page explore', async () => {
    const { getByText, getByTestId, queryByText, getAllByText } = renderWithRouter(
      <App />, {
      route: '/explorar/comidas',
    });

    mockResultsAPI(areaResults);

    const btnByArea = getByTestId("explore-by-area");
    expect(btnByArea).toBeInTheDocument();
    fireEvent.click(btnByArea);
    await waitForDomChange();
    expect(getByText("Explorar area")).toBeInTheDocument();
    const btnDropdown = getByTestId("explore-by-area-dropdown");
    expect(btnDropdown).toBeInTheDocument();
    fireEvent.change(btnDropdown, { target: { value: "American" } });

  });
});
