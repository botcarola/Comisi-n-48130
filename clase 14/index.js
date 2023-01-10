// JavaScript es un lenguaje sincrónico
// La forma que tiene javascript de procesar sus algoritmos es secuencial y bloqueante
// un código síncrono es aquel código donde cada instrucción espera a la anterior para ejecutarse

// estos mensajes se ejecutan en base a su orden:

console.log("Primer mensaje")
console.log("Segundo mensaje")
console.log("Tercer mensaje")

// función de orden superior

const suma = ( a, b ) => {
    return a + b
}

const multiplicarLoSumado = ( a, b ) => {
    return suma( a, b ) * 2
}

console.log(multiplicarLoSumado(10, 10))

// callstack
// es la pila de ejecución de javascript

console.log("Este es el primer mensaje")

// setTimeout es un método asincrónico que ejecuta un callback luego de que se cumplean la cantidad de milisegundos especificada
// este método recibe dos argumentos obligatorios, que sería el callback y la cantidad de tiempo

setTimeout(() => {
    console.log("Este es el segundo mensaje")
}, 0)

console.log("Este es el tercer mensaje")

// se puede saturar el callstack

// function romperTodo () {
//     romperTodo()
// }
// romperTodo()

// setInterval
// ejecuta código cada cierta cantidad de tiempo en loop

const intervalo = setInterval( () => {
    console.log("Estoy atrapado en un intérvalo de tiempo, aiudaaa")
}, 500)

// clearTimeout()
// permite interrumpir el proceso asincrónico setTimeout
// debo pasarle el identificador que contenga el método asincrónico

const cadaCincoSegundos = setTimeout(() => {
    console.log("Te recuerdo lavar la ropa")
}, 1000)

clearTimeout(cadaCincoSegundos)

// clearInterval()
// permite interrumpir el proceso asincrónico setInterval
// debo pasarle el identificador que contenga el método asincrónico

clearInterval(intervalo)

// PROMESAS
// representan un evento a futuro
// representan la resolución de un evento
// Las promesas tienen tres estados posibles:

// pending: estado por defecto que se atribuye a una promesa que no ha sido concluída
// fulfilled: estado que expresa que una promesa ya se concluyó
// rejected: estado que expresa que una promesa no decantó en lo que debería

// las promesas en algún momento se manifiestan como resueltas o rechazadas

const promesa = new Promise(( resolve, reject ) => {

})

console.log(promesa)

// función que contiene una promesa
// los parámetros resolve y reject son callbacks propios de la función ejecutora 

const evaluarNota = ( nota ) => new Promise((resolve, reject) => {
    if ( nota >= 7 ) {
        resolve("Usted aprobó")
    } else {
        reject("Usted desaprobó")
    }    
})

// la resolución de esta promesa cambió el estado a fulfilled y se decantó por un resolve, ya que se cumplió el caso estructurado en el if

console.log(evaluarNota(10))

// para poder extraer los valores hayados en el resolve/reject de una promesa, debo utilizar los métodos then y catch

// si intento manipular los datos que retorna una promesa, sin uso de then y catch, obtengo como resultado el mensaje [Object promise] 
// then sirve para manipular el resultado de una promesa resuelta en resolve, se puede acceder al valor que retorna su callback
// catch sirve para manipular el error de una promesa resuleta en reject, se puede acceder al valor que retorna su callback
// finally es el método que siempre se ejecuta, independientemente de la respuesta de la promesa

// alert(`La resolución es: ${evaluarNota(8)}`)

evaluarNota(5)
.then(( value ) => {
    console.log(`Este es el valor resolve de la promesa: ${value}`)
})
.catch(( error ) => {
    console.log(`Este es el valor representativo de reject: ${error}`)  
})
.finally( () => {
    console.log("Bueno, al menos rendiste")
})

