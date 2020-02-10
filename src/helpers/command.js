import Canvas from '../models/Canvas';
import Line from '../models/Line';
import Rectangle from '../models/Rectangle';
import BucketFill from '../models/BucketFill';

const execute = (command, setState) => {
  const [commandType, ...info] = command.split(' ');

  switch (commandType) {
    case 'C': {
      const [width, height] = info;
      const canvas = new Canvas({ width, height })
        .fillEmptyCells()
        .drawBoundaries();

      setState({ canvas });
      break;
    }
    case 'L': {
      const [x1, y1, x2, y2] = info;
      setState(({ canvas }) => ({
        canvas: new Line({ x1, y1, x2, y2, fill: 'x' }).draw(canvas),
      }));
      break;
    }
    case 'R': {
      const [x1, y1, x2, y2] = info;
      setState(({ canvas }) => ({
        canvas: new Rectangle({ x1, y1, x2, y2, fill: 'x' }).draw(canvas),
      }));
      break;
    }
    case 'B': {
      const [x, y, fill] = info;
      setState(({ canvas }) => ({
        canvas: new BucketFill({ x, y, fill }).draw(canvas),
      }));
      break;
    }
    default: {
      console.error(`Unrecognized command ${commandType}!!! Error!`);
      break;
    }
  }
};

export default execute;
