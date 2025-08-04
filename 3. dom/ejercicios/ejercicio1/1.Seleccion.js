// SELECCIÓN DE ELEMENTOS DEL DOM

// getElementById(id)
// Selecciona un único elemento por su atributo id.
const titulo = document.getElementById("titulo");
console.log("getElementById:", titulo);

// getElementsByClassName(className)
// Selecciona todos los elementos que tengan esa clase (HTMLCollection).
const items = document.getElementsByClassName("item");
console.log("getElementsByClassName:", items);

// getElementsByTagName(tagName)
// Selecciona todos los elementos con esa etiqueta HTML.
const parrafos = document.getElementsByTagName("p");
console.log("getElementsByTagName:", parrafos);

// querySelector(selector)
// Selecciona el primer elemento que coincida con el selector CSS.
const primerItem = document.querySelector(".item");
console.log("querySelector:", primerItem);

// querySelectorAll(selector)
// Selecciona todos los elementos que coincidan con el selector CSS.
const todosItems = document.querySelectorAll(".item");
console.log("querySelectorAll:", todosItems);
