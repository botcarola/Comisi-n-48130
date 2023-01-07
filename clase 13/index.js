// // LIBRERÍAS
// // LAS LIBRERÍAS PROPORCIONAN FUNCIONALIDADES QUE PUEDEN SER INCORPORADAS EN NUESTROS CÓDIGOS
// // PARA PODER TRABAJAR CON UNA LIBRERÍA, DEBEMOS LEER LA DOCUMENTACIÓN AL RESPECTO

// // PASOS PARA INCORPORAR UNA LIBRERÍA
// // 1) BUSCAR EN LA DOCUMENTACIÓN LA FORMA EN LA CUAL SE INSTALA EN NUESTRO PROYECTO
// // 2) LEER LA DOCUMENTACIÓN SOBRE CÓMO FUNCIONA LA LIBRERÍA

// // SWEET ALERT

// // swal recibe strings o un objeto como argumento

// // primer caso) cadena de caracteres === título

// swal("Hola chicos, primera prueba, soy un título")

// // segundo caso) cadena de caracteres, en donde el primer argumento es el título y el segundo el subtitulo

// swal("Hola chicos"," esto es un subtítulo")

// // tercer caso, que va a ser un string, es un icon, pero tenemos que pasarle el nombre
// // "warning", "error", "success" e "info"

// swal("Título", "subtítulo", "error")

// // podemos pasar un objeto como argumento

// swal({
//     title: "Hola, soy un título",
//     text: "soy un sub",
//     icon: "success",
//     button: "jeje"
// })

// // para incorporar más de un botón

// swal({
//     buttons: true
// })

// // para incorporar más de un botón y cambiar su valor por defecto

// swal({
//     buttons: ["NI AHÍ", "bien ahí"]
// })

// // en el caso de que no quiera modificar el contenido de algún botón

// swal({
//     buttons: ["alskdjlaksjd", true]
// })

// // para incorporar más de un botón

// swal({
//     buttons: {
//         cancel: "no",
//         porSi: "si",
//         sadasd: "bueno"
//     }
// })

// // SWEET ALERT UTILIZA PROMESAS PARA REALIZAR UN SEGUIMIENTO DE CÓMO EL USUARIO INTERACTÚA CON LA ALERTA
// // me permite saber que valor estoy teniendo como respuesta

// swal("Haga click en ok o fuera del modal")
// .then( value => {
//     swal(`Este es el valor de lo que eligió el usuario ${value}`)
// })

// // EJEMPLO DE USO DEL VALOR ELEGIDO POR EL USUARIO CON PROMESA

// swal("Un pokemon apareció en tu camino, qué deseas hacer?", {
//     buttons: {
//         cancel: "Tengo miedo",
//         catch: "Le tiro una masterball porque soy malo",
//         defeat: "Exterminado"
//     }
// })
// .then( value => {
//     if ( value === "catch" ){
//         swal("Atrapados ya, pokemon")
//     } else if ( value === "defeat" ) {
//         swal("Yo quiero ser siempre el mejor")
//     } else {
//         swal( "El pokemon enemigo te ha quitado 1000 pesos" )
//     }
// })

// ejemplo de modal con envío de formulario

const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()
    swal("Su formulario ha sido enviado")
}

// TOASTIFY

// LIBRERÍA QUE ME PERMITE ENVIAR NOTIFICACIONES

Toastify({
    text: "prueba 1",
    duration: 1500,
    close: true
}).showToast()

// evento que dispara notificación

const botonNoti = document.querySelector("#toasty")

const notificar = ( texto ) => {
    Toastify({
        text: texto,
        duration: 1500,
        close: true
    }).showToast()
}

botonNoti.onclick = () => {
    notificar("holi soy una noti de una función con argumentos")
}

// SWIPER JS
// LIBRERÍA QUE ME PERMITE IMPLEMENTAR UN CARROUSEL (MUCHOS DE ELLOS, DE TODO TIPO)

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });

// luxon
// librería que nos permite trabajar con fechas y horas en javascript
// Luxon se maneja con una clase denominada DateTime, esto representa un milisegundo específico en el tiempo, junto con una zona horaria y una configuración regional

// para poder empezar a trabajar con fechas, precisamos instanciar la clase DateTime
// asignamos a una variable el contenido luxon.DateTime

const DateTime = luxon.DateTime

console.log(DateTime)

// para poder tener una fecha actual utilizamos .now()

const fechaActual = DateTime.now()

console.log(fechaActual)

 // como trabajar con una fecha diferente a la actual
 // utilizamos el atributo .local()

 const fechaEspecifica = DateTime.local(1900, 6, 24)
 console.log(fechaEspecifica)

 // se puede instanciar fechas pasando como argumento dos objetos como argumentos
 // el primer objeto va a estar referido al tiempo
 // el segundo  va a estar referido a la zona horaria y tipo de numeración
// para poder debemos utilizar .fromObject()

const fechaDesdeObjetos = DateTime.fromObject(
    {
        day: 10,
        hour: 15,
        month: 5,
        year: 1960
    },
    {
        zona: "America/Buenos_Aires"        
    }
)

console.log(fechaDesdeObjetos)

// podemos utilizar toSTring() o toLocaleString() para visualizar una forma local de la fecha

console.log(fechaDesdeObjetos.toString())
console.log(fechaDesdeObjetos.toLocaleString())

// como acceder a un valor en específico

console.log(fechaDesdeObjetos.year)
console.log(fechaDesdeObjetos.month)
console.log(fechaDesdeObjetos.day)
console.log(fechaDesdeObjetos.second)
console.log(fechaDesdeObjetos.weekday)
console.log(fechaDesdeObjetos.zoneName)
console.log(fechaDesdeObjetos.daysInMonth)

// para visualizar las fechas de diferentes maneras, luxon ofrece una lista de pre-sets quevan a permitirnos elegir la forma deseada
// PARA PODER UTILIZAR LOS PRE-SETS ES NECESARIO PASARLOS COMO ARGUMNETOS AL toLocaleString()

console.log(fechaActual.toLocaleString(DateTime.DATE_SHORT))
console.log(fechaActual.toLocaleString(DateTime.DATE_MED))
console.log(fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))
console.log(fechaActual.toLocaleString(DateTime.DATE_FULL))
console.log(fechaActual.toLocaleString(DateTime.DATE_HUGE))
console.log(fechaActual.toLocaleString(DateTime.DATE_SIMPLE))


// si concatenamos el método .setLocale podemos cambiar el idioma de presentación

console.log(fechaActual.setLocale("en").toLocaleString(DateTime.DATE_HUGE))

// los objetos en luxon son inmutables, ESO SIGNIFICA QUE LOS MÉTODOS DE TRANSFORMACIÓN (OPERACIONES) RETORNAR INSTANCIAS NUEVAS ALTERADAS DE ESOS VALORES, ES DECIR FECHAS

// plus
// se puede sumar tiempo a fechas

const milAniosEnElFuturo = fechaActual.plus({years: 1000})

console.log(fechaActual)
console.log(milAniosEnElFuturo)

// minus
// se puede restar tiempo a fechas

const milAniosEnElPasado = fechaActual.minus({years: 1000})

console.log(milAniosEnElPasado)

// clase interval
// podemos enviar dos fechas y nos deuelve el intervalo de tiempo entre ellas

const Interval = luxon.Interval

const entrePasadoYFuturo = Interval.fromDateTimes(milAniosEnElPasado, milAniosEnElFuturo)

console.log(entrePasadoYFuturo.length("seconds"))