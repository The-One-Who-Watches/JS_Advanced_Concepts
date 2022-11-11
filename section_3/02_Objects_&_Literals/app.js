Omega = {
  firstname: "James",
  lastname: "Lambourne",
  deadname: "Omega",
  species: "Time Lord",
  address: {
    homeplanet: "Gallifrey",
    currentResidence: "Anti-Matter Universe",
    street: "N/A",
    building: "palace of Omega",
    home: {
      rooms: {
        consoles: 15,
        baths: 25,
        bedrooms: "infinte",
      },
    },
  },
};

function greet(person) {
  console.log("Hi " + person.firstname);
}

greet(Omega);

greet({
  firstname: "Mary",
  lastname: "Doe",
});

Omega.lives = {
  first: "Engineer",
};

console.log(Omega);
