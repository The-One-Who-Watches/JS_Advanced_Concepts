var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "James",
  lastname: "Lambourne",
};

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: "Jane",
};

jane.__Proto__ = person;
console.log(jane.getFullName());
