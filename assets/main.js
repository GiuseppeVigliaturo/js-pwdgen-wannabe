
// richiesta nome
var nome = prompt('INSERICI IL TUO NOME');

// richiesta cognome
var cognome = prompt('INSERICI IL TUO COGNOME');

// richiesta colore
var colore = prompt('INSERICI IL TUO COLORE PREFERITO');
// variabile saluto
var saluto ="ciao "+nome+" "+cognome;

//variabile output finale
var output="La tua password è "+nome+cognome+colore+"19";

document.getElementById("ciao").innerHTML= saluto;

document.getElementById("password").innerHTML= output;
