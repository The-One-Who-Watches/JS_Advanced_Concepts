function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("This function is invoked.");
}

Person.prototype.getFullname = function () {
  return this.firstname + " " + this.lastname;
};

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Doe");
console.log(jane);

Person.prototype.getFormalFullname = function () {
  return this.lastname + ", " + this.firstname;
};

console.log(john.getFormalFullname());
