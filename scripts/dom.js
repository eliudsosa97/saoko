console.log("Sesión JS06");

encontrarPorId();

function encontrarPorId(){
    //Obtenemos el objeto a través de su ID
    const element = document.getElementById("titulo-h1");
    console.log("datos del elemento" + element.innerHTML);

    //Cambiamos los datos en el objeto
    element.innerHTML = 'El <em class="color-em">texto</em> en el titulo es: '
        + element.innerHTML;
}

encontrarPorTagName();
function encontrarPorTagName(){
    const elements = document.getElementsByTagName("p");
    console.log("Elementos encontrados: " + elements.length);

    //Encontramos el elemento del indice 1;
    let parrafo = elements[1].innerHTML;
    console.log("Contenido en p[1]: " + parrafo);
    console.log("Contenido en p[1] usando innertext : " + elements[1].innerText);
    //inner HTML nos entrega el obj con sus elementos anidados
    //inner Text nos entrega el texto del obj, sin elementos anidados, y sin dobles espacios.
}

function encontrarPorClase() {
const elementss = document.getElementsByClassName("color");
}
