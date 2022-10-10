console.log("Sesion js04 Ciclos");

/**  La razón del por qué se recomienda declarar un arreglo u objeto, con *const es para evitar que se cambie el tipo de dato:
*/
const myArray = [3,2,3,4];
let arrayLet = [10,11,12];

//console.log(arrayLet);
//console.log(myArray);

myArray.push("Holisz");
myArray[3] = "xd";
myArray[myArray.length] = "ola3";


/* function remplazar(myArray){
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] === "Holisz") myArray[index] = "Eliuds";
}
return myArray;
}
 */
//Rafa
//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holisz", "Rodrigo"));
console.log(myArray);

//-----------------------------------------------------------

/**
 * FIFO
 *      E1---E2----E3 ----> [Arreglo]-----> E3---E2----E1
 * LIFO
 *      E1---E2----E3 ----> [Arreglo]-----> E1---E2----E3
 */

 console.log("#####FIFO y LIFO#####");
                    // 1           2           3
const perecederos = ["manzanas", "quesos", "fresas"];

//agregamos un elemento al final del arreglo:
perecederos.push("leche"); // sera mi 4to elemento
console.log(perecederos);
//Sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: " + perecederos.shift() );
console.log(perecederos);

// LIFO
console.log("/n============ LIFO ============");
const tienda = [...perecederos]; //Se clona el arreglo const tienda = perecederos.slice();
console.log(tienda);
//agregamos un elemento al final del arreglo:
tienda.push("el amor"); // sera mi 4to elemento
console.log(tienda);
//Sacamos el ultimo elemento en entrar
console.log("Elemento eliminado: " + tienda.pop() );
console.log(tienda);
//----------------------------------------------
console.log('####Duplicar un arreglo#####')
//Modificar el arreglo
// [2,4,5,6]; x 2 = [4,8,10,12];

const arrayNumbers = [1, 2, 3, 4, 5];
   //let total = []

   function duplicar (array1){
    let total = [...array1]
     for (let i=0; i<array1.length; i++){
       // array1[i]*= 2; //array1[i] = array1[i] * 2;
        //total.push(array1[i] * 2);
        total[i]*=2;
     }
       return total;
   }

console.log(duplicar (arrayNumbers));
console.log(arrayNumbers);

const numArray = [2,4,5,6]

const duplicated = numArray.map(num => num * 2)

console.log(duplicated)


//--------------------------------------------------------
console.log("##### Calcular el factorial de un número ######");

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

//console.log("El factorial de 7 es: " + factorial(7));

//--------------------------------------------------------
//console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');

//console.log(countE("pepe pica papas con un pico pica papas el pepe"));

let bandera = false;

while(bandera){
    console.log("Mensaje dentro del ciclo while");
}
//-----------------------------
//---------Muchas instrucciones----------
//-----------------------------------
let contador = 0;
do {
    console.log("Mensaje dentro del do-while")

} while( ++contador<10 );

//¿Cuántas veces se imprime? R: 10
contador = 3;
while( ++contador<10){
    console.log("Valor de contador: " + contador);

}
console.log("Valor final del contador = " + contador);
//¿Cuántas veces se imprime en consola y cuál es el valor final? R:7 y 11
//Con preincremento? R: 6 y 10
