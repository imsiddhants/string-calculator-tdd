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

test('should return sum of multiple numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4")).toBe(10);
});

test('Should handle new line between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
});

test('Should handle different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
});