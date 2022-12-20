console.log("Gabriel")
console.log(1000)
console.log(true)

// tipo de dato primitivo ---> BOOLEANO
// true ---> positivo, prendido
// false ---> negativo, apagado

console.log("")
console.log(0)
console.log(null)
console.log(false)

// método unario ---> typeof
// nos permite saber qué tipo de dato estamos manipulando

// js tiene por defecto, para cada uno de sus datos o valores, un valor booleano ligado a sí mismo
// TODOS AQUELLOS ELEMENTOS QUE EXPRESAN DE CIERTA MANERA UNA AUSENCIA DE VALOR, VAN A SER TOMADOS COMO false
// también aquellos elementos que puedan ser considerados como valores erróneos, su valor por defecto es false

// Boolean() permite saber cuál es el valor booleano del tipo de dato que se pasa para ser evaluado

console.log(Boolean("Gabriel"))
console.log(Boolean(1000))
console.log(Boolean(true))

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(null))

// null y undefined: la ausencia de un valor
// undefined: aún no se haya definido un valor: no existe ese valor porque no lo definí
// null: este valor se da como resultado de la ausencia de algo
// 0: ausencia de valor
// NAN: NOT A NUMBER: false

// ejemplo de undefined
// ESTOY TRATANDO DE VISUALIZAR UN DATO QUE NO DECLARÉ Y NO EXISTE
console.log(Boolean(undefined))

// OPERADORES LÓGICOS
// AND LÓGICO (&&)
// se expresa a través de doble ampersand
// evaluando operandos
// LOS DOS OPERANDOS TIENEN QUE SER TRUE
// LA COMA, EN LAS ORACIONES, PUEDE SIGNIFICAR UNA Y
// quiero jamon, queso, aceitunas y pan (traducción a js): QUIERO JAMON Y QUESO Y ACEITUNAS Y PAN

const jamon = true
const queso = false

console.log( queso && jamon )

console.log(true && true) // --> true
console.log( false && false ) // ---> false
console.log( true && false )
console.log( false && true)

// múltiples operandos evaluados con AND LÓGICO

console.log( true && true && true && false )

// OR LÓGICO
// es la o en nuestro lenguaje
// se representa con las barras ||
// IMPLICA QUE AL MENOS UNO DE LOS OPERANDOS SEA TRUE
// SI TODOS LOS OPERANDOS SON FALSOS, LA COMPARACIÓN ES FALSA

console.log( jamon || queso )
console.log( queso || jamon )

// casos del or

console.log( true || true )
console.log( true || false )
console.log( false || true )
console.log( false || false )

// NOT
// se representa con el signo de exclamación !
// se puede utilizar hasta dos veces
// convierte el valor booleano por defecto y lo invierte

console.log( !"Gabriel" )
console.log( !0 )

// DOBLE NEGACIÓN INVIERTE EL VALOR DOS VECES

console.log( !!"Gabriel" )
console.log( !!0 )

// OPERADORES DE COMPARACIÓN
// JS RESUELVE LOS OPERADORES DE LA SIGUIENTE MANERA: PRIMERO LOS DE COMPARACIÓN Y LUEGO LOS LÓGICOS
// ES COMO LA MATEMÁTICA:
//  2 + 2 * 5 - 10 / 10 
//  2 + 10 - 1
//  12 - 1
//  11

// MAYOR
// evalúa siempre de izquierda a derecha
// da como resultado un booleano
// precisa de dos operandos para la comparación
console.log( 10 > 1000 ) // false
console.log( 1000 > 10 ) // true

// MENOR
// evaluar siempre de izquierda a derecha cuál es el menor
// de resultado da un booleano
// precisa de dos operandos para la comparación

console.log( 50 < 55 ) // true
console.log( 0 < -1000 ) // false

//MAYOR O IGUAL
// >=
// precisa de dos operandos
// devuelve un booleano de la comparación
// ES INCLUYENTE DEL NÚMERO CON EL QUE SE COMPARA
// evalúa si es mayor o igual que el segundo operando

console.log( 11 >= 10 )
console.log( 10 >= 10 )
console.log( 9 >= 10 )

// MENOR O IGUAL
// <=
// evalúa si es menor o igual que el segundo operando
// precisa de dos operandos
// devuelve un booleano de la comparación
// ES INCLUYENTE DEL NÚMERO CON EL QUE SE COMPARA

console.log( 9 <= 10 ) 
console.log( 10 <= 10 )
console.log(11 <= 10 ) // false

// OPERADOR DE IGUALDAD 
// ==
// compara si los valores de dos operandos son iguales
// no compara el tipo de dato, solo el valor

console.log( 1000 == 1000 ) //true
console.log( "Cristian" == "Cristian" ) // true
console.log( 1000 == 10 ) // false
console.log( 10 == "10" ) // true

// OPERADOR DE IGUALDAD ESTRICTA
// EVALÚA EL VALOR Y EL TIPO DE DATO DE DOS OPERANDOS
// SI NO SON IGUALES EN VALOR Y TIPO DE DATO, DA FALSE

console.log( 10 === "10" ) // false

// OPERADOR DE DESIGUALDAD
// !=
// esto es diferente a esto?
// true siempre y cuando los valores sean diferentes

console.log( 10 != "10" ) // es diferente el valor 10 de "10"?
console.log( 10 != 100 ) // true

// OPERADOR DE DESIGUALDAD ESTRICTA
// !== 
// evalúa que tanto el valor como el tipo de dato sean desiguales

console.log( 10 !== "10" ) // true

// ESTRUCTURAS CONDICIONALES

// if
// evalúa una condición
// SI LA CONDICIÓMN DA TRUE, SE EJECUTA LA INSTRUCCIÓN DESEADA
// INSTRUCCIÓN == SENTENCIA

// SI (SE CUMPLE ESTA COMPARACIÓN) {
    // ENTONCES SE EJECUTA ESTE CÓDIGO
//}
// se usa la palabra reservada if
// dentro de sus paréntesis va la condición
// si se cumple la condición, se ejecuta lo que está entre llaves
// si no se cumple, no pasa nada, se ignoran las llaves

const edad = 25
const permisoDeLosPadres = false

// el cine permite ver la peli si sos mayor de edad o tenes permiso de tus padres

if ( edad >= 18 || permisoDeLosPadres === true ) {

    console.log( "PUEDE VER LA PELÍCULA" + " " + "TIENES:" + edad + " años." )
    
}

// guardo respuesta del usuario a través del prompt en dos variables

// const edadDelUser = prompt("Ingrese su edad")
// const permisoPadres = prompt("Ingrese SI, si tiene permiso de sus padres")

// // else if
// SI NO SE CUMPLE LA COMPARACIÓN DEL IF, ENTONCES SALTA AL ELSE IF Y CHECKEA SI SE CUMPLE ESE CASO
// SI SE CUMPLE, SE EJECUTA LO QUE SE ENCUENTRA ENTRE LLAVES
// else
// se ejecutan las sentencias siempre y cuando no se cumplea ningún caso anterior, es un caso default para todo resultado false

// if ( edadDelUser >= 18 ) {
//     console.log( "Es mayor de edad, puede acceder al cine" )
// } 
// else if ( permisoPadres === "SI" || permisoPadres === "si" ) {
//     console.log("Usted tiene permiso de sus padres, puede ver la peli")
// }
// else {
//     console.log("USTED NO PUEDE VER LA PELÍCULA")
// }

// console.log(Boolean("NO"))

// 1) Crea una variable con el nombre mostrarMensaje y dale un valor true o false. Evalúe con una sentencia condicional su expresión lógica. Si es true, genere una mensaje en consola con la siguiente frase: "Bienvenido a mi web", en caso contrario, muestre en consola: "Usted no tiene acceso".
// 2) Crear una estructura condicional que evalúe si un número, alojado en una variable, es positivo. En el caso de que así sea, envíe un mensaje en consola con la siguiente frase: "Este número vibra alto", en el caso de que el número sea negativo, envíe un mensaje en consola: "Este número es negativo".
// 3) Crear una estructura condicional que evalúe un número entre el 0 y el 10 y devuelva un string dependiendo de lo siguiente:
// Menor a 6:	Desaprobado
// Mayor o igual a 6 y menor a 7:	Regular
// Mayor o igual a 7 y menor a 8:	Bueno
// Mayor o igual a entre 8 y menor a 10:	Muy bueno
// 10:	Excelente
// Menor a 0 o mayor a 10:	Puntaje inválido

