var arr = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "War",
  "Ninth",
  "Tenth",
  "Tenth again",
  "Eleventh",
  "Twelth",
  "Thirteenth",
  "Fourteenth (who is Tenth yet again)",
  {
    name: "Fugtive",
    number: "unknown",
  },
  function (name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  true,
];

console.log(arr);
arr[17](arr[16].name);
