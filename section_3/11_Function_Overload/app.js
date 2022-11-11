function greet(firstname, lastname, language) {
  language = language || "en";

  if (language === "en") {
    console.log("Hello " + firstname + " " + lastname);
  } else if (language === "es") {
    console.log("Hola " + firstname + " " + lastname);
  } else {
    console.log("howdy " + firstname + " " + lastname);
  }
}

function greetEN(firstname, lastname) {
  greet(firstname, lastname, "en");
}

function greetES(firstname, lastname) {
  greet(firstname, lastname, "es");
}

greetEN("James", "Lambourne");
greetES("James", "Lambourne");
greet("James", "Lambourne", "Jp");
greet("James", "Lambourne");
