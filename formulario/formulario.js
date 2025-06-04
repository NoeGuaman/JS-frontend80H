document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    limpiarErrores(); // Borra mensajes anteriores

    // Ejecuta cada validación
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellido();
    const esTelefonoValido = validarTelefono();
    const esCorreoValido = validarCorreo();
    const esContrasenaValida = validarContrasena();

    // Si todos devuelven true, el formulario es válido
    if (
      esNombreValido &&
      esApellidoValido &&
      esTelefonoValido &&
      esCorreoValido &&
      esContrasenaValida
    ) {
      alert("Formulario válido. ¡Enviado!");
      formulario.submit();
    }
  });

  function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
      document.getElementById("error-nombre").textContent =
        "El nombre es obligatorio.";
      return false;
    }
    return true;
  }

  function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    if (apellido === "") {
      document.getElementById("error-apellido").textContent =
        "El apellido es obligatorio.";
      return false;
    }
    return true;
  }

  function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono === "") {
      document.getElementById("error-telefono").textContent =
        "El teléfono es obligatorio.";
      return false;
    }
    return true;
  }

  function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    if (correo === "") {
      document.getElementById("error-correo").textContent =
        "El correo es obligatorio.";
      return false;
    }
    return true;
  }

  function validarContrasena() {
    const contrasena = document.getElementById("contrasena").value.trim();
    if (contrasena === "") {
      document.getElementById("error-contrasena").textContent =
        "La contraseña es obligatoria.";
      return false;
    }
    return true;
  }

  function limpiarErrores() {
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-apellido").textContent = "";
    document.getElementById("error-telefono").textContent = "";
    document.getElementById("error-correo").textContent = "";
    document.getElementById("error-contrasena").textContent = "";
  }
});
