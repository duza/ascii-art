import PropTypes from 'prop-types';

import { BORDER_DIMENSION } from '../constants/constants';

class Cell {
  constructor({ x, y, fill = null }) {
    this.x = +x;
    this.y = +y;
    this.fill = fill;

    Object.freeze(this);
  }

  static getIndex(width, x, y) {
    return x + y * (width + BORDER_DIMENSION);
  }

  static shape = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }
}

export default Cell;
