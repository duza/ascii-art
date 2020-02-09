import Canvas from '../models/Canvas';

const execute = (command, setState) => {
  const [commandType, ...info] = command.split(' ');

  switch (commandType) {
    case 'C': {
      const [width, height] = info;
      setState({ canvas: new Canvas(width, height) });
    }
    case 'L': {
      break;
    }
    default: {
      console.error(`Unrecognized command ${commandType}!!! Error!`);
      break;
    }
  }
  console.log({commandType, info});
};

export default execute;
