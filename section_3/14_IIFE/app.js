// function statement
function greet(name) {
  console.log("Hello " + name);
}
greet("James");

// using a function expression
var greetFunc = function (name) {
  console.log("Hello " + name);
};
greetFunc("James");

// using an Immediately Invoke Function Expression (IIFE)
var greeting = (function (name) {
  console.log("Hello " + name);
})("James");

console.log(greeting);

(function (name) {
  console.log("Hello " + name);
})("Big Chuck");
