function makeGreeting(language) {
  return function(firstname, lastname){

    language === 'en' ? console.log("Hello,", firstname, lastname) : language === 'es' ? console.log("Hola,", firstname, lastname) : console.log("language is not defined")

  }
}

var englishGreeting = makeGreeting('en');
var spanishGreeting = makeGreeting('es');

englishGreeting('Nikos', 'Apostolopoulos');
spanishGreeting('Nikos', 'Apostolopoulos');
