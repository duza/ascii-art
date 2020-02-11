import Canvas from '../models/Canvas';
import Line from '../models/Line';
import Rectangle from '../models/Rectangle';
import BucketFill from '../models/BucketFill';
import UnrecognizedCommandError from '../errors/UnrecognizedCommandError';

const execute = (command, canvas, setState) => {
  try {
    const [commandType, ...info] = command.split(' ');

    switch (commandType) {
      case 'C': {
        const [width, height] = info;

        return new Canvas({ width, height })
          .fillEmptyCells()
          .drawBoundaries();
      }
      case 'L': {
        const [x1, y1, x2, y2] = info;

        return new Line({ x1, y1, x2, y2, fill: 'x' }).draw(canvas);
      }
      case 'R': {
        const [x1, y1, x2, y2] = info;

        return new Rectangle({ x1, y1, x2, y2, fill: 'x' }).draw(canvas);
      }
      case 'B': {
        const [x, y, fill] = info;

        return new BucketFill({ x, y, fill }).draw(canvas);
      }
      default: {
        throw new UnrecognizedCommandError(`Unrecognized command ${commandType}!`);
      }
    }
  } catch (e) {
    console.error(e);
    setState({ error: e });
  }
};

export default execute;
