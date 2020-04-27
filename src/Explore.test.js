import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import App from './App';

afterEach(cleanup);

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
    const { getByText, queryByText } = renderWithRouter(
      <App />, {
      route: '/explorar/bebidas',
    });

    expect(queryByText("Por local de origem")).toBeNull()
    expect(getByText("Me surpreenda!")).toBeInTheDocument();
    expect(getByText("Explorar bebidas")).toBeInTheDocument();
    expect(getByText("Por ingredientes")).toBeInTheDocument();
  });
});
