// EVENTOS

//Un evento es cualquier interacción o acción que ocurre en el navegador: hacer clic, mover el mouse, escribir en un input, enviar un formulario, etc.


// Agregar un evento con addEventListener
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Hiciste clic en el botón");
});

// | Evento             | ¿Cuándo ocurre?                        |
// | ------------------ | -------------------------------------- |
// | `click`            | Al hacer clic                          |
// | `dblclick`         | Doble clic                             |
// | `mouseover`        | Al pasar el mouse sobre un elemento    |
// | `mouseout`         | Al quitar el mouse                     |
// | `keydown`          | Al presionar una tecla                 |
// | `keyup`            | Al soltar una tecla                    |
// | `submit`           | Al enviar un formulario                |
// | `input`            | Al escribir en un campo de texto       |
// | `change`           | Cuando cambia el valor de un input     |
// | `load`             | Cuando la página termina de cargar     |
// | `DOMContentLoaded` | Cuando el DOM ha cargado completamente |


//  LA FUNCION CALLBACK DEL EVENTO

element.addEventListener("click", function (evento) {
  console.log("Elemento clickeado");
  console.log(evento);
});

// ACCEDER AL ELEMENTO QUE DISPARO EL EVENTO

// Con funcion
element.addEventListener("click", function () {
  console.log(this); // El elemento que recibió el clic
});
// Con arrow function:
element.addEventListener("click", (e) => {
  console.log(e.target); 
});

//REMOVER UN EVENTO 
function saludar() {
  console.log("Hola");
}

const boton = document.getElementById("boton");
boton.addEventListener("click", saludar);
boton.removeEventListener("click", saludar);

// DELEGACION DE EVENTOS
document.querySelector("#lista").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clic en:", e.target.textContent);
  }
});

//PREVENIR COMPORTAMIENTO
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página
  console.log("Formulario detenido");
});

// EVENTOS PERSONALIZADOS 
const eventoPersonalizado = new Event("miEvento");
element.dispatchEvent(eventoPersonalizado);

// BONUS

// Obtener la tecla
input.addEventListener("keydown", (e) => {
  console.log(e.key);
});
// Detectar foco
input.addEventListener("focus", () => {
  console.log("Input enfocado");
});

btn.addEventListener("click", function (e) {
  console.log(e.type);       // Tipo de evento
  console.log(e.target);     // Elemento que lanzó el evento
  e.preventDefault();        // Detiene comportamiento por defecto
  e.stopPropagation();       // Detiene propagación del evento
});
