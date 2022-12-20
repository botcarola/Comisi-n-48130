console.log(pokemon)

// function cardsAHtml ( array ) {

//     const contenedor = document.querySelector(".contenedor")

//     array.forEach( pokemon => {
//         const card = document.createElement("div")
//         card.className = "card"
//         console.log(card)
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${pokemon.img} alt=${pokemon.name}>
//             </div>
//             <h2>
//                 ${pokemon.name}
//             </h2>
//             <h3>
//                 Peso: ${pokemon.weight}
//             </h3>
//             <h3>
//                 Altura: ${pokemon.height}
//             </h3>
//         `
//         contenedor.appendChild(card)
//     } )

// }

// cardsAHtml(pokemon)

function cardHtml ( array ) {
    const contenedor = document.querySelector(".contenedor")
    const nodos = array.reduce(( acc, pokemon ) => {
        return acc + ` 
        <div class="card">       
            <div class="container-img">
                <img src=${pokemon.img} alt=${pokemon.name}>
            </div>
            <h2>
                ${pokemon.name}
            </h2>
            <h3>
                Peso: ${pokemon.weight}
            </h3>
            <h3>
                Altura: ${pokemon.height}
            </h3>  
        </div>     
        `
    }, "")
    
    contenedor.innerHTML = nodos
}

cardHtml(pokemon)