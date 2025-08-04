// Manipulacion 

// Cambiar el texto o HTML de un elemento
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo título";        
titulo.innerHTML = "<em>Texto con énfasis</em>"; 

// Cambiar atributos // src href alt id etc

const enlace = document.querySelector("a")
enlace.setAttribute("href","https://www.google.com")
enlace.getAttribute("href")
enlace.removeAttribute("href")

// Cambiar estilos
const caja = document.querySelector(".caja")
caja.style.color = "#ffff"
caja.style.fontSize = "2em"

// Añadir o quitar clases
caja.classList.add("activo")
caja.classList.remove("oculto")
caja.classList.toggle("resaltado")
caja.classList.contains("activo");
caja.className = "nueva-clase"
caja.style.cssText = "color: white; background: black; padding: 10px;";

// Manipular atributos
const producto = document.getElementById("producto")
const id = producto.dataset.id
const precio = producto.dataset.precio
const idhtml = document.createElement("p")
const preciohtml = document.createElement("p")
preciohtml.textContent = `Precio: $${precio}`
idhtml.innerHTML = `ID del producto: ${id}`
producto.appendChild(idhtml)
producto.appendChild(preciohtml)

// Clonar nodos
const original = document.querySelector(".item");
const copia = original.cloneNode(true); 
document.body.appendChild(copia);
