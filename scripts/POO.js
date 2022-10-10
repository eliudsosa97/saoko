console.log("Sesión 07 JS POO");

const miArray = [5,7,3,2];
const miArrayconstructor = new Array(5,7,3,2);

console.log(miArray);
console.log(miArrayconstructor);
//Propiedades de mi arreglo
console.log(miArray.length );
console.log(miArrayconstructor.length );
//Metodo del arreglo
console.log(miArray.sort() );
console.log(miArrayconstructor.sort() );
//===============================================

const coraline ={
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [ // [{nombre: "" pais:""}, {}, {} ]
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre:  "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /* mostrarActores: () =>{
        coraline.actores.forEach(info=> console.log(`"Actor: "${info.nombre} del pais ${info.pais}`)
        ); */
    mostrarActores: function() {
            //La palabra this hace referencia al objeto que lo invoque
        this.actores.forEach( (info) => {
            console.log(`"Actor: "${info.nombre} del pais ${info.pais}`)
        } );
    },
    /**
     * Mostrar todos los datos de la pelicula
     * 
     */
    mostrarTodaInfo: function(){
        console.log("==*==*==*==*==*==*==*");
        console.log(this.nombre);
        console.log("Duración : " + this.duracion);
        this.genero.forEach( (info) =>{
        console.log(`Genero: ${info}`);
        });
        console.log("Clasificación :" + this.clasificacion);
        console.log('Actores:' );
        this.mostrarActores();
        console.log(`Director: ${this.director.nombre} del pais ${this.director.pais}` );
        console.log("==*==*==*==*==*==*==*");
        }

    //}
};



//Accediendo al nombre:
console.log("Pelicula: " + coraline.nombre);

console.log("Qué tipo eres?" + Array.isArray(coraline.actores) );
//console.log("Actores: " + coraline.actores);

//Acceder al Array
coraline.actores.forEach( info =>{
    console.log( `Actor: ${info.nombre} del pais ${info.pais}` );
} )

//Mostrando el director

    console.log( "Director: " + coraline.directores.nombre);

//Modificar la clasificación:
coraline.clasificacion = "C";
console.log("clasificacion: " + coraline.clasificacion);

//Agregando al actor Ian McShane de UK, Daw French de UK.
coraline.actores.push({nombre: "Ian McShane", pais: "UK"});
coraline.actores.push({nombre: "Daw French", pais: "UK"});
//Iteramos los actores:
/* coraline.actores.forEach( info =>{
    console.log( `Actor: ${info.nombre} del pais ${info.pais}` );
} ) */
coraline.mostrarActores();
//coraline.mostrarDatos();