import Canvas from '../src/models/Canvas';

const canvas1 = new Canvas({ width: 1, height: 2, cells: [] });
const canvas2 = new Canvas({ width: 3, height: 3 });


it('check canvas1 main data', () => {
  expect(canvas1).toHaveProperty('width');
  expect(canvas1).toHaveProperty('height');
  expect(canvas1).toHaveProperty('cells');
  expect(canvas1.width).toBe(1);
  expect(canvas1.height).toBe(2);
  expect(canvas1.cells).toEqual([]);
});

it('check canvas2 main data', () => {
  expect(canvas2).toHaveProperty('width');
  expect(canvas2).toHaveProperty('height');
  expect(canvas2).toHaveProperty('cells');
  expect(canvas2.width).toBe(3);
  expect(canvas2.height).toBe(3);
  expect(canvas2.cells).toEqual([]);
});

test('compare data of canvas1 and canvas2', function() {
  expect(canvas2.width).not.toBe(canvas1.width);
  expect(canvas2.height).not.toBe(canvas1.height);
  expect(canvas2.cells).not.toBe(canvas1.cells);
  expect(canvas2.cells).toEqual(canvas1.cells);
});

test('call fillEmptyCells method', function() {
  const result2 = canvas2.fillEmptyCells();
  const allCountCells = 25;
  const realWidthCanvasWithBorders = 3 + 2;
  const filledEmptyCellsCanvas = Array.from(
    Array(allCountCells),
    (_, i) => ({
      x: i % realWidthCanvasWithBorders,
      y: Math.floor(i / realWidthCanvasWithBorders),
      fill: '',
    }),
  );
  expect(result2.cells).toEqual(filledEmptyCellsCanvas);
});
