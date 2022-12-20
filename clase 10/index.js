let productos = [
    {
        precio:2000
    },
    {
        precio:500
    },
    {
        precio:22000
    },
    {
        precio:4000
    },
    {
        precio:8000
    },
]

productos[3].precio

const sortArray = ( array ) => {
    const copiaProductos = productos.slice()
    copiaProductos.sort( ( a , b ) => {
        return a.precio - b.precio
    } )
}

console.log(sortArray(productos))
console.log(productos)

// caso find
// find deforma al array y te devuelve el dato que encuentra

const precioMasBajo = productos.find( ( elemento ) => elemento.precio === 500)

console.log(precioMasBajo)
console.log(typeof precioMasBajo)

function productoFiltrado () {
    contenedor.innerHTML = `<p>${precioMasBajo.precio}</p>`
}

// storage
// almacenamiento local del navegador
// espacio disponible en donde se aloja la información del usuario
// cada almacenamiento es independiente, en relación al dominio


// localStorage
// funcionalidad integrada de js que me permite interactuar con el almacenamiento local
// la información perdura en el tiempo

// setItem
// añadir una pareja de clave/valor en el storage

// localStorage.setItem(key, value)

localStorage.setItem("perrito", "Hideo Kojima")

// ejemplo de como modificar una key a través de eventos
// modoOscuro con botones que modifican los valores en el ls

const modoOscuro = document.querySelector("#oscuro")
const modoClaro = document.querySelector("#claro")

modoOscuro.onclick = () => {
    localStorage.setItem("modoOscuro", "si")    
}

modoClaro.onclick = () => {
    localStorage.setItem("modoOscuro", "no")   
}

// sessionStorage

sessionStorage.setItem("Fede", "consulta")

// getItem
// nos permite conseguir el valor de una key del almacenamiento local

const validarModo = localStorage.getItem("modoOscuro")
console.log(validarModo)

const validar = () => {
    
    if (validarModo === "si") {
        console.log("aplicar modo oscuro")
    } else {
        console.log("no aplicar modo oscuro")
    }
}

validar()

console.log(sessionStorage.getItem("Fede"))

// removeItem(key)
// remueve del localStorage o del sessionStorage un par clave/valor

localStorage.removeItem("perrito")
sessionStorage.removeItem("Fede")

// clear()
// REMUEVE TODA LA INFO QUE EXISTE EN LOCALSTORAGE O SESSIONSTORAGE

sessionStorage.clear()

// subir valores diferentes a strings
// en el storage podemos subir todo tipo de valores

// SI SUBIMOS AL LS UN DATO DIFERENTE A STRINGS Y NO LO TRANSFORMAMOS EN ALGO APROPIADO A SU ALMACENAMIENTO, ESTE DATO PIERDE SU FORMA Y SE VUELVE UNA CADENA DE CARACTERES
// UNA VEZ SUCEDIDO ESTO, NO SE PUEDE RECUPERAR

// EJ
let frutas = [ "banana", "manzana", "naranja", "pomelo", "kiwi"]

localStorage.setItem("listaVerdulería", frutas)

const listaVerduleria = localStorage.getItem("listaVerdulería")

// console.log(typeof listaVerduleria)

// INTENTAR ITERAR SOBRE ALGO QUE YA NO ES UN ARRAY, DA ERROR

// listaVerduleria.forEach( (curr) => console.log(curr))

// JSON
// JAVASCRIPT OBJECT NOTATION
// ES UN TIPO DE DATO DE texto plano
// AGILIZA LA TRANSMISIÓN DE DATOS
// LOS MÉTODOS DE TRANSFORMACIÓN NOS AYUDAN A PODER MANTENER LA ESTRUCTURA DE UN VALOR Y A SU VEZ A AGILIZAR EL USO DE ESTE DATO


// JSON.stringify
// vuelve un dato en una cadena de caracteres
const arrayAJson = JSON.stringify(frutas)

localStorage.setItem("listaFrutas", arrayAJson)

// JSON.parse
// transforma una cadena de caracteres, que anterioremente era otro tipo dedato, en su valor original

const obtenerArray = localStorage.getItem("listaFrutas")

console.log(typeof obtenerArray)

console.log(JSON.parse(obtenerArray))