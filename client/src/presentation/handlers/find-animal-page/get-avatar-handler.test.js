const getAvatarHandler = require("./get-avatar-handler.js");

const arr = [
  { image: "one.jpeg", isPrincipal: true },
  { image: "two.png", isPrincipal: false },
];

const arrNoTrue = [
  { image: "one.jpeg", isPrincipal: false },
  { image: "two.png", isPrincipal: false },
];

const arrEmpty = [];

test("takes an array of objects with two items 'image' and 'isPrincipal' and returns the first value of object where isPrinciple = true", () => {
  expect(getAvatarHandler(arr)).toBe("one.jpeg");
});

test("if there no isPrinciple equals to true, returns undefined", () => {
  expect(getAvatarHandler(arrNoTrue)).toBe(undefined);
});

test("if array is empty, returns null", () => {
  expect(getAvatarHandler(arrEmpty)).toBe(null);
});
