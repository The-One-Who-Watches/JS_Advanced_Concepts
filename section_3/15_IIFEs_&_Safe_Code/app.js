// IIFE

(function (global, name) {
  var greeting = "Hello";
  global.greeting = "Hello";
  console.log(greeting + " " + name);
})(window, "James"); // IIFE

console.log(greeting);
