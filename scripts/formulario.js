console.log("Sesión JS07");

/* const form = document.getElementById("registro"); */ 
const objForm = document.forms["registro"];

                        // (evento, funcionCallBack)
objForm.addEventListener('submit', event =>{
    event.preventDefault();
    console.log("El evento submit se generó");
    let email = objForm.elements['inputEmail4'].value;
    console.log(email);
    console.log(objForm.elements['inputPassword4'].value );
});