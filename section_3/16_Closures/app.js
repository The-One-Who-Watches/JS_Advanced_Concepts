function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("hi");
sayHi("James");
