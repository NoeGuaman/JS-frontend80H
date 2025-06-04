//Cargar el DOM usando un escuchador de eventos --> addEventListener
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario por su ID
  let formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página
    // Obtener los valores introducidos por el usuario
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operacion = document.getElementById("operacion").value;
    // Validar los campos antes de hacer el cálculo
    if (validarCampos(num1, num2, operacion)) {
      //alert("Campos válidos. Luego haremos el cálculo.");
      //console.log("Todo correcto")
      // Si todo está bien, se realiza la operación matemática
      let resultado = calcular(parseFloat(num1), parseFloat(num2), operacion);

      // Mostrar el resultado en pantalla
      document.getElementById("resultado").textContent =
        "Resultado: " + resultado;
    }
  });
});
// Función para validar los datos introducidos por el usuario
function validarCampos(num1, num2, operacion) {
  // Comprobar que los campos no estén vacíos
  if (num1 === "" || num2 === "") {
    alert("Por favor, rellena ambos campos numéricos.");
    return false;
  }
  // Comprobar que los valores sean números
  if (isNaN(num1) || isNaN(num2)) {
    alert("Ambos valores deben ser números.");
    return false;
  }
  // Comprobar que no se divida entre cero
  if (parseFloat(num2) === 0 && operacion === "DIVIDE") {
    alert("No se puede dividir entre cero.");
    return false;
  }
  // Si todo está bien, devolver true
  return true;
}
// Función que realiza la operación matemática según la opción seleccionada
function calcular(a, b, operacion) {
  if (operacion === "SUMA") return a + b;
  if (operacion === "RESTA") return a - b;
  if (operacion === "MULTIPLICA") return a * b;
  if (operacion === "DIVIDE") return a / b;
}
