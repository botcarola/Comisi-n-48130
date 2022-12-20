// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false

// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false

// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es

// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

// 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.

// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false

// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// EJEMPLIFICACIÓN DE CASOS
// 3 // 'Es impar'
// 10 // 'Es par'

// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

// 1) Crea una variable con el nombre mostrarMensaje y dale un valor true o false. Evalúe con una sentencia condicional su expresión lógica. Si es true, genere una mensaje en consola con la siguiente frase: "Bienvenido a mi web", en caso contrario, muestre en consola: "Usted no tiene acceso".
// 2) Crear una estructura condicional que evalúe si un número, alojado en una variable, es positivo. En el caso de que así sea, envíe un mensaje en consola con la siguiente frase: "Este número vibra alto", en el caso de que el número sea negativo, envíe un mensaje en consola: "Este número es negativo".
// 3) Crear una estructura condicional que evalúe un número entre el 0 y el 10 y devuelva un string dependiendo de lo siguiente:
// Menor a 6:	Desaprobado
// Mayor o igual a 6 y menor a 7:	Regular
// Mayor o igual a 7 y menor a 8:	Bueno
// Mayor o igual a entre 8 y menor a 10:	Muy bueno
// 10:	Excelente
// Menor a 0 o mayor a 10:	Puntaje inválido


const cliente = ( nombre, apellido, edad, direccion, telefono) => {
    return `Los datos del cliente son: ${nombre}, ${apellido}, ${edad}, ${direccion}, ${telefono}.`
}

console.log(cliente("Carolina", "Lerner", 28, "Calle falsa 123", "11221122"))