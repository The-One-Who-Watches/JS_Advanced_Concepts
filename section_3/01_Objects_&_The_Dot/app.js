var person = new Object();

person["firstname"] = "James";
person["lastname"] = "Lambourne";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "Galatic Coordinate 0-0-0";
person.address.city = "Arcadia";
person.address.planet = "Gallifrey";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["planet"]);
