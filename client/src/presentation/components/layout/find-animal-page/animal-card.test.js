/**
 * @jest-environment jsdom
 */

const { AnimalCard } = require("./animal-card.js");

const animal = {
  name: "Bob",
  type: "Cat",
  breed: "bobcat",
  gender: "male",
  character: "friendly",
  dateBirth: "18/12/15",
  pictures: [
    {
      image: "one.jpg",
      isPrincipal: false,
    },
    {
      image: "two.jpg",
      isPrincipal: true,
    },
    {
      image: "three.jpg",
      isPrincipal: false,
    },
  ],
};

const giver = {
  name: "Big Cats shelter",
  location: "Oost-Vlanderen, Gent",
};

test("if there no isPrinciple equals to true, returns undefined", () => {
  expect(document.getElementsByTagName(AnimalCard(animal, giver))).toBe("div");
});
