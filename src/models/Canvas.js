import Cell from './Cell';
import Line from './Line';

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

    const canvasWithTopBorder = new Line({ x1: 0, y1: 0, x2: lastAbscissa, y2: 0 }).draw(this);
    const canvasWithBottomBorder = new Line({ x1: 0, y1: lastOrdinate, x2: lastAbscissa, y2: lastOrdinate })
      .draw(canvasWithTopBorder);
    const canvasWithLeftBorder = new Line ({ x1: 0, y1: 1, x2: 0, y2: this.height })
      .draw(canvasWithBottomBorder);

    return new Line({ x1: lastAbscissa, y1: 1, x2: lastAbscissa, y2: this.height })
      .draw(canvasWithLeftBorder); // with all boundaries
  }
}

export default Canvas;
