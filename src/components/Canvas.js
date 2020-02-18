import React from 'react';

import Cell from './Cell';
import CanvasModel from '../models/Canvas';
import { BORDER_DIMENSION } from '../constants/constants';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
};

const Canvas = ({ cells, width, height }) => (
  <div style={{ ...style, width: `${width + BORDER_DIMENSION}em`, height: `${height + BORDER_DIMENSION}em` }}>
    {cells && cells.map(cell => (
      <Cell
        key={`${cell.x}-${cell.y}`}
        {...cell}
      />
    ))}
  </div>
);

Canvas.propTypes = CanvasModel.shape;

export default Canvas;
