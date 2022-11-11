// gets a new object (we don't have to use the 'new' keyword)
var g = G$("John", "Doe");

// use our chainable methods
g.greet().setLang("es").greet(true).log();

// let's use our object on the click of the 'login' button
$("#login").click(function () {
  // create a new 'Greetr object (for the time being we're pretending we know the name used to log in)
  var loginGrtr = G$("John", "Doe");

  $("#logindiv").hide();
  // fire off an HTML greeting, passing the '#greeting' as the selector and chosen language, and log the welcome too.
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
