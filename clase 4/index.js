// LAS FUNCIONES POR DECLARACIÓN PUEDEN LLAMARSE ANTES DE SU CREACIÓN

console.log(suma(20, 20))

// repaso

// const nombre = "Kevin"

// let edad = 19

// edad = 20

// ////////////////

// // operadores aritméticos

// console.log("+-*/")
// console.log("%")

// /// IGUALDAD
// // comparamos

// console.log( 10 == "10" )

// /// IGUALDAD ESTRICTA
// // comparar valor
// // comparar tipo de dato

// console.log( 10 === "10")

// // estructura condicional

// if ( 10 === 10 ) {
//     console.log("Son iguales")
// }

// // bucles

// for ( let i = 10 ; i >= 0 ; i-- ) {

//     console.log(i)

//     if( i === 0 ){
//         console.log( "BOOM" )
//     }
// }

//////////////////////////////////////////

// este tipo de código no es performante
// genera que se repita una y otra vez las mismas sentencias
// no se debería tener tanto hardcodeo



// if ( permisoPadres === true || edadDelCliente >= 18 ) {
//     console.log("puede acceder al cine")
// } else {
//     console.log("No cumple con los criterios")
// }

// const permisoPadres2 = true
// let edadCliente2 = 29

// if ( permisoPadres2 === true || edadDelCliente2 >= 18 ) {
//     console.log("puede acceder al cine")
// } else {
//     console.log("No cumple con los criterios")
// }

/////////////////////////////////////////////////

// FUNCIONES
// funciones por declaración
// son elementos uqe nos permiten reutilizar código, evitando la repetición sin sentido
// palabra reservada function
// identificador
// paréntesis
// llaves

const permisoPadres = false
let edadDelCliente = 15

function validarCliente () {

    let pochoclos = true

    if ( permisoPadres === true || edadDelCliente >= 18 ) {
        console.log("puede acceder al cine")
    } else {
        console.log("No cumple con los criterios")
    }
}

// ejecutar o invocar se refieren a llamar a la función para qeu sus sentencias sean cumplidas

validarCliente()

// ejemplo de otra función

function saludar () {
    console.log("Hola extraño")
}

saludar()

// QUIERO PODER SALUDAR A CUALQUIER USUARIO, SIMPLEMENTE CON UNA SOLA FUNCIÓn
// si quisiera modificar a mi función para que sea reutilizable voy a necesitar PARÁMETROS
// no hay un límite de parámetros

function saludarACualquierUsuario ( nombre ) {

    console.log(`Hola ${ nombre }`)
}

// NO SE CUMPLIÓ EL CONTRATO DE LA FUNCIÓN
// cuando no se cumple el contrato de la función, la función asigna valores undefined para cubrir los argumentos que se ignoraron

saludarACualquierUsuario()

// una llamada, invocación o ejecución correcta implica uqe se le pase un ARGUMENTO

saludarACualquierUsuario("Lautaro")

// SE PUEDE LLAMAR MÚLTIPLES VECES A UNA FUNCIÓN

saludarACualquierUsuario("Martina")
saludarACualquierUsuario("Bruno")
saludarACualquierUsuario("Alvaro")
saludarACualquierUsuario("Manuel")

// saludarACualquierUsuario(carolina) --> ESTO NO ES POSIBLE SI HABLAMOS DE STRING

const nombreDeLaProfe = "Carolina"

// SE TRANSFIERE EL VALOR DE LA VARIABLE A LA FUNCIÓN

saludarACualquierUsuario(nombreDeLaProfe)

// VALOR POR DEFECTO DE LAS FUNCIONES
// valor por defecto de una función en undefined
// se puede modificar ese valor con el uso de la palabra reservada return

function suma (a, b) {
    return a + b
}

console.log(suma(10, 10))

console.log(suma(10, 123213)) // SI EJECUTO, LA SUMA SE REALIZA, PERO NO SE VISUALIZA EN CONSOLA

const sumados = 10 + 1232132

const division = suma(10, 123213) / 2

console.log(division)

// FUNCIONES ANÓNIMAS
// no tienen la función de poder llamarse antes de ser inicializadas
// no tienen identificador propio
// su identificador está ligado a la variable que lo contiene

const resta = function (a, b) {

    return a - b
}

// si quiero llamar y/o ejecutar o invocar a la función, debo utilizar el identificador + paréntesis
// en el caso de que tenga parámetros, se pasan los argumentso

console.log(resta(500, 6))

// si queremos visualizar el valor de la función, pero no le pasamos paréntesis, entonces veremos a la función en sí
console.log(resta)

const sumarOperandos = 10 + 10

// funciones flecha
// no precisas del contexto this
// tiene una sintaxis simplificada

// no precisa de la palabra reservada function

const dividiendoNumeros = (a, b) => {
    return a / b
}

// podés hacer retorno implícito
// no precisa de retorno ni de las llaves

const dividir = (a, b) => a / b
console.log(dividir(10, 2))

// los paréntesis son optativos cuando usas un solo parámetro

const multiplicarPorDos = a => a * 2

// si usas más de uno, si o si van los paréntesis

const validarEdadParaCine = (permisoPadres, edad) => {
    const edadCliente = edad
    const permiso = permisoPadres

    if ( edadCliente >= 18 || permiso === true) {
        return "puede acceder al cine"
    } else {
        return "No puede acceder"
    }
}


console.log(validarEdadParaCine(false, 1000))

// SOLAMENTE SE PUEDE RETORNAR DENTRO DE UNA FUNCIÓN
// SI UN MÉTODO O ELEMENTO ESTÁ DENTRO DE UNA FUNCIÓN, PUEDE RETORNARSE EN ELLOS
// IF Y FOR, SI NO ESTÁN EN UNA FUNCIÓN, ES ILEGAL EL USO DEL RETURN EN ELLOS

const saludarAlumnos = ( nombre ) => {
    return nombre;
    let edad = 10 // no se toma en cuenta porque está después de un retorno
    console.log(edad) // no se visualiza porque está después de un retorno
} 

console.log(saludarAlumnos("Agustín"))

const datosDelUsuario = ( nombre, apellido, edad, direccion ) => {
    return `Datos del cliente:\n Nombre: ${nombre}\n Apellido: ${apellido}\n Edad: ${edad}\n Dirección: ${direccion}`
}

console.log(datosDelUsuario("Facundo", "Gonzalez", 20, "Calle Falsa 123"))