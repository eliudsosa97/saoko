console.log("Sesión JS05 operadores");

//Operadores aritmeticos:
// + - * / % **
let suma = 3 +4;

console.log("valor de suma = " + suma);

// Operadores de asignación:
let numero;
numero = 10;
numero += 10; // numero = numero + 5;
numero -= 5 // numero = numero -5;

numero = 12;
console.log("Valor de numero = " + (numero +=3) ); //15
numero *= 2;  //30
numero /= 3;  //10
numero %= 2;  //0
numero **= 3;  //0

console.log("Valor de numero = " + numero++ ); //0
console.log("Valor de numero = " + ++numero ); //2


// Operadores lógicos &&, ||, !
let valorB = true && true;
valorB = true && true || !false && true && "Hola";
console.log("Valor booleano " + valorB);

