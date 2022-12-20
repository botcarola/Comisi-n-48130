const persona = {
    nombre: "Martín"
}

let edad = 28

// arrays: listas de datos
// nombres alternativos: vectores, matrices, arreglos
// lista de elementos ordenados
// cada elemento dentro de un array va a ocupar una posición, esta posición se conoce como índice
// esta posición se liga de manera numérica
// esta posición es autoincremental
// los arrays se miden por su longitud
// los arrays no tienen fin


// sintaxis básica de arrays
// se usan corchetes
// los elementos que se hallen dentro de un array, se separan con coma

const frutas = ["banana", "manzana", "kiwi", "frutilla", "naranja", "pomelo", "papaya"]

// otra forma de generar nuevos arrays

const numerosArr = new Array(1, 2, 3, 4)

// de esta manera puedo visualizar los datos
// entre corchetes, utilizo el indice al cual quiero acceder para visualizar y obtener el dato que contiene esa POSICIÓN

console.log(frutas[3])

// un array puede contener cualquier tipo de dato

const random = [ 200, "Lapicera", [1, 2, 3 ,4], {}, {edad: 28},  () => console.log(saludar), frutas, numerosArr, true, false, false, 230498234, -234234234 ]

console.log(random.length) // 15

// si manipulo arrays con un for, tengo que tener en cuenta que el largo de la cadena no es lo mismo que las posiciones de los datos que contiene

const numeros = [ 1, 2 ,3 ,4 ,5 ,6]

for (let i = 0; i <= numeros.length; i++){
    console.log(numeros[i] + 2)
}

// se pueden reasignar los valores que se encuentran dentro de un array

numeros[2] = 10100

console.log(numeros)

// también se puede añadir un valor

numeros[6] = 500

console.log(numeros)

// length
// mide la longitud de la cadena

console.log(numeros.length) // 6 elementos

// push()
// añade un nuevo elemento a la cadena
// lo añade al final
// precisamos del identificador, el método y un argumento

numeros.push(35000)

console.log(numeros)

// unshift()
// añade un elemento al inicio del array
// lo añade al principio
// se encuentra en la posicion cero

numeros.unshift(100000)

console.log(numeros)

// pop()
// eliminar el último elemento del array

numeros.pop()

console.log(numeros)

// shift()
// elimina el primer elemento de la cadena

numeros.shift()

console.log(numeros)

// splice 
// permite remover o añadir nuevos elementos en una cadena, independientemente de la posición en que se encuentre
// splice modifica al array original
// splice retiene los elementos que eliminó de un array


// array.splice(indice, cantidadDeElementosAEliminar, nuevoElementoAAñadir, nuevoElementoAAñadir, nuevoElementoAAñadir, etc)

const nombres = ["Daniel", "Laila", "Cristian", "Sebas", "Facu", "Bruno", "Manuel"]

// const arrRecortado = nombres.splice(1) // corta desde la posición en adelante (CORTA TODO)

const nombresRecortados = nombres.splice(3 , 2) 

console.log(nombres)
console.log(nombresRecortados)

// puede añadir elementos
// el segundo argumento extrae el elemento de la posición 3 y lo reemplaza por los valores seguidos desde el tercer argumento

const sustraerYAniadir = nombres.splice(3, 1, "Antonio", "Agustin", "Kevin")

console.log(nombres)
console.log(sustraerYAniadir)

// puedo añadir elementos SIN EXTRAER NINGUNO
// si el segundo argumento es 0, no extrae nada, solo añade el valor a partir del tercer argumento

const aniadirSinExtraer = nombres.splice(5, 0, "Gustavo")

console.log(nombres)
console.log(aniadirSinExtraer)

// join()
// reduce a un array una cadena de caracteres
// si no le pasas argumento a join, te los separa con coma

console.log(nombres.join())

// pueden definir de qué manera separar los elementos 
console.log(nombres.join(", "))
console.log(nombres.join(""))

// concat
// permite unir arrays
// voy a necesitar dos arrays
// al final de los elementos propios del array al cual se le añaden, aparecen integrados los nuevos valores
// no modifica al array original

const concatSobreArray = frutas.concat(nombres)
console.log(concatSobreArray)

// slice 
// slice devuelve una copia
// no modifica al array original
// el último valor de la posición del índice no es incluyente

const animales = ["perro", "gato", "pájaro", "lagartija", "caballo", "vaca", "carpinchos"]

console.log(animales.slice(2))
console.log(animales.slice(2, 3))
console.log(animales.slice())

// indexOf()
// método que me deuelve el índice que cuenta un elemento
// recibe como argumento un valor que se encuentre en el array

console.log(animales.indexOf("lagartija"))
console.log(animales.indexOf("carpinchos"))
console.log(animales.indexOf("aslkdjsad")) // si no existe ne la cadena, devuelve -1

// includes
// devuelve true si se encuentra un elemento dentro del array

console.log(animales.includes("vaca"))
console.log(animales.includes("lapiz"))

// reverse
// AFECTA AL ARRAY ORIGINAL
// este método invierte el orden de un array

console.log(animales.reverse())