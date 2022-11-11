function person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("I'm being invoked!");
}

var john = new person("John", "Doe");
console.log(john);

var jane = new person("Jane", "Doe");
console.log(jane);
