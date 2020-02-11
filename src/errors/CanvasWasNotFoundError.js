export default class CanvasWasNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CanvasWasNotFoundError';
  }
};
