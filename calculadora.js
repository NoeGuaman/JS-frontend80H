document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("formulario");

  // Obtener los valores introducidos por el usuario
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let operacion = document.getElementById("operacion").value;

  // Validar los campos antes de hacer el cálculo
  //if...

  // Si todo está bien, se realiza la operación matemática

  // Mostrar el resultado en pantalla
});
// Función para validar los datos introducidos por el usuario
function validarCampos() {
  //aqui comprobamos que los 2 numeros no esten vacios
  if (num1 === "" || num2 === "") {
    alert("necesito los dos numeros");
    return false;
  }
  // que el divisor no sea 0 y la opción sea dividir
  if (num2 === 0) {
    alert("no se puede dividir entre cero");
  }
  //que los datos sean numeros y no letras

  //si todo esta bien retornar verdadero
}
// Función que realiza la operación matemática según la opción seleccionada
