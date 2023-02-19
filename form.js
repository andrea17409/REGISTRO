const nombre = document.getElementById("myname");
const nombre = document.getElementById("email");
const nombre = document.getElementById("password");
const nombre = document.getElementById("repeatpassword");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validacionForm();
    let condicion = validacionForm();
    if (condicion) {
      enviarFormulario();
    }
});
    function validacionForm() {
      let condicion = true;
      listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
   });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido*");
        condicion = false;       
    }
    if (email.value.length < 1 || email.value.trim() == "") {
        mostrarMensajeError("email", "Email no valido*");
        condicion = false;       
    }
    if (password.value.length < 9 || password.value.trim() == "") {
        mostrarMensajeError("password", "Contraseña no valida*");
        condicion = false;         
    }
    if (repeatpassword.value != password.value.length) {
        mostrarMensajeError("repeatpassword", "Contraseña no coincide*");
        condicion = false;
        else {
        mostrarMensajeError("repeatpassword", "Contraseña no coincide*");
        }
        return condicion;         
}

function mostrarMensajeError(claseInput, ensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.requestFullscreen();
    form.lastElementChild.innerHTML= "Listo!! ";
}
