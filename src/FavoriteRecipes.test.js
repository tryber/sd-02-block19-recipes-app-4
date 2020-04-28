import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, cleanup, render, waitFor, waitForDomChange } from '@testing-library/react';
import { favoriteRecipes } from './services/mockResults';
import App from './App';
import '@testing-library/jest-dom';

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

function login() {
  const { getAllByTestId } = renderWithRouter(<App />)
  const email = getAllByTestId("email-input");
  const pass = getAllByTestId("password-input");
  const btn = getAllByTestId("login-submit-btn");
  expect(email[0]).toBeInTheDocument();
  expect(pass[0]).toBeInTheDocument();
  expect(btn[0]).toBeInTheDocument();
  fireEvent.change(email[0], { target: { value: "Lipe_Lim@hotmail.com" } });
  fireEvent.change(pass[0], { target: { value: "123456789" } });
  fireEvent.click(btn[0]);
}

function profile() {
  const { getAllByTestId } = renderWithRouter(<App />)
  const btnProfile = getAllByTestId("profile-top-btn");
  expect(btnProfile[0]).toBeInTheDocument();
  fireEvent.click(btnProfile[0]);
}

afterEach(cleanup);

test('Testing Static Items', async () => {
  const { getByText, history, getByTestId } = renderWithRouter(<App />);

  login();
  profile();

  const userL = JSON.parse(localStorage.getItem('user'));
  expect(userL).toEqual({ email: "Lipe_Lim@hotmail.com" });
  expect(getByText(/Perfil/i)).toBeInTheDocument();
})
