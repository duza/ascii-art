import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ fill }) => (
  <div style={{ width: '1em', height: '1em' }}>
    {fill}
  </div>
);

Cell.propTypes = {
  fill: PropTypes.string,
};

export default Cell;
