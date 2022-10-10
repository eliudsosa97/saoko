console.log("JS06 Asincronia");

console.log("01 - Primera instrucción");

// SetTimeout (función callback, tiempo para ejecutar(ms));
// setTimeout(()=>console.log("01.5 Holi Crayoli"),3000);

const temporizador = (retardo,msj) => {
    setTimeout(() => console.log(msj), retardo);
}

const intervalo = (tiempo, msj) => {
    setInterval(()=>console.log(msj),tiempo);
}

// temporizador(5000,"02 - Segunda instrucción");
// intervalo(2000, "Holi Crayoli");

console.log("03 - Tercera instrucción");

// ***********************************************************
// API Fetch

console.log("01 - Antes de la solicitud fetch:");
fetch("https://reqres.in/api/users?page=2")
.then( response=>console.log(response));
console.log("03 - Después de la solicitud fetch");














