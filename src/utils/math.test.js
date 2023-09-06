import {calculateWholeNumberArray, generate, calculateMathType} from './math';
test('calculateWholeNumberArray() should return the correct array of numbers', () => {
  const testArray = ["500", "70", "9"]
  expect(calculateWholeNumberArray('579')).toEqual(testArray)

})

test('generate() it should generate a random number base on length input', () => {
  const generatedNumber = generate(3);
  expect(String(generatedNumber).length).toEqual(3);
  expect(Number(generatedNumber)).toBeTruthy();
})

test('calculateMathType should return the correct computed value', () => {
  expect(calculateMathType(10,10,'+')).toEqual(20);
  expect(calculateMathType(10,10,'-')).toEqual(0);
  expect(calculateMathType(10,2,'/')).toEqual(5);
  expect(calculateMathType(10,10,'*')).toEqual(100);
})