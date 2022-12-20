// DOM: MODELO DE OBJETOS DEL DOCUMENTO || DOCUMENT OBJECTS MODEL
// DOM es una estructura de objetos generada por el navegador
// El navegador nos permite acceder a estos objetos a través del document
// document es la representación del árbol DOM

console.log(document)

// a través del document tenemos acceso a cada uno de los elementos, nodos u objetos con los uqe se compone el árbol DOM


//getElementById
// accede a un nodo a través de su identificador
// recibe un argumento que es el identificador del nodo

const caja = document.getElementById("caja")
console.log(caja)

// getElementsByTagName
// accede a todos los nodos que tengan ese nombre de etiqueta
// no es un array, por lo tanto los métodos no lo van a iterar
// se puede iterar con for

const div = document.getElementsByTagName("div")
console.log(div)

// getElementsByClassName
// accede a todos los nodos que compartan la misma clase
// no es un array, por lo tanto los métodos no lo van a iterar
// se puede iterar con for


const contenedor = document.getElementsByClassName("contenedor")
console.log(contenedor)

// querySelector
// te permite acceder a un nodo a través de su etiqueta
// le tenés que pasar como argumento la sintaxis de selector

console.log(document.querySelector("div"))
console.log(document.querySelector(".contenedor"))
console.log(document.querySelector("#caja"))

//querySelectorAll
// trae a todos los nodos que coincidan con el argumento, que puede ser etiqueta o clase
// no es un array, por lo tanto los métodos no lo van a iterar
// se puede iterar con for

console.log(document.querySelectorAll("div"))

// createElement
// nos permite crear un nodo desde js
// este nodo si bien está creado, no forma parte del árbol DOM
// para que forme parte, se debe relacionar a este elemento con otros métodos

const section = document.createElement("footer")
console.log(section)

// className
// añade una clase a un nodo

section.className = "pie-de-pagina"

// textContent
// nos permite acceder al contenido de una etiqueta

console.log(caja.textContent)

// también podemos modificar el contenido de un nodo

console.log(caja)

div.textContent = "Este es un nuevo contenido"

console.log(caja) 

// podemos modificar todos los contenidor de un HTMLCOLLECTION a través de un for que iterará sobre los nodos

// for ( let i = 0; i < div.length; i++){
//     div[i].textContent = "jejejeje"
// }

// append
// añadir un nodo desde js a otro nodo
// append generalmente se utiliza para contenido de texto
// se pueden añadir nodos

const tarjeta = document.createElement("div")
tarjeta.className = "tarjeta"
console.log(tarjeta)

// precisa del identificador del nodo al cual se va a añadir
// Sintaxis de append: identificadorDelNodo.metodo(nodoAIncorporar)

caja.append(tarjeta)

// appendChild
// appendChild incorpora un nodo a un nodo padre
// appendChild no acepta nodos de texto, solo nodos de etiqueta

const parrafo = document.createElement("p")
caja.appendChild(parrafo)

// innerHTML
// inserta nodos

tarjeta.innerHTML = `
    <div class="container-img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sailor-moon-1534851774.png?crop=1xw:0.8909574468085106xh;center,top&resize=640:*" alt="sailor moon">
    </div>
`

console.log(tarjeta)