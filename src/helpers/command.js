const execute = command => {
  const [commandType, ...info] = command.split(' ');
  switch (commandType) {
    case 'C': {
      console.log({commandType, info});
      break;
    }
    default: {
      console.error(`Unrecognized command ${commandType}!!! Error!`);
      break;
    }
  }
};

export default execute;
