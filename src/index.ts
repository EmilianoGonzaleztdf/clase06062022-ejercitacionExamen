let longitud: number = 0;
let array0: number[] = new Array(longitud);
let menorValor: number = 0;

function cargarLongitud(longitudLocal: number) {
  longitudLocal = Number(prompt("ingrese la longitud del arreglo"));
  if (isNaN(longitudLocal)) {
    console.log("usted ingreso un valor incorrecto");
  } else if (longitudLocal <= 0) {
    console.log("usted ingreso un valor incorrecto");
  } else {
    longitud = longitudLocal;
    console.log(
      "la longitud del arreglo deseada por el usuario es:" + longitud
    );
  }
}
function generadorNumerosRandom(): number {
  return Math.floor(Math.random() * 100);
}
function cargarArray(arrayLocal: number[], longitudLocal: number) {
  let i: number;
  for (i = 0; i < longitudLocal; i++) {
    arrayLocal[i] = generadorNumerosRandom();
  }
}
function verificarNumeroMenor(arrayLocal: number[], longitudLocal: number) {
  let menorValorLocal: number = arrayLocal[0];
  for (let indice: number = 0; indice < longitudLocal; indice++) {
    if (arrayLocal[indice] < menorValorLocal) {
      menorValorLocal = arrayLocal[indice];
    }
  }
  return (menorValor = menorValorLocal);
}
function mostrarArray(arrayLocal: number[]) {
  console.log("los valores cargados aleatoriamente al array son:" + arrayLocal);
}
function mostrarMenor(varibleLocal: number) {
  console.log("el menor valor ingresado al array es: " + menorValor);
}

cargarLongitud(longitud);
cargarArray(array0, longitud);
verificarNumeroMenor(array0, longitud);
mostrarArray(array0);
mostrarMenor(menorValor);
