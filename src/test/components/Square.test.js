import Square from '../../components/Square';

test('two plus two is four', () => {
  expect(2+2).toBe(4);
});

test('Square test', () => {
  expect(Square.test(2)).toBe(3);
});