var dix = 10;
var troisvirgulequatorze = 3.14;
var message = "Hello, world!";
var vrai = true;
var fruits = ["Apple", "Banana", "Orange"];
alert("le variable dix est " + typeof dix);
alert("le variable troisvirgulequatorze est " + typeof troisvirgulequatorze);
alert("le variable message est " + typeof message);
alert("le variable vrai est " + typeof vrai);
alert("le variable fruits est " + typeof fruits);

//**************************************************************** */
let x = "1";
let y = "2";
let z = x + y;

console.log("Type de x:", typeof x, ", Valeur de x:", x);
console.log("Type de y:", typeof y, ", Valeur de y:", y);
console.log("Type de z:", typeof z, ", Valeur de z:", z);

// Forcer le type de x et y à entier
x = parseInt(x);
y = parseInt(y);
let a = x + y;

console.log(
  "Type de x après conversion:",
  typeof x,
  ", Valeur de x après conversion:",
  x
);
console.log(
  "Type de y après conversion:",
  typeof y,
  ", Valeur de y après conversion:",
  y
);
console.log("Type de a:", typeof a, ", Valeur de a:", a);
