// MENU
window.addEventListener("DOMContentLoaded", (event) => {
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    const body = document.querySelector("body");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
    });
});

// CARRUOSEL
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click', () => {
        // Guardar la posición de ese PUNTO
        let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -25

        // MOVEMOS el grande
        grande.style.transform = `translateX(${operacion}%)`

        // Recorremos TODOS los punto
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
    })
})

// FORMULARIO CONTACTO
const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarme!')
    }
}