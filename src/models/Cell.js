class Cell {
  constructor({ x, y, fill }) {
    this.x = x;
    this.y = y;
    this.fill = fill;

    Object.freeze(this);
  }
}

export default Cell;
