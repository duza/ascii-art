import Canvas from './Canvas';
import Cell from './Cell';

class Line {
  constructor({ x1, y1, x2, y2, fill = null }) {
    this.first = new Cell({ x: x1, y: y1 });
    this.second = new Cell({ x: x2, y: y2 });
    this.fill = fill;

    Object.freeze(this);
  }

  isVertical = (abscissa1 = this.first.x, abscissa2 = this.second.x) => abscissa1 === abscissa2;

  isHorizontal = (ordinate1 = this.first.y, ordinate2 = this.second.y) => ordinate1 === ordinate2;

  draw = canvas => {
    if (this.isVertical()) {
      return this.drawVerticalLine(canvas);
    }

    if (this.isHorizontal()) {
      return this.drawHorizontalLine(canvas);
    }
  };

  drawVerticalLine = canvas => {
    const { cells } = canvas;

    return new Canvas({
      ...canvas,
      cells: cells.map(cell => {
        if (this.isVertical(cell.x, this.first.x)) {
          const isAscendingLine = this.first.y < this.second.y && cell.y >= this.first.y && cell.y <= this.second.y;
          const isDescendingLine = this.first.y > this.second.y && cell.y >= this.second.y && cell.y <= this.first.y;

          if (isAscendingLine || isDescendingLine) {
            return new Cell({ ...cell, fill: this.fill || '|' });
          }
        }

        return cell;
      }),
    });
  };

  drawHorizontalLine = canvas => {
    const { cells } = canvas;

    return new Canvas({
      ...canvas,
      cells: cells.map(cell => {
        if (this.isHorizontal(cell.y, this.first.y)) {
          const isAscendingLine = this.first.x < this.second.x && cell.x >= this.first.x && cell.x <= this.second.x;
          const isDescendingLine = this.first.x > this.second.x && cell.x >= this.second.x && cell.x <= this.first.x;

          if (isAscendingLine || isDescendingLine) {
            return new Cell({ ...cell, fill: this.fill || '-' });
          }
        }

        return cell;
      }),
    });
  };
}

export default Line;
