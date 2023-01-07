const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carrito = obtenerDelLs("carrito")

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
            <div class="card-carrito" id="card-${element.id}">                   
                <h2>
                    ${element.producto}
                </h2>    
                <h3>
                    ${element.precio}
                </h3>    
                <button class="boton-carrito" id="borrar-${element.id}">Quitar</button>     
            </div>
        `
    }, "")
    return arrayReducido
}

const containerCarrito = document.querySelector(".contenedor-carrito")
containerCarrito.innerHTML = cardsAHtml(obtenerDelLs("carrito"))

const editarCarrito = () => {
    const elementoCarrito = document.querySelectorAll(".card-carrito")
    for (let i = 0; i < elementoCarrito.length; i++){
        elementoCarrito[i].onclick = () => {
            const recortar = elementoCarrito[i].id.slice(5)            
            const filtrar = carrito.filter( (filtrado, index) => {
                return filtrado.id != recortar
            })
            console.log(filtrar)
            carrito = filtrar
            localStorage.setItem("carrito", JSON.stringify(carrito)) 
            containerCarrito.innerHTML = cardsAHtml(carrito)    
            editarCarrito()      
        }
    }
}

editarCarrito()