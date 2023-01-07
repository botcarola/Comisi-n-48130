let carrito = []

const contenedorCards = document.querySelector(".container")

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
            <div class="card" id="card-${element.id}">
                <div class="card-img">
                    <img src=${element.img[0]} alt=${element.producto}>
                </div>   
                <h2>
                    ${element.producto}
                </h2>    
                <h3>
                    ${element.precio}
                </h3>    
                <button class="boton-carrito" id="button-${element.id}">Añadir al carrito</button>     
            </div>
        `
    }, "")
    return arrayReducido
}

contenedorCards.innerHTML = cardsAHtml(productos)

const alLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearAArray = ( array, value ) => {
    array.push(value)
}

const buscarProducto = ( producto, array) => {
    return array.find( product => {
        return product.id === Number(producto)
    })
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

// si trabajos con una lista de nodos, no podemos aplicar map, filter, reduce, find, etc
// si quiero subir un producto al carrito, debo pensar lo siguiente:
// 1) Llamar a todos los nodos que sean productos
// 2) Recorrer estos nodos con un bucle, que puede ser un for, forEach, for in, etc
// 3) que los botones sean interactiva en base a un evento
// 4) que cada evento contemple que se debe buscar a el producto que sea igual al id del botón
// 5) Que además se pushee al carrito este producto filtrado
// 6) Que se suba al localStorage los productos del carrito

const subirAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")   
    botonesCards.forEach( boton => {
        boton.onclick = () => {     
            const recortarId = boton.id.slice(7) 
            console.log(recortarId) 
            const producto = buscarProducto(recortarId, productos)
            pushearAArray(carrito, producto)
            alLs("carrito", carrito)           
        }
    })
}

subirAlCarrito()

const carritoActualizado = obtenerDelLs("carrito") || []
carrito = carritoActualizado