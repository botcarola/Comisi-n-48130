// AJAX 
// JAVASCRIPT ASINCRÓNICO Y XML


// API
// APPLICATION PROGRAMMING INTERFACE
// INTERFAZ DE PROGRAMACIÓN DE APLICACIONES
// nexo entre dos componentes de software que permite la comunicación entre ellos
// ej: javascript y una base de datos

// ej de api: "https://rickandmortyapi.com/api/character"
// las apis tienen endpoints, en donde se organiza la información de los recursos

// fetch()
// método asíncronico (promesa), que permite hacer peticiones a un base de datos
// fetch(url, {})

// con fetch, se pueden hacer hasta cinco tipo de peticiones a través de los siguientes métodos
// GET: OBTENER INFORMACIÓN
// POST: DAR DE ALTA INFORMACIÓN (CREAR UN USUARIO)
// PUT O PATCH: MODIFICAR LOS VALORES DE UN ELEMENTO PREEXISTENTE
// DELETE: BORRAR UN ELEMENTO PREEXISTENTE

// petición GET
// cuando utilizamos un fetch en petición get, el segundo argumento es optativo

fetch("https://rickandmortyapi.com/api/character/")
.then((respuesta) => respuesta.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))


// HAY APIS QUE REQUIEREN DE UNA APIKEY PARA SU USO
// PARA ELLO, DEBEMOS ENVIAR ESTA APIKEY, QUE PUEDE SER A TRAVÉS DE LA URL O EN UN ENCABEZADO

// HAY DOS TIPOS DE URL
// URL PARAMS
// EN DONDE LOS PARÁMETROS VAN A ESTAR ESTABLECIDOS AL FINALIZAR UN ENDPOINT, CON EL SIGUIENTE ESQUEMA:
// https://rickandmortyapi.com/api/character/100 ---> EL NÚMERO 100 REPRESENTA UN RECURSO ESPECÍFICO DEL SERVIDOR

 // QUERY PARAMS
 // la información de la petición va a estar definida en forma de clave/valor
 // ? se utiliza a partir del endpoint y define el comienzo de los queryparams
 // `https://api.themoviedb.org/3/terror/japones?api_key=3212346464asdasd4654&language=es-Es&page=10`

// MÉTODO POST
// a través de este método podemos enviar información 
// ej: podés dar de alta un nuevo usuario
// este método precisa que en el fetch se usen los dos argumentos
// la respuesta de un método post será de 201

fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes")
.then( res => res.json())
.then( data => console.log(data))

// fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes", {
//     method: "POST",
//     body: JSON.stringify({
//         nombre: "Federico",
//         apellido: "Asta",
//         estudiante: "si"
//     }),
//     headers: {
//         "Content-Type":"application/json"
//     }
// })
// .then( res => res.json())
// .then( data => console.log(data))

// dar de alta usuarios con evento submit

const form = document.querySelector("#form-alta")
const nombre = document.querySelector("#input-nombre")
const apellido = document.querySelector("#input-apellido")
const estudiante = document.querySelector("#input-estudiante")

form.onsubmit = (e) => {
    e.preventDefault()

    fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes", {
    method: "POST",
    body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        estudiante: estudiante.value
    }),
    headers: {
        "Content-Type":"application/json"
    }
    })
    .then( res => res.json())
    .then( data => console.log(data))
}

// PUT Y PATCH
// nos permite modificar los valores de un recurso preexistente
// PUT MODIFICA UN ELEMENTO DE MANERA COMPLETA
// PATCH MODIFICA UNA PROPIEDAD DE ESE RECURSO

function modificarEstudiante (id, nombre, apellido, estudiante) {

    fetch( `https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            estudiante: estudiante
        }),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => {
        console.log("No se pudo")
    })
}

modificarEstudiante(4, "Cristian","Barba", "si")

// METODO DELETE
// ESTE MÉTODO BORRA UN RECURSO ESPECÍFICO
// PRECISA QUE, EN EL FETCH, SE PASEN LOS DOS ARGUMENTOS, PERO SIN BODY NI HEADERS

// fetch(`https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes/7`, {
//     method: "DELETE"
// })
// .then( res => res.json())
// .then( data => console.log(data))
// .catch(() => alert("no se pudoborrar ese recurso"))

// fetch a JSON
// se puede hacer fetch a un archivo alojado en nuestra carpeta

fetch("mockdata.json")
.then( res => res.json())
.then( data => console.log(data))

// EL FETCH TIENE UNA VERSIÓN DE SUGAR SYNTAX 
// ASYNC AWAIT
// es una versión simplificada de fetch

const cards = (array) => {
    const nodos = array.reduce(( acc, element) => {
        return acc + `
        <div class="card" id="personaje-${element.id}">
            <div class="container-img">
                <img src=${element.image} alt=${element.name}>
            </div>
            <h2>
                ${element.name}
            </h2>
            <h3>
                ${element.status}
            </h3>
        </div>
        `
    },"")
    document.querySelector(".contenedor").innerHTML = nodos
}

const personajes = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()
    cards(data.results)  
    const cardsPersonajes = document.querySelectorAll(".card")
        cardsPersonajes.forEach( elemento => {
            elemento.onclick = () => {
                const id = elemento.id.slice(10)
                const filtrarPersonaje = data.results.filter( elemento => {
                    return elemento.id === Number(id)
                } )
                console.log(filtrarPersonaje)
            }
        })  
}

personajes()

let paginaSiguiente = 40

document.querySelector("#next").onclick = () => {    
    if( paginaSiguiente != 42){
        paginaSiguiente ++
        document.querySelector("#next")
    }
    console.log(paginaSiguiente)
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaSiguiente}`)
    .then( res => res.json())
    .then( data => { 
        cards(data.results)                      
    })
}

