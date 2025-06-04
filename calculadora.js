document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("formulario");

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let operacion =  document.getElementById("operacion").value;
});

function validarCampos() {
  //aqui comprobamos que los 2 numeros no esten vacios
  if (num1 === "" || num2 === "") {
    alert("necesito los dos numeros");
    return false;
  }
  // que el divisor no sea 0 y sea dividir
  if(num2 === 0){
    alert("no se puede dividir entre cero")
  }
  //que los datos sean numeros y no letras


}
