import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

export const login = (emailL, password) => {
  const { getAllByTestId } = renderWithRouter(<App />);

  const email = getAllByTestId('email-input');
  const pass = getAllByTestId('password-input');
  const btn = getAllByTestId('login-submit-btn');
  expect(email[0]).toBeInTheDocument();
  expect(pass[0]).toBeInTheDocument();
  expect(btn[0]).toBeInTheDocument();
  fireEvent.change(email[0], { target: { value: emailL } });
  fireEvent.change(pass[0], { target: { value: password } });
  fireEvent.click(btn[0]);
};

export const profile = () => {
  const { getAllByTestId } = renderWithRouter(<App />);

  const btnProfile = getAllByTestId('profile-top-btn');
  expect(btnProfile[0]).toBeInTheDocument();
  fireEvent.click(btnProfile[0]);
};

export const favoriteTest = () => {
  const { getAllByTestId } = renderWithRouter(<App />);

  const btnFavorite = getAllByTestId('profile-favorite-btn');
  expect(btnFavorite[0]).toBeInTheDocument();
  fireEvent.click(btnFavorite[0]);
};
