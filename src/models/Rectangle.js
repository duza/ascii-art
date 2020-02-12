import Cell from './Cell';
import Line from './Line';
import CanvasWasNotFoundError from '../errors/CanvasWasNotFoundError';

class Rectangle {
  constructor({
    x1, y1, x2, y2, fill = null,
  }) {
    this.leftTop = new Cell({ x: x1, y: y1 });
    this.rightBottom = new Cell({ x: x2, y: y2 });
    this.fill = fill;

    Object.freeze(this);
  }

  draw = canvas => {
    if (!canvas) {
      throw new CanvasWasNotFoundError();
    }

    const rightTop = new Cell({ x: this.rightBottom.x, y: this.leftTop.y });
    const leftBottom = new Cell({ x: this.leftTop.x, y: this.rightBottom.y });

    const canvasWithTopBorder = new Line({
      x1: this.leftTop.x,
      y1: this.leftTop.y,
      x2: rightTop.x,
      y2: rightTop.y,
      fill: this.fill,
    }).draw(canvas);

    const canvasWithBottomBorder = new Line({
      x1: leftBottom.x,
      y1: leftBottom.y,
      x2: this.rightBottom.x,
      y2: this.rightBottom.y,
      fill: this.fill,
    }).draw(canvasWithTopBorder);

    const canvasWithLeftBorder = new Line({
      x1: this.leftTop.x,
      y1: this.leftTop.y + 1,
      x2: leftBottom.x,
      y2: leftBottom.y - 1,
      fill: this.fill,
    }).draw(canvasWithBottomBorder);

    return new Line({
      x1: rightTop.x,
      y1: rightTop.y + 1,
      x2: this.rightBottom.x,
      y2: this.rightBottom.y - 1,
      fill: this.fill,
    }).draw(canvasWithLeftBorder);
  };
}

export default Rectangle;
