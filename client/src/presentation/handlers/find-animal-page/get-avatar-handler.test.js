const getAvatarHandler = require("./get-avatar-handler.js");

const arr = [
  { image: "one", isPrincipal: true },
  { image: "two.png", isPrincipal: false },
];

test("takes an array of objects with two items 'image' and 'isPrincipal' and returns the first value of object where isPrinciple = true", () => {
  expect(getAvatarHandler(arr)).toBe("one");
});
