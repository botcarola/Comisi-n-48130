// alert("MUJEJEJE NO TE VOY ADEJAR ENTRAR A MENOS QUE LES AL ACEPTAR")

console.log("ESTAMOS INDEPENDIENTES DEL HTML")
console.log("mostrame un mensaje en consola")

// LAS PALABRAS RESERVADAS PARA INICIALIZAR VARIABLES SON DOS:
// const y let
// las variables tienen un identificador
// las variables cuentan con un operador de asignación
// las variables contienen valores, que pueden ser primitivos o tipo objeto

// const deviende de constante

const gustoDeHeladoFavoritoDeCristian = "Dulce de leche"

// CUANDO QUEREMOS VISUALIZAR UN DATO QUE SE CONTIENE EN UNA VARIABLE, HACEMOS USO DE SU IDENTIFICADOR

console.log( gustoDeHeladoFavoritoDeCristian )

// let es otra forma de declarar variables
// permite que su contenido pueda ser reasignado

let edad = 23

console.log( edad )
console.log( edad = 24 )

edad = 25

// ¿ Y QUÉ ONDA CON VAR?

// USAR VAR ES UNA MALA PRÁCTICA
// ESTÁ MAL REDECLARAR VARIABLES

var nombre = "Carola"

console.log(nombre)

nombre = "Facu"

console.log(nombre)

var nombre = "lksajdlkasjda"

console.log(nombre)

// REASIGNAR UN VALOR NO ES LO MISMO QUE REDECLARARLO

// SINTAXIS DE JS

// NO SE USA MAYUS PARA DECLARAR VARIABLES

// const NOMBRE = "Carola" ---> ESTO ESTÁ MAL

// NO SE USA MAYUS CON LAS PALABRAS RESERVADAS EN JS

// CONST nombre = "Carola" --> ESTO ESTÁ MAL

// EN JS USAMOS CAMEL CASE

const esEstudiante = "si"

// NO SE TIENEN EN CUENTA LOS ESPACIOS EN BLANCO Y LOS SALTOS DE LÍNEA, esto ayuda a la identación

// NO SE DEFINE EL TIPO DE LAS VARIABLES

// NO ES NECESARIO TERMINAR LAS SENTENCIAS CON UN ;

// JAVASCRIPT ES CASE SENSITIVE

// PERRRO, perro, perrO, PERro

// SE PUEDEN INCLUIR COMENTARIOS
// PARA UNA SOLA LÍNEA, LAS DOS BARRAS
/* añljkdñlaskdñslad */

// OPERACIONES ARITMÉTICAS

// suma
console.log( 1 + 1 )

// resta
console.log( 2 - 10 )

// multiplicación
console.log( 5 * 10 )

// división
console.log( 10 / 2 )

// operador de resto
console.log( 15 % 15 )

// typeof
// es un método que me sirve a mí para checkear con qué tipo de dato estoy trabajando

console.log( typeof 5 )
console.log( typeof edad )
console.log( typeof gustoDeHeladoFavoritoDeCristian )

// TIPOS DE DATOS PRIMITIVOS
// No tiene ningún tipo de instrucciones o estructura para manipular su valor
// carece de métodos
// son datos "sencillos"

// Number

console.log( typeof 39 )
console.log( 24 )
// los números con coma se generan con un punto
console.log(10.5)
console.log( typeof 60,5 ) // esto va a mostrar dos datos diferentes, no es un número con coma

// STRINGS
// cadena de caracteres

// console.log(Paulo) ---> esto no es un string, es el identificador de una variable que no existe
console.log( "Paulo Abad" )
console.log( 'Lautaro' )
console.log( `Hola gente, estamos programando!` )

// CUADROS DE DIÁLOGO

// SON ELEMENTOS NATIVOS DEL NAVEGADOR QUE VAN A INTERACTUAR CON EL USUARIO
// son ventanas emergentes
// TODO EL MUNDO LAS ODIA

// alert() ES UNA VENTANA EMERGENTE QUE MANDA UN MENSAJE

// alert("Hola, bienvenido a mi web")

// prompt() es una ventana emergente, pero tiene un input incorporado
// PARA PODER CAPTURAR EL VALOR QUE INGRESA A TRAVÉS DEL INPUT, VAMOS A PRECISAR DE UNA VARIABLE

// const edadDelUser = prompt("Ingrese su edad")

// console.log(edadDelUser)

// CONCATENACIÓN

const nombre1 = "Sebas"
const nombre2 = "Lauta"
const nombre3 = "Agustín"

const losPi =  nombre1 + ", " + nombre2 + " y " + nombre3 

console.log(losPi)

const numeroString = "10"
const numeroNumber = 10

console.log( numeroString + numeroNumber )
console.log( numeroNumber / numeroString )
