export default class UnrecognizedCommandError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnrecognizedCommandError';
  }
}
