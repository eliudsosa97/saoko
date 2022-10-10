console.log("Sesión JS02 funciones");

/**
 * Este es un ejemplo de una funcíon declarada (function statement)
 * Una caracteristica de una función declarada es que tiene hoisting (elevación).
 * Realiza la multiplicación de dos números
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicación a * b
 */
function multiplica(a, b){
    return a*b
}

//++++++++++++Función declarada+++++++++++++++++
//Llamado de la función declarada
console.log("Multiplica 5 * 6 = " + multiplica(5, 6));


//++++++++++++Función expresada+++++++++++++++++
/**
 * Las funciones expresadas (function expressions)
 * son declaradasdentro de la asignación de una variable
 * 
 * Estas funciones pueden ser anonimas (no tener nombre).
 * Las funciones expresadas no tienen hoisting.
 */

/**
 * Sumatoria de dos números
 * @param {Number} a 
 * @param {Number} b 
 * @returns Resultado de a + b
 */
const suma = function (a, b) {return a + b}

console.log("El resultado de 56 + 4 = " + suma(56, 4));

//++++++++++++Funciones autoinvocadas+++++++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anónimas y se autoejecutan() en su declaración.
 */
(function (){
    console.log("================");
    console.log("Hola aa");
    console.log("================");
})();

//++++++++++++Funciones flecha+++++++++++++++++

/**
 * Las funciones flechas (arrow functions) funcionan similar a las funciones declaradas pero no requieren la palabra "function" y si tienen una sóla instrucción y es el retorno, no requiere la instrucción "return"
 */

/**
 * Realiza la operación de dos números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a - b
 */
const resta =  (a, b) => a-b;

console.log("La resta de 10 - 5 = " + resta(10, 5));

/**
 * function con parámetros inicializados
 */
function divide(a,b=0){
    return a/b
}

console.log("La división de a/b = " + divide(4));

//++++++++++++ Funciones recursivas +++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("Factorial de 5 = " + factorial(5));