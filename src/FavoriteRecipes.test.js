import React from 'react';
import { fireEvent, cleanup, waitFor, waitForDomChange } from '@testing-library/react';
import { favoriteRecipes } from './services/mockResults';
import { login, profile } from './services/navigationFlux';
import renderWithRouter from './services/renderWithRouter';
import App from './App';
import '@testing-library/jest-dom';

afterEach(cleanup);

test('Testing Static Items', async () => {
  const { getByText, history, getByTestId } = renderWithRouter(<App />);

  login();
  profile();

  const userL = JSON.parse(localStorage.getItem('user'));
  expect(userL).toEqual({ email: "Lipe_Lim@hotmail.com" });
  expect(getByText(/Perfil/i)).toBeInTheDocument();
})
