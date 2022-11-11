var person = {
  firstname: "James",
  lastname: "Lambourne",
  getFullname: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("logged: " + this.getFullname());
  console.log("Arguements: " + lang1 + lang2);
  console.log("Seperator");
};

var logPersonName = logName.bind(person);

logPersonName("en", "jp");

logName.call(person, "en", "es");
logName.apply(person, ["en", "jp"]);

// function borrowing

var person2 = {
  firstname: "Dante",
  lastname: "Lambourne",
};

console.log(person.getFullname.apply(person2));

// function currying

function multiply(a, b) {
  return a * b;
}

var mulitplyByTwo = multiply.bind(this, 2);
console.log(mulitplyByTwo(4));

var mulitplyByThree = multiply.bind(this, 3);
console.log(mulitplyByTwo(4));
