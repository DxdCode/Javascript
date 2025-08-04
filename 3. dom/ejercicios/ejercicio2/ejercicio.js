// 1️⃣ Cambia el texto del título (id="titulo") por uno nuevo dinámicamente.
const changetext = document.getElementById("titulo");
const arrayTitulo = ["Doom", "Javascript", "Sitio DooM", "David Javascript"];

let index = 0;

setInterval(() => {
    changetext.textContent = arrayTitulo[index];
    index = (index + 1) % arrayTitulo.length;
}, 1000);


// 2️⃣ Reemplaza completamente el contenido HTML dentro del div con clase "contenido".
const changediv = document.querySelector(".contenido")
changediv.innerHTML = "<p>El titulo de arriba es llamativo</p>"
console.log(changediv)

// 3️⃣ Cambia el enlace <a> para que apunte a "https://developer.mozilla.org".
const changeenlace = document.querySelector("a")
changeenlace.setAttribute("href", "https://developer.mozilla.org")

// 4️⃣ Lee y muestra en consola el atributo "src" de la imagen.
const obtenerSrc = document.querySelector("img")
const url = obtenerSrc.getAttribute("src")
console.log(url)

// 5️⃣ Aplica estilos dinámicos a la caja: cambia fondo, color de texto y añade padding.
const cajaAtributo = document.querySelector(".caja")
cajaAtributo.style.color = "white"
cajaAtributo.style.padding = "2em 0"
cajaAtributo.style.background = "#0099ff"
cajaAtributo.style.width = "10em"


// 6️⃣ A la alerta (class="alerta"), quítale la clase "oculto" y agrégale "visible".
const caja = document.querySelector(".alerta")
caja.classList.remove("oculto")
caja.classList.add("visible")

// 7️⃣ Haz que al hacer clic en el botón con id="boton", se alterne la clase "activo".
const boton = document.querySelector("#boton")
boton.addEventListener("click",()=>{
    boton.classList.toggle("activo")
})

// 8️⃣ Lee el atributo `data-rol` del div y muéstralo por consola.
const usuario = document.querySelector("[data-rol]")
console.log(usuario)
const rol = usuario.dataset.rol
console.log(rol)

// 9️⃣ Crea un nuevo párrafo con texto, y añádelo al final del body.
const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "este es un nuevo parrafo agregado al final"
document.body.appendChild(nuevoParrafo)
// 🔟 Clona la tarjeta con clase "tarjeta" y añade la copia justo después de la original.
const tarjeta = document.querySelector(".tarjeta")
const tarjetaClone = tarjeta.cloneNode(true)
tarjeta.parentNode.insertBefore(tarjetaClone, tarjeta.nextSibling);
