class Cell {
  constructor({ x, y, fill = null }) {
    this.x = +x;
    this.y = +y;
    this.fill = fill;

    Object.freeze(this);
  }
}

export default Cell;
