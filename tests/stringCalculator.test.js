const { add } =  require('../src/stringCalculator.js');

test('should return 0 for empty string', () => { expect(add("")).toBe(0); });

test("should return the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,4")).toBe(7);
  });
  