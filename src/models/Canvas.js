import Cell from './Cell';
import Rectangle from './Rectangle';

class Canvas {
  constructor({ width, height, cells = []}) {
    this.width = +width;
    this.height = +height;
    this.cells = cells;

    Object.freeze(this.cells);
    Object.freeze(this);
  }

  fillEmptyCells = () => {
    const dimension = this.width + 2;

    return new Canvas({
      ...this,
      cells: Array( dimension * 2 + this.height * 2 + this.width * this.height).fill()
        .map((_, i) => this.fillEmpty(_, i, dimension)),
    });
  };

  fillEmpty = (_, index, dimension) => new Cell({
    x: index % dimension,
    y:  Math.floor(index / dimension),
    fill: '',
  });

  drawBoundaries = () => {
    const lastAbscissa = this.width + 1;
    const lastOrdinate = this.height + 1;

    return new Rectangle({ x1: 0, y1: 0, x2: lastAbscissa, y2: lastOrdinate }).draw(this);
  }
}

export default Canvas;
