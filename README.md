# String Calculator Kata

This project implements the **String Calculator** kata using **Test-Driven Development (TDD)**. It follows an incremental development approach where tests are written first, and the code evolves through small, frequent commits.

## Features

- Adds numbers from a string input.
- Handles an unknown number of inputs.
- Supports custom delimiters and new line characters.
- Throws an exception for negative numbers.
- Ignores numbers greater than 1000.

## Technologies Used

- **Node.js**: The core runtime for the project.
- **Jest**: A JavaScript testing framework used for writing and running tests.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/imsiddhants/string-calculator-tdd.git
    cd string-calculator
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the tests:
    ```bash
    npm run test
    ```

## Usage

The main logic resides in the `stringCalculator.js` file. The `add()` method takes a string of numbers and returns their sum.

Example:
```js
const calculator = new StringCalculator();
console.log(calculator.Add("1,2,3"));  // Outputs: 6
