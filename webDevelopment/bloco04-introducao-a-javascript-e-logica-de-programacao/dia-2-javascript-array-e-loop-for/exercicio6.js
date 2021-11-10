let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares.push(numbers[index]);
  }
}

if (numerosImpares.length !== 0) {
  console.log(
    "Existem " + numerosImpares.length + " números ímpares no array numbers."
  );
} else {
  console.log("Nenhum valor ímpar encontrado.");
}
