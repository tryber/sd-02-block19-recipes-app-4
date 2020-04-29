import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

export const login = () => {
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
};

export const profile = () => {
  const { getAllByTestId } = renderWithRouter(<App />)
  const btnProfile = getAllByTestId("profile-top-btn");
  expect(btnProfile[0]).toBeInTheDocument();
  fireEvent.click(btnProfile[0]);
};
