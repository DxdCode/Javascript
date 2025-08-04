// 1️⃣ Al hacer clic en el botón con id="btnClick", muestra un mensaje en consola.

// 2️⃣ Al escribir en el input con id="inputTexto", muestra en consola el texto actual.

// 3️⃣ Al enviar el formulario con id="formulario", evita que se recargue la página y muestra un mensaje debajo del formulario (en el <p id="mensaje">).

// 4️⃣ Cambia el color de fondo del botón "btnClick" cuando el mouse pase sobre él, y vuelve al original cuando el mouse salga.

// 5️⃣ Cuando hagas doble clic en cualquiera de los <li> dentro del ul con id="lista", cambia el texto del ítem clickeado a mayúsculas.

// 6️⃣ Usa delegación de eventos en el ul con id="lista" para detectar clics en cualquier ítem y alternar la clase "activo" en el elemento clickeado.

// 7️⃣ Modifica el enlace con id="enlace" para que al hacer clic, en vez de navegar, muestre un alert que diga "Navegación detenida" y previene el comportamiento por defecto.

// 8️⃣ Al presionar cualquier tecla en el input, muestra en consola la tecla presionada.

// 9️⃣ Al enfocar el input (evento "focus"), cambia el borde del input a color azul, y cuando pierda el foco (evento "blur"), vuelve al borde original.

// 🔟 Crea un evento personalizado llamado "eventoEspecial" que se dispare al hacer clic en el botón y que muestre en consola "Evento personalizado disparado".


// 1️⃣ Implementa un toggle que al hacer clic en el botón con id="btnToggle":
// - Cambie la clase "activo" en el título <h1 id="titulo"> para alternar estilos.

// 2️⃣ Filtra en tiempo real la lista <ul id="lista"> con base en lo que se escribe en el input id="inputFiltro":
// - Muestra solo los <li> que contengan el texto ingresado (ignorando mayúsculas/minúsculas).

// 3️⃣ En el formulario con id="formRegistro", al enviar:
// - Valida que el email tenga formato correcto usando expresión regular.
// - Si está mal, evita el envío y muestra un mensaje de error en <p id="mensaje">.
// - Si está bien, muestra mensaje de éxito y limpia el formulario.

// 4️⃣ Usa delegación de eventos en la <ul id="lista"> para:
// - Detectar clicks en cualquier <li>.
// - Al hacer clic, muestra en <p id="mensaje"> el texto y el atributo "data-id" del elemento clickeado.

// 5️⃣ Implementa una función que limite el número de veces que se puede hacer clic en el botón #btnToggle a 3.
// - Luego de 3 clicks, deshabilita el botón y muestra un mensaje en <p id="mensaje">.

// 6️⃣ Añade eventos para que:
// - Al presionar Enter dentro del input #inputFiltro, se muestre en consola un mensaje con el texto actual del input.

// 7️⃣ Previene que el enlace con id="enlace" navegue y en lugar de eso abre una nueva ventana popup con tamaño 600x400 que carga la URL del enlace.

// 8️⃣ Al hacer clic en cualquier lugar fuera del formulario #formRegistro (en el body):
// - Si el formulario tiene algún campo enfocado, quita el foco (blur).

// 9️⃣ Crea y dispara un evento personalizado "usuarioRegistrado" cuando se registre el usuario con éxito,
// - Y escucha ese evento para mostrar un mensaje en consola: "Usuario registrado con éxito!".

// 🔟 Usa capture y bubbling en dos elementos anidados (puedes crear dos divs dentro del body en el HTML):
// - Pon listeners para mostrar en consola cuándo un evento de click pasa por la fase capture y bubbling.
// - Asegúrate de poder detener la propagación en alguna fase y observar el resultado.
