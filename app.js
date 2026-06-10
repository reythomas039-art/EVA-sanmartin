const boton = document.getElementById("btnAccion");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent =
    "¡Gracias por hacer clic! La página está respondiendo a tu acción 😊";
});

const campoNombre = document.getElementById("campoNombre");
const previewNombre = document.getElementById("previewNombre");

campoNombre.addEventListener("input", function () {
  const valor = campoNombre.value;

  if (valor.trim() === "") {
    previewNombre.textContent = "persona sin nombre";
  } else {
    previewNombre.textContent = valor;
  }
});

boton.addEventListener("mouseover", function () {
  mensaje.textContent =
    "Estás pasando el mouse sobre el botón...";
});

boton.addEventListener("mouseout", function () {
  mensaje.textContent =
    "Acá se mostrará un mensaje cuando hagas clic.";
});s
