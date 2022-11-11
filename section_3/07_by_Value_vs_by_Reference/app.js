// by value
var a = 3;
var b;

b = a;
a = 2;

console.log(a, b);

// by reference (a objects, functions included)
var c = { greeting: "hi" };
var d;

d = c;
c.greeting = "hello";
console.log(c, d);

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = "Hola";
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: "howdy" };
console.log(c, d);
