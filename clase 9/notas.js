const newNote = document.querySelector("#new-note")
const form = document.querySelector("form")
const cerrarForm = document.querySelector("#cerrar-form")
const nombre = document.querySelector("#input-nombre")
const mensaje = document.querySelector("#input-mensaje")
const edadUser = document.querySelector("#edad")

let notas = []

// cada vez que haga click al botón, el form será visible

newNote.onclick = () => {
    form.style.display = "block"
}

// un evento para cerrar a través de un click, el formulario

cerrarForm.addEventListener("click", (event) => {
    console.log(event)
    form.style.display = "none"
})

// submit
// submit es un evento que se liga a envíos de formulario
// siempre se asocia al formulario, no al input submit
// preciso de:
// 1) el identificador del formulario
// 2) el evento del envío de formulario (submit)
// 3) la función a ejecutarse

// OBJETO EVENT
// cuenta con la información del evento que se desencadenó
// preventDefault( ) previene los comportamientos por defecto del navegador

// value
// a través de value, puedo acceder al valor de los inputs
// ej: element.value
form.onsubmit = (event) => {
    event.preventDefault()
    // console.log(`${nombre.value}, de edad:${edadUser.value}, dice que: ${mensaje.value}`)
    
    if ( nombre.value === "" || mensaje.value === "" || edadUser.value === "" ) {
        alert("Tenés que completar todos los campos")
    } else {
        notas.push({
            nombreUser: nombre.value,
            mensajeUser: mensaje.value,
            edadUser: edadUser.value
        })
        notasAHtml(notas)
        console.log(notas)   
    }
}

// si quieren visualizar el estado de una variable global, que se modifica desde un evento, tienen que hacerlo desde el mismo evento
// si lo hacen por fuera, siempre verán el estado inicial

console.log(notas)

function notasAHtml ( array ) {
    const contenedor = document.querySelector(".contenedor")
    const arrayToString = array.reduce( (acc, element) => {
        return acc + `
        <div>
            <h2>
                Nombre: ${element.nombreUser}
            </h2>
            <h3>
                Edad: ${element.edadUser}
            </h3>
            <p>
                Mensaje: ${element.mensajeUser}
            </p>
        </div>
        `
    }, "")
    contenedor.innerHTML = arrayToString
}