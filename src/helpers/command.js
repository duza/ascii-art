import Canvas from '../models/Canvas';

const execute = command => {
  const [commandType, ...info] = command.split(' ');
  switch (commandType) {
    case 'C': {
      const [width, height] = info;
      return { canvas: new Canvas(width, height) };
    }
    default: {
      console.error(`Unrecognized command ${commandType}!!! Error!`);
      break;
    }
  }
  console.log({commandType, info});
};

export default execute;
