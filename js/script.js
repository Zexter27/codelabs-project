const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() == "" || correo.trim() == "" || mensaje.trim() == "") {

        document.getElementById("respuesta").textContent =
        "Por favor, completa todos los campos";

    } else {

        document.getElementById("respuesta").textContent =
        "¡Gracias por contactarnos! Hemos recibido tu mensaje";

    }

});