// CADA VEZ QUE SE DESENCADENA UN EVENTO, SE EJECUTA UNA FUNCIÓN
// desencadenador(evento) ----> ejecución de un handler (función)

const tarjeta = document.querySelector(".tarjeta")
console.log(tarjeta)
const parrafo = document.querySelector("p")

//PROPIEDAD DE DOM
// este tipo de evento solo se puede asignar una vez por elemento SIEMPRE Y CUANDO UTILICEMOS on<event>
// para poder asignar un evento a un nodo, debo tener primero
// 1- identificador del nodo al cual se le quiera ligar
// 2- el método on + evento --> a lo que será sensible el nodo
// 3- una función (es lo que se ejecuta cuando se desencadena el evento)

// puedo modificar los estilos de un nodo a través del elemento style
//

// tarjeta.onclick = (e) => {
//     console.log(e.target)   
//     parrafo.style.color = "red"
//     parrafo.style.fontSize = "100px"
// }

// la propagación se desencadena cuando un elemento hijo genera la acción del evento
// por defecto, todos los hijos de un padre que tiene ligado un evento, desencadenan el evento
// se puede detener esta propagación a través de stopPropagation() --> google

// toggle, a través de classList, me permite alternar entre clases
// eso hace que podamos modificar los estilos de un nodo

tarjeta.onclick = (e) => {
    console.log(e.target)   
    parrafo.classList.toggle("rojo")
    
}

// addEventListener()
// es una alternativa a propiedad de DOM
// este método permite que se aplique múltiples métodos repetitivos a un nodo
// NO SE PASA EL EVENTO CON EL PREFIJO ON ACÁ

// element.addEventListener("click", () => {
//})

// EVENTOS DE MOUSE

// se desencadena cuando el puntero del mouse está sobre un elemento que tiene ligado el evento

// tarjeta.addEventListener("mouseover", () => {
//     console.log("estoy dentro")
// })

// // se desencadena cuando el puntero del mouse está saliendo de un elemento que tiene ligado el evento

// tarjeta.addEventListener("mouseout", () => {
//     console.log("estoy fuera")
// })

// mousemove
// capta el movimiento del puntero dentro de un elemento que tiene un evento ligado

tarjeta.onmousemove = () => {
    console.log("movimiento")
}

// keydown
// evento que se genera cuando presionamos una tecla

document.body.onkeydown = () => {
    console.log("se ha presionado")
}