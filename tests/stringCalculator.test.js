const { add } =  require('../src/stringCalculator.js');

test('should return 0 for empty string', () => { expect(add("")).toBe(0); });

test("should return the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });
  