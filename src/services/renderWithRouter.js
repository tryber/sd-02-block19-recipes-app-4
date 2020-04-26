import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
}

export default renderWithRouter;

renderWithRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
