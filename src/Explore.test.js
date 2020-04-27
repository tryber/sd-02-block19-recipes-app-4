import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import Provider from './context/Provider';
import Explore from './pages/Explore';
import App from './App';

afterEach(cleanup);

describe('Testing explore page', () => {
  test('Testing first page of explore', () => {
    const { getByText, getByTestId } = renderWithRouter(
      <Provider><Explore /></Provider>, {
      route: '/explorar',
    });

    // const history = createMemoryHistory();
    // history.push('/wrong/location');

    const btnExploreMeal = getByTestId("explore-food");
    const btnExploreDrink = getByTestId("explore-drinks");

    expect(btnExploreMeal).toBeInTheDocument();
    expect(btnExploreDrink).toBeInTheDocument();

    fireEvent.click(btnExploreMeal);
    expect(getByText("Por ingredientes")).toBeInTheDocument()
    // expect(getByText("Por local de origem")).toBeInTheDocument()
    // expect(getByText("Me surpreenda!")).toBeInTheDocument()
    // expect(getByText("Explorar comidas")).toBeInTheDocument();
    // location.pathname = "/explorar";
    // expect(btnExploreMeal).toBeInTheDocument();
    // expect(btnExploreDrink).toBeInTheDocument();

  });
});
