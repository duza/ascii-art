import Canvas from './Canvas';
import Cell from './Cell';
import CanvasWasNotFoundError from '../errors/CanvasWasNotFoundError';
import { NEIGHBORS_SHIFTS } from '../constants/constants';

class BucketFill {
  constructor(props) {
    this.cell = new Cell(props);

    Object.freeze(this);
  }

  // TODO consider using Map instead of an array and avoid array enumeration where possible
  findCell = ({ cellList, cell, width }) => cellList[Cell.getIndex(width, cell.x, cell.y)];

  getNeighbors = ({ cellList, cell, width }) => NEIGHBORS_SHIFTS.map(shift => this.findCell({
    cellList,
    cell: { x: cell.x + shift[0], y: cell.y + shift[1] },
    width,
  })).filter(cell => cell);

  getEmptyNeighbors = ({ cellList, cell, width }) => this.getNeighbors({ cellList, cell, width })
    .filter(cell => !cell.fill);

  searchEmptyCells = (cells, width) => {
    const start = this.findCell({ cellList: cells, cell: this.cell, width });

    if (!start.fill) {
      const visited = new Set();
      let queue = [start];

      while (queue.length) {
        const cell = queue.shift();

        if (!visited.has(cell)) {
          visited.add(cell);
          const emptyNeighbors = this.getEmptyNeighbors({ cellList: cells, cell, width }).filter(cell => !queue.includes(cell) && !visited.has(cell));
          queue = [...queue, ...emptyNeighbors];
        }
      }

      return visited;
    }
  };

  draw(canvas) {
    if (!canvas) {
      throw new CanvasWasNotFoundError();
    }
    const { cells, width } = canvas;
    const fillingCells = this.searchEmptyCells(cells, width);
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
