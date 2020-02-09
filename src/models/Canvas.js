class Canvas {
  constructor(width, height) {
    this.width = +width;
    this.height = +height;
    const dimension = this.width + 2;
    this.cells = Array( dimension * 2 + this.height * 2 + this.width * this.height).fill()
      .map((_, i) => this.initialize(_, i, dimension))
      .map(this.fillBoundaries);

    Object.freeze(this.cells);
    Object.freeze(this);
  }

  initialize = (_, index, dimension) => new Cell({
    x: index % dimension,
    y:  Math.floor(index / dimension),
    fill: '',
  });

  fillBoundaries = cell => {
    if ((cell.x === 0 || cell.x === this.width + 1) && cell.y > 0 && cell.y < this.height + 1) {
      return new Cell({ ...cell, fill: '|' });
    }
    if (cell.y === 0 || cell.y === this.height + 1) {
      return new Cell({ ...cell, fill: '-' }) ;
    }

    return cell;
  }
}

class Cell {
  constructor({ x, y, fill }) {
    this.x = x;
    this.y = y;
    this.fill = fill;

    Object.freeze(this);
  }
}
export default Canvas;
