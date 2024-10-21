const StringCalculator = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
});

test('should return number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
});

test('should return sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2")).toBe(3);
});