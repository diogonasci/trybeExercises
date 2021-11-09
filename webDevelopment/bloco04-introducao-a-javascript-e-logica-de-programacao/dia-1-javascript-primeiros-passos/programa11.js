let salarioBruto = 3000;
let descontoInss;
let salarioDescontadoInss;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  descontoInss = salarioBruto * 0.11;
} else {
  descontoInss = 570.88;
}

salarioDescontadoInss = salarioBruto - descontoInss;

if (salarioDescontadoInss <= 1903.98) {
  salarioLiquido = salarioDescontadoInss;
} else if (salarioDescontadoInss <= 2826.65) {
  salarioLiquido = salarioDescontadoInss * 0.925 + 142.8;
} else if (salarioDescontadoInss <= 3751.05) {
  salarioLiquido = salarioDescontadoInss * 0.85 + 354.8;
} else if (salarioDescontadoInss <= 4664.68) {
  salarioLiquido = salarioDescontadoInss * 0.775 + 636.13;
} else {
  salarioLiquido = salarioDescontadoInss * 0.725 + 869.36;
}

console.log(salarioLiquido);
