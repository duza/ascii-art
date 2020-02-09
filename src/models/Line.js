import Canvas from './Canvas';
import Cell from './Cell';

class Line {
  constructor({ x1, y1, x2, y2, fill = null }) {
    this.x1 = +x1;
    this.y1 = +y1;
    this.x2 = +x2;
    this.y2 = +y2;
    this.fill = fill;

    Object.freeze(this);
  }

  isVertical = (abscissa1 = this.x1, abscissa2 = this.x2) => abscissa1 === abscissa2;

  isHorizontal = (ordinate1 = this.y1, ordinate2 = this.y2) => ordinate1 === ordinate2;

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
        if (this.isVertical(cell.x, this.x1)) {
          const isAscendingLine = this.y1 < this.y2 && cell.y >= this.y1 && cell.y <= this.y2;
          const isDescendingLine = this.y1 > this.y2 && cell.y >= this.y2 && cell.y <= this.y1;

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
        if (this.isHorizontal(cell.y, this.y1)) {
          const isAscendingLine = this.x1 < this.x2 && cell.x >= this.x1 && cell.x <= this.x2;
          const isDescendingLine = this.x1 > this.x2 && cell.x >= this.x2 && cell.x <= this.x1;

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
