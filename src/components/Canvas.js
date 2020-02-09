import React from 'react';

import Cell from './Cell';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
};

const Canvas = ({ cells, width, height }) => (
  <div style={{ ...style, width: `${width + 2}em`, height: `${height + 2}em` }}>
    {cells && cells.map(cell =>
      (<Cell
        key={`${cell.x}-${cell.y}`}
        {...cell}
        width={width}
      />))}
  </div>
);

export default Canvas;
