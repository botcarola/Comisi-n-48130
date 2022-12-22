// sintaxis objeto literal

const datosUsuario = {
    user: "manu",
    password: "perrito123"
}

// funciones genéricas y reutilizables que me permiten interactuar con el localStorage

const infoAlLs = ( key, value ) => {
    localStorage.setItem( key, JSON.stringify(value))
}

const infoLs = ( key, value ) => {
    const transformarAJson = JSON.stringify(value)
    localStorage.setItem(key, transformarAJson)
}

// 

const obtenerLS = ( key ) => {
    const bajarDelLs = localStorage.getItem(key)
    return JSON.parse(bajarDelLs)
}

const obtenerDelLs = ( key ) => {
    return JSON.parse(localStorage.getItem(key))
}

// si quiero trabajar con formularios, debo pensar de la siguiente manera:
// 1) que el formulario sea enviado con un input type="submit"
// 2) el evento que se encarga de enviarlo, es un envento submit, sobre el formulario
// 3) se debe prevenir el comportamiento del navegador, para que no actualice la página, con preventDefault, sobre el event

const formLogin = document.querySelector("#login")

// si quiero acceder a los valores de los inputs, debo tomar y guardar los nodos en una variable parap oder acceder a ellos
// luego ligar a su identificador el value, para acceder al contenido ingresado desde ese input
// ej: inputUser.value

const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const contenedorFormulario = document.querySelector(".container-login")

formLogin.onsubmit = ( e ) => {
    e.preventDefault()  
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ){
        infoAlLs("login", true)
        validarInicioSesion(obtenerDelLs("login"))
    }    
}

// validar el true del localStorage, para mantener la sesión del usuario abierta

const validarInicioSesion = ( valor ) => {
    if ( valor === true ){
        contenedorFormulario.style.display = "none"
        document.querySelector("#logout").style.display = "block"
        document.querySelector(".lista-usuarios").style.display = "flex"
    } else {
        document.querySelector(".lista-usuarios").style.display = "none"
        contenedorFormulario.style.display = "block"
        document.querySelector("#logout").style.display = "none"
    }
}

validarInicioSesion(obtenerDelLs("login"))

document.querySelector("#logout").onclick = () => {    
    localStorage.removeItem("login")
    validarInicioSesion(obtenerDelLs("login"))
}

// añadir nuevos usuarios con formulario a nuestra tabla

let usuarios = []

document.querySelector("#agregar-usuario").onsubmit = (e) => {
    e.preventDefault()
    usuarios.push({
        nombre: document.querySelector("#input-nombre").value,
        edad: document.querySelector("#input-edad").value
    })
    infoAlLs("usuarios", usuarios)
    usuariosAHtml(obtenerDelLs("usuarios"))
}

const usuariosAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, elemento) => {
        return acc + `
        <tbody>
            <tr>
                <td>
                    ${elemento.nombre}
                </td>
                <td>
                    ${elemento.edad}
                </td>
            </tr>
        <tbody>
        `
    },`
    <thead>
    <tr>
        <th>
            Nombre
        </th>
        <th>
            Edad
        </th>
    </tr>
    </thead>
    `)
    document.querySelector("table").innerHTML = arrayReducido
}

let usuariosLs = obtenerDelLs("usuarios")
console.log(usuariosLs)

usuarios = usuariosLs
console.log(usuarios)

usuariosAHtml(usuarios)


// hay otros eventos que pueden ser aplicados a inputs

// inputUser.oninput = () => {
//     console.log(inputUser.value)
// }

// diferencia entre parámetro y argumento
// el parámetro es el valor representativo, que va a ocupar lugar en la función y que va a interactuar con las sentencias, hasta ser reemplazadas por los argumentos

// function suma(a, b) {
//     return a + b
// }

// suma(50, 62)

// const validarEdad = ( edad ) => {
//     if ( edad >= 18 ){
//         console.log("mayor de edad")
//     }
// }

// validarEdad(28)
// validarEdad(20)
// validarEdad(21)

// sacar info de objetos en arrays

// let clientes = [ 
//     { 
//         nombre: "Raul",
//         edad: 20 
//     },
//     { 
//         edad: 56 
//     },
//     { 
//         edad: 100 
//     },
//     { 
//         edad: 200 
//     }
// ]

// // clientes.forEach( (elemento) => {
// //     console.log(elemento.edad)
// // })

// for(let i = 0; i < clientes.length; i++){
//     if( clientes[i].nombre === "Raul"){
//         clientes[i].edad = 68
//     }
// }

// const buscarARaúl = clientes.find((element) => {
//     return element.nombre === "Raul"
// })

// // clientes[0].edad = 68

// console.log(clientes)