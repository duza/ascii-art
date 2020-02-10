import Canvas from './Canvas';
import Cell from './Cell';

class BucketFill {
  constructor(props) {
    this.cell = new Cell(props);

    Object.freeze(this);
  }

  findByCoordinates = (x, y) => cell => x === cell.x && y === cell.y;

  findCell = (cells, x, y) => cells.find(this.findByCoordinates(x, y));

  getNeighbors = (cells, { x, y }) => [
    this.findCell(cells, x - 1, y),
    this.findCell(cells, x - 1, y - 1),
    this.findCell(cells, x, y - 1),
    this.findCell(cells, x + 1, y - 1),
    this.findCell(cells, x + 1, y),
    this.findCell(cells, x + 1, y + 1),
    this.findCell(cells, x, y + 1),
    this.findCell(cells, x - 1, y + 1),
  ].filter(cell => cell);

  getEmptyNeighbors = (cells, cell) => this.getNeighbors(cells, cell).filter(cell => !cell.fill);

  searchEmptyCells = cells => {
    const start = this.findCell(cells, this.cell.x, this.cell.y);

    if (!start.fill) {
      const visited = new Set();
      let queue = [start];

      while (queue && queue.length) {
        const cell = queue.pop();

        if (!visited.has(cell)) {
          visited.add(cell);
          const emptyNeighbors = this.getEmptyNeighbors(cells, cell).filter(cell => !visited.has(cell));
          queue = [...queue, ...emptyNeighbors];
        }
      }

     return visited;
    }
  };

  draw(canvas) {
    const { cells } = canvas;
    const fillingCells = this.searchEmptyCells(cells);

    return new Canvas({
      ...canvas,
      cells: cells.map(cell => {
        if (fillingCells.has(cell)) {
          return new Cell({ ...cell, fill: this.cell.fill });
        }
        return cell;
      }),
    });
  }
}

export default BucketFill;
