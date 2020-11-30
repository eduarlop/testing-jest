import calculator from "./utils/calculator";

describe("calculator", () => {
  it("sums two numbers and returns the result", () => {
    // Initializes variables and/or handlers
    const num1 = 15;
    const num2 = 17;

    // Executes a function or trigger some action
    const result = calculator.add(num1, num2);

    // Checks that the output is the expected
    expect(result).toBe(32);
  });

  it("multiplies two numbers and returns the result", () => {
    const num1 = 5;
    const num2 = 10;

    const result = calculator.multiply(num1, num2);

    expect(result).toBe(50);
  });

  it("multiplies by zero works as expected", () => {
    const num1 = 7;
    const num2 = 0;

    const result = calculator.multiply(num1, num2);

    expect(result).toBe(0);
  });
});
