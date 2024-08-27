const sum = require("./sum");

test("add 2 + 2 is equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("object assignment", () => {
  expect(sum(2, 2)).toEqual(4);
});

test("adding postive number is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(1);
    }
  }
});

test("null", () => {
  const n = true;
  expect(n).toBeTruthy();
});

test("to be greater than 3", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

test("adding floating point number", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("the shopping list has milk on it", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];
  expect(shoppingList).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
});
