import React from 'react';
import renderWithRouter from './services/renderWithRouter';
import App from './App';

test('Farewell, front-end', () => {
  const { getByText } = renderWithRouter(<App />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
