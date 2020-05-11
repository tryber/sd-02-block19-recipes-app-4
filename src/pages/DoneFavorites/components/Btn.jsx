import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const btnSubCard2 = (history, type, { id }) => {
  history.push(`/receitas/${type}/${id}`);
};

const Btn = (props) => {
  const { type, data, index } = props;
  const history = useHistory();
  return (
    <button
      type="button"
      className="title"
      onClick={() => btnSubCard2(history, type, data)}
      data-testid={`${index}-horizontal-name`}
    >
      {data.strFood}
    </button>
  );
};

Btn.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};

export default Btn;
