function greet(firstname, lastname, language, ...gender) {
  language = language || "English";

  if (arguments.length === 0) {
    console.log("Missing Parameters");
    console.log("-----------------");
    return;
  }

  console.log(firstname, lastname, language);
  console.log(arguments);
  console.log("------------------");
}

greet();
greet("James");
greet("James", "Lambourne");
greet("James", "Lambourne", "English");
greet("James", "Lambourne", "English", "Male");
