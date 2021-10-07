
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

//Envio de correo electronico
window.onload = function () {
  document
    .getElementById("contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      //Variables
      let correoRestaurante = "jhonmendex@gmail.com";
      let nombre = document.getElementById("nombre").value;
      let correo = document.getElementById("correo").value;
      let servicio = document.getElementById("servicios").value;
      let fecha = document.getElementById("fecha").value;
      let hora = document.getElementById("hora").value;
      let telefono = document.getElementById("telefono").value;
      let cantPersonas = document.getElementById("cantPersonas").value;
      let indicaciones = document.getElementById("indicaciones").value;



      //Parametros del formulario
      var temParams = {
        to_name: nombre,
        to_email: [correoRestaurante, correo],
        from_name: "sal&sala@gmail.com",
        message:
          "El tipo de servicio es: " +
          servicio +
          "; para el día:" +
          fecha +
          "; a las :" +
          hora +
          "; con las siguientes indicaciones:" +
          indicaciones,
      };

      if (nombre.length == 0 || correo.length == 0 || servicio.length == 0 || fecha.length == 0
        || hora.length == 0 || telefono.length == 0 || cantPersonas.length == 0 || indicaciones.length == 0) {
        warning();
      } else {
        //Validaciones
        emailjs.send("contact_service", "contact_form", temParams).then(
          function () {
            Swal.fire({
              icon: "success",
              title: "¡Envio exitoso!",
            });
            document.getElementById("contact_form").reset();
          },
          function () {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal!",
            });
          }
        );
      }
    });
};



//Alertas
function warning() {
  Swal.fire({
    icon: "warning",
    title: "Recuerda..",
    text: "Todos los campos deben ser llenados!",
  });
}

function actualizarCampos() {
  nombre.reset();
  correo.reset();
}
