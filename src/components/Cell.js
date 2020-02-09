import React from 'react';

const Cell = ({ fill }) => (
  <div style={{ width: '1em', height: '1em' }}>
    {fill}
  </div>
);

export default Cell;
