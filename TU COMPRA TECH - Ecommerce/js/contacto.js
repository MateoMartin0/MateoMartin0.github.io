const formulario = document.getElementById("form-contacto");

const nombre = document.getElementById("nombreapellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const mensajeValor = mensaje.value.trim();

    if (nombreValor === "") {
        alert("Debe ingresar su nombre y apellido.");
        nombre.focus();
        return;
    }

    if (emailValor === "") {
        alert("Debe ingresar un correo electrónico.");
        email.focus();
        return;
    }

    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionEmail.test(emailValor)) {
        alert("Debe ingresar un correo electrónico válido.");
        email.focus();
        return;
    }

    if (mensajeValor === "") {
        alert("Debe escribir un mensaje.");
        mensaje.focus();
        return;
    }

    const parametros = {
        name: nombreValor,
        message: mensajeValor,
        title: "Consulta recibida",
        email: emailValor
    };

    emailjs.send(
        "service_6prbkw4",
        "template_j2svkm7",
        parametros
    )
    .then(function() {

        alert("Formulario enviado con éxito. Revisa tu correo.");

        formulario.reset();

    })
    .catch(function(error) {

        console.error(error);

        alert("Ocurrió un error al enviar el formulario.");

    });

});