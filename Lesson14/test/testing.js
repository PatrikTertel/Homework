const Calculator = require("../calculator");
const { greet } = require("../calculator");
const { expect } = require("chai");

describe(`calculator tests`, function () {
  it(`add should return number`, async () => {
    const calc = new Calculator();
    const result = calc.add(1, 2, 3);
    expect(typeof result).to.equal(`number`);
  });

  it(`add should return summ`, async () => {
    const calc = new Calculator();
    const result = calc.add(1, 2, 3);
    expect(result).to.equal(6);
  });

  it(`multiply should return number`, async () => {
    const calc = new Calculator();
    const result = calc.multiply(2, 3);
    expect(typeof result).to.equal(`number`);
  });

  it(`multiply should return multiplied value`, async () => {
    const calc = new Calculator();
    const result = calc.multiply(2, 10);
    expect(result).to.equal(20);
  });

  it(`subtraction should return number`, async () => {
    const calc = new Calculator();
    const result = calc.subtraction(5, 2);
    expect(typeof result).to.equal(`number`);
  });

  it(`subtraction should substracted value`, async () => {
    const calc = new Calculator();
    const result = calc.subtraction(5, 2);
    expect(result).to.equal(3);
  });

  it(`divide should return number`, async () => {
    const calc = new Calculator();
    const result = calc.subtraction(5, 2);
    expect(typeof result).to.equal(`number`);
  });

  it(`divide should return divided value`, async () => {
    const calc = new Calculator();
    const result = calc.divide(6, 2);
    expect(result).to.equal(3);
  });

  it(`exponentiation should return number`, async () => {
    const calc = new Calculator();
    const result = calc.exponentiation(5);
    expect(typeof result).to.equal(`number`);
  });

  it(`exponentiation should return exponented value`, async () => {
    const calc = new Calculator();
    const result = calc.exponentiation(5);
    expect(result).to.equal(25);
  });
});
