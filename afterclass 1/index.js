// expresiones regulares , regex

// match es un método de string
// evalúa si un string contiene un patrón al cual se le pasa como argumento al match

const nombre = "F4654ranco1548"

for (let i = 0; i < nombre.length; i++) {

    if ( nombre[i].match(/[0123456789]/)){
        console.log(nombre[i])
    }

}

// charAt
// métodos de string
// te devuelve el character que se encuentra en la posición del índice señalado

console.log(nombre.charAt(4))

// backticks
// comillas especiales que me permiten añadir manipular variables dentro de una cadena de caracteres
// template strings

const edad = 28 

console.log("Hola ${nombre}")
console.log(`¡Hola ${ nombre }, tu edad es de: ${edad}!`)
console.log("¡Hola " + nombre + "!")

// repaso funciones

const saludar = ( nombre ) => {
    console.log(`Hola ${nombre}`)
}

// cuando no cumplís con el contrato de la función, automáticamente la función cumple con su tarea, pero pasa undefined como valor a los argumentos

saludar()
saludar("Samir")

const duenioDeMascota = "Paulo"

const validarDuenio = ( duenio ) => {
    const nombreDeCliente = prompt("Ingrese su nombre")

    if ( nombreDeCliente !== duenio ) {
        alert("Usted no es el dueño")
    } else {
        alert("Puede retirar a su mascota")
    }
}

// validarDuenio(duenioDeMascota)

// función que retorna

const suma = ( a, b ) => {
    return a + b
}

console.log(suma(10, 50))


const tablas = ( numero ) => {

    for( let i = 1; i <= 10; i++ ) {
        console.log(`${ numero } x ${ i } = ${ numero * i }`)
    }
}

// en el llamado se pasa el valor que vos queres procesar

tablas(5)
tablas(10)
tablas(12)
tablas(7)
tablas(8)

// Math.random para ver valores aleatorios

for (let i = 0; i < 10; i++){
    console.log( Math.floor(Math.random() * (0 + 10 ) + 0 ))
}

// INICIALIZAMOS FUNCION
// HACEMOS UNA VARIABLE EN FALSO
// DENTRO DEL FOR, HACEMOS EL IF
// SI (ESTE ELEMENTO ES IGUAL IGUAL IGUAL A UNA ARROBA){
//    ENTONCES CAMBIA EL VALOR DE LA VARIABLE POR TRUE
//    break;
//} 
// RETORNAMOS LA VARIABLE 
// FIN DE LA FUNCIÓN

// function () {
// const valor = false

// for () {
//     if(){
//         valor = true
//     }
// }
// return valor
// }

// validacion("carola@sakldjad") === true || false

// if ( validacion("carola@aslkdasd") === false ) {
//     se van a ejecutar el alerta para cambiar el usuario

// }