function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return a + b;
}
module.exports = sum;



sum.test.js 
const sum = require('./sum');

test('Soma dois números corretamente', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Erro se for letra', () => {
  expect(() => sum(2, 'a')).toThrow('Os parâmetros devem ser números');
});
