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
      isPrincipal: false,
    },
    {
      image: "three.jpg",
      isPrincipal: true,
    },
  ],
};

const giver = {
  name: "Big Cats shelter",
  location: "Oost-Vlanderen, Gent",
};

const getAvatar = () => {
  return animal.pictures
    .map(item => (item.isPrincipal ? item.image : null))
    .filter(item => item);
};

const AnimalCard = (animal, giver) => {
  const { type, breed, gender, character, dateBirth } = animal;
  // create card
  const card = document.createElement("div");
  card.className = "animal-card";
  // create photo div
  const photo = document.createElement("div");
  photo.className = "card-photo";
  const img = document.createElement("img");
  photo.appendChild(img);
  photo.innerText = getAvatar();
  // create info div
  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `
  Name: <span> ${animal.name} </span> <br>
  Type: <span> ${type} </span> <br>
  Breed: <span> ${breed} </span> <br>
  Gender: <span> ${gender}</span><br>
  Character: <span>${character}</span><br>
  Date of Birth: <span> ${dateBirth} </span><br>
  Location: <span> ${giver.name},<br> ${giver.location}</span> <br>
  `;
  // append divs
  photo.appendChild(info);
  card.appendChild(photo);
  return card;
};

document.querySelector("body").appendChild(AnimalCard(animal, giver));
