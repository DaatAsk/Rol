// script.js

function mostrarImagen(imagen) {
  var overlay = document.getElementById("imagen-desplegable");
  var imgElement = document.getElementById("imagen-mostrar");
  imgElement.src = imagen;
  overlay.style.display = "flex";
}

function cerrarImagen() {
  var overlay = document.getElementById("imagen-desplegable");
  overlay.style.display = "none";
}
