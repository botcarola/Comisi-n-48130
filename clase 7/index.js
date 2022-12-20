// calculadora
// suma, resta, multiplica y divide

// este código cuenta con un bajo nivel de abstracción
// un código con un bajo nivel de abstracción está condenado a tener una gran tasa de bugs

const calculo = ( a, b, operador ) => {

    if (operador === "+"){
        return a + b
    } else if ( operador === "-") {
        return a - b
    } else if ( operador === "*" ) {
        return a * b
    } else if ( operador === "/" ) {
        return a / b
    } else {
        return "No es un operador válido."
    }
}

console.log(calculo(10, 52, "*"))

// todas las funciones en js son consideradas funciones de PRIMERA CLASE
// a que las funciones pueden ser manipualadas como variables
// esto nos da la chance de poder pasar com oargumentos otras funciones 
// también de retornar otras funciones

// callbacks
// es una función que se pasa como argumento a otra función

const suma = ( a , b ) => {
    return a + b
}
const resta = ( a , b ) => {
    return a - b
}
const multiplicacion = ( a , b ) => {
    return a * b
}
const division = ( a , b ) => {
    return a / b
}

function calculadora ( operacion, a , b) {
    return operacion(a , b)
}

console.log(calculadora(suma, 50, 100))


// métodos de arrays QUE ITERAN SOBRE LOS ARRAYS
// todos estos métodos se aplican específicamente a arrays
// estos métodos reciben obligatoriamnete una callback o una función de primera clase
// estos métodos reciben hasta 3 parámetros, van a precisar si o si de uqe se mencionen los parámetros anteriores

const numeros = [ 1 , 2 ,3 , 4 ,5 , 6 , 7, 8, 9 ] 

// forEach
// EL CALLBACK ES OBLIGATORIO
// itera sobre los elementos que componen a un array ejecutando una instrucción sobre ellos
// recibe hasta tres parámetros: elementoActual (obligatorio), índice, array
// indice y array son optativos
// forEach no devuelve valores, solo ejecuta sentencias sobre cada uno de los elementos
// break y continue

numeros.forEach( ( elementoActual ) => {
    console.log ( elementoActual + 50)   
})

// find()
// EL CALLBACK ES OBLIGATORIO
// va a buscar al primer elemento que coincida con la búsqueda
// una vez que lo encuentra, corta la ejecución
// va a recibir hasta tres parámetros: element, i, array
// element es obligatorio
// devuelve un elemento, en el caso de que haya coincidencias

const numeroBuscado = numeros.find( ( element ) => {
    return element === 7
})

console.log(numeroBuscado)

// filter()
// EL CALLBACK ES OBLIGATORIO
// filtra en base a una condición
// recibe hasta tres párametros: element, i, array
// elemento es un parámetro obligatorio
// nos devuelve un array 
// filter se queda con los elementos que cumplan con la condición

const arrFiltrado = numeros.filter( ( curr ) => {
    return curr % 2 === 0
})

console.log(arrFiltrado)


// some()
// EL CALLBACK ES OBLIGATORIO
// itera sobre todos los elementos de un array
// devuelve un boolean
// verifica que al menos 1 ELEMENTO  del array cumpla con una condición

console.log(numeros.some(( elemento ) => {
    return elemento > 8
}))

// map()
// EL CALLBACK ES OBLIGATORIO
// itera sobre cada uno de los elementos del array y ejecuta una sentencia
// hace una copia del array original pero transformada
// recibe hasta 3 parámetros, elementoActual, i, array
// elementoActual es obligatorio
// elementoActual puede tener cualquier nombre

const numerosSumados = numeros.map( ( elemento ) => {
    return elemento + 50
})

console.log(numerosSumados)

const nuevoArray = numerosSumados // COPIA SUPERFICIAL

// reduce()
// reduce todo el valor de un array a un solo valor
// deja de ser un array y se vuelve un valor único y primitivo
// string o number
// tiene dos argumentos obligatorios: callback y valor inicial
// esto es similar a una variable acumuladora
// Recibe hasta cuatro parámetros: acumuladora, elemento, i, array
// devuelve un único valor, no un arra

const frutas = [ "banana", "manzana", "kiwi", "durazno", "melón" , "sandía", "naranja", "zapote" ]

const numero = numeros.reduce( (acumuladora, element) => {
    console.log(acumuladora)
    return acumuladora + element

}, 0)

console.log(numero)

// si no agregamos el valor inicial, al primer elemneto del array no se le van a aplicar las instrucciones

const fruta = frutas.reduce(( acc, curr ) => {
    return acc + curr.toUpperCase()
}, "")

console.log(fruta)

// sort()
// es un método que ordena el contenido de un array
// es un método inestable
// sort ordena teniendo en cuenta la posicion unicode del elemento
// sort ordena tanto numbers como strings, pero lo hace de manera diferente
// recibe como parámetros dos valores: a, b
// MODIFICA EL ARRAY ORIGINAL
// sort no devuelve un valor, solo ordena al array con el cual se liga el método

// cómo copiar arrays de manera segura?

const random = [5000, 1209323, 3, 33, -Infinity, 100000, 78475, 332]

// para ordenar numbers
// para ordenar de menor a mayor (ascendente)
const numerosOrdenados = [...random].sort( ( a, b ) => {
    return a - b
})

console.log(random)
console.log(numerosOrdenados)

// para ordenar de mayor a menor
// de manera descendente

const numerosDescendentes = [...random].sort( ( a, b ) => {
    return b - a
})

console.log(numerosDescendentes)

// cómo ordenar alfabéticamente a - z

// frutas.sort( ( a, b ) => {
//     if ( a < b ){
//         return -1
//     } else if ( a > b ){
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(frutas)

frutas.sort( ( a, b ) => {
    if ( a < b ){
        return 1
    } else if ( a > b ){
        return -1
    } else {
        return 0
    }
})

console.log(frutas)

// Math
// es un método envolvente para numbers
// siempre en mayus la primera letra

console.log(Math.E) // valor constante de Euler
console.log (Math.PI) // valor de pi
console.log(Math.min(100, 1, Infinity, 100000000)) // devuelve el menor número, que se pase como argumento
console.log(Math.max(100, 1, -Infinity, 100000000))
console.log(Math.sqrt(81)) // raíz cuadrada de un número
console.log(Math.random()) // devuelve un número aleatorio entre 0 y 1

// Math.random() * (max - min) + min
console.log(Math.random() * (100 - 1) + 1)
console.log(Math.floor(1.99)) // redondea hacia abajo
console.log(Math.ceil(1.1)) // redondea hacia arriba

console.log(Math.floor(Math.random() * (100 - 1) + 1))

// new Date
// genera una nueva fecha en horario UTC
// NO ES UN STRING
// tipo fecha
// ESTO SE PUEDE ORDENAR CON SORT

console.log(new Date())
console.log(typeof new Date()) // typeof object
// los meses en js se procesan de 0 a 11, en donde 0 es enero y 11 es diciembre
console.log(new Date(1999, 10, 30))
console.log(new Date(1999, 10, 30, 23, 59, 59))

const fecha = new Date()

// getMonth()
// se obtiene el mes de una fecha
console.log(fecha.getMonth())

// getDate()
// se obtiene el día
console.log(fecha.getDate())

//getFullYear()
// se obtiene el año
console.log(fecha.getFullYear())

//toDateSTring()
// se visualiza la fecha en formato americano
console.log(fecha.toDateString())

//toLocaleDateString()
// muestra la fecha en formato local
console.log(fecha.toLocaleDateString())

//toLocalString()
// muestra la fecha y hora en formato local
console.log(fecha.toLocaleString())

//toTimeString()
console.log(fecha.toTimeString())