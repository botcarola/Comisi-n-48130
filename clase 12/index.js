// sugar syntax
// término que hace referencia a una sintaxis reducida y fácil de leer


// unario
// ++ : un incremento de 1 en 1
// ++ es equivalente a esto: i = i + 1
// -- : un decremento de 1 en 1
// -- es equivalente a esto: i = i - 1

let acc = 100

for ( let i = 0; i < 10; i++){
    // console.log(acc++)
    // console.log(acc--)    
}

// operador +=
// es una simplificación de: i = i + x // en donde x es diferente a 1

// for ( let i = 0; i < 10; i++){    
//     console.log(acc+=100)
// }

// EVALUACIONES DE CORTOCIRCUITO

const clientes = [
    {
        nombre: "Gustavo",
        edad: 20,
        cliente: "Regular",
    },
    {
        nombre: "Gaspar",
        edad: 21, 
    },
    {
        nombre: "Cristian",        
        cliente: "Regular",
    }
]

// los operadores de comparación siempre devuelven boolean
// los operadores lógicos devuelven el valor con el que estén operando, dependiendo de la situación

// OR LÓGICO
// devuelve el primer valor verdadero
// "Mostrá el primer valor o sino usá el segundo"

const jamon = "si"
const queso = 0

console.log(jamon || queso)

clientes.forEach( element => {
    console.log(element.cliente || "Bienvenido nuevo cliente")
    // console.log(element.edad || prompt(`${element.nombre}, por favor ingrese su edad`))
})

// AND LÓGICO
// devuelve el último operando que sea true
// "SI EL PRIMER OPERANDO ES TRUE, ENTONCES PASA ESTO"

const saludar = false

console.log(saludar && "Bienvenido a la web")

const div = document.querySelector("div")

clientes.forEach( element => {
    const item = document.createElement("p")
    item.innerHTML = `La edad del cliente ${element.nombre}, es de: ${element.edad}`
    element.edad && div.appendChild(item)
})

// OPERADOR TERNARIO
// tiene tres operandos
// evalúa casos como lo hiciera un if
// condicion ? respuetaPorSiEsTrue : respuetaPorSiEsFalse

const validarEdad = ( edad, permisoPadre ) => {
    if ( edad >= 18 || permisoPadre === true ) {
        console.log("Puede entrar al cine")
    } else {
        console.log("No cumple con las condiciones para entrar al cine")
    }
}

const validarCine =  ( edad, permisoPadres ) => edad >= 18 || permisoPadres === true ? "Puede acceder" : "No puede acceder"

console.log(validarCine(20, false))

// nullish || fusión
// ??
//  evalúaValorBooleano ?? SiELPrimerOperandoEsNullOUndefined, devuelve este
// si el primer opernado es null, entonces devuelve el segundo
// si el primer operando no es null ni undefined, devuelve el primer operando

const data = undefined

console.log( data ?? "No se hallan datos")

clientes.forEach( element => {
    console.log(element.edad ?? "No tiene edad")
})

// encadenamiento opcional
// ?
// devuelve un undefined cuando una propiedad anidada no existe
// que devuelva un undefined es preferible ya que al manipular grandes masas de datos, al no saber si todos los datos son consistentes, eso puede generar errores


const persona = {   
}

// ejemplo de uso

console.log(persona.familia?.padre)

// combinación de operadores

console.log(persona.familia?.madre ?? "No tiene madre")

// caso erróneo de uso del encadenamiento opcional
// no es necesario ya que cuando una prop no existe, el valor devuelto es undefined
// solo se aplica el encadenamiento a propiedades anidadas

// console.log(persona.familia?)

// DESTRUCTURING
// sintaxis que permite desempaquetar, de datos tipo objeto y arrays, valores que comprenden
// me permiten extraer un valor específico de este tipo de dato

// destructuring en arrays
// const [ valorQueQueramosExtraer ] = identificadorDelArray

const frutas = [ "naranja", "banana", "manzana", "pera", "melón" ]

const [ frutaAcida, , , frutaFavorita ] = frutas

console.log(frutaAcida)
console.log(frutaFavorita)
console.log(frutas[3])

// objetos
// para extraer un valor de un objeto, debo llamar a su propiedad
// a diferencia del array, no se debe respetar posicionamientos

let mesa = {
    patas: 4,
    asientos: 6,
    color: "madera"
}

const { asientos } = mesa

console.log(asientos)

// alias
// adoptar un alias para no utilizar la propiedad de ese objeto

const { patas : cantidadDePatas } = mesa

console.log(cantidadDePatas - 1)
console.log(mesa)

// SPREAD OPERATOR
// permite a un elemento iterable, es decir un array, ser expandido
// es decir, cada uno de los elementos que componen a una cadena o array, son tratados de manera individual

// PRIMERA UTILIDAD
// PERMITE PASAR COMO ARGUMENTOS INDIVIDUALES, LOS VALORES DE UN ARRAY A UN MÉTODO ENVOLVENTE QUE RECIBE NUMBERS COMO ARGUMENTOS
const numeros = [ 1000, 4, 546, 324234234, 3, 4.6 ]

console.log(Math.max(...numeros))

console.log(...numeros)

// si no tuviese spread operator, para obtener el número mayor, debería hacer algo así

let acumuladora  = 0 
for (let index = 0; index < numeros.length; index++) {
    if ( acumuladora < numeros[index] ) {
        acumuladora = numeros[index]
    }    
}

console.log(acumuladora)

// SEGUNDA UTILIDAD
// permite copiar arrays

const masNumeros = [ 3434, 4, 3123123, ...numeros]

console.log(masNumeros)

const perro = {
    patasCaninas: 4,
    ladra: true
}

// TERCERA UTILIDAD
// permite copias propiedades de objetos

const muchasPropiedades = { ...mesa, ...perro}

console.log(muchasPropiedades)