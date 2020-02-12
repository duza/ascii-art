import Cell from '../src/models/Cell';

test('create instance Cell', () => {
  expect(new Cell({ x: 1, y: 1, fill: 'x' })).toEqual({ x: 1, y: 1, fill: 'x'});
});
