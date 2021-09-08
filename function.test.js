const { returnTwo, greeting, add, multiply, divide, subtract } = require("./function");

test("should return the integer 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("should return with 'Hello, {name}'", () => {
  let name = "Cade";
  expect(greeting(name)).toEqual(`Hello, ${name}`);
});

test("should return with the sum of {num1} and {num2}", () => {
  expect(add(2, 6)).toEqual(8);
});

describe("Multiply function tests", () => {
  test("should result in 25", () => {
    expect(multiply(5, 5)).toEqual(25);
  });

  test("should result in 63", () => {
    expect(multiply(7, 9)).toEqual(63);
  });
});

describe("Divide function tests", () => {
    test("should result in 64", () => {
        expect(divide(128, 2)).toEqual(64);
    });

    test("should result in 333", () => {
        expect(divide(999, 3)).toEqual(333);
    });
});

describe("Subtract function tests", () => {
    test("should result in 38", () => {
        expect(subtract(55, 17)).toEqual(38);
    });

    test("should result in 645", () => {
        expect(subtract(812, 167)).toEqual(645);
    });
});