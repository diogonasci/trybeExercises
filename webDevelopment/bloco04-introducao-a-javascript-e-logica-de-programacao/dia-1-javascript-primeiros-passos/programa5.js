const a = 30;
const b = 60;
const c = 90;

let somaAngulos = a + b + c;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Deu ruim...");
} else if (somaAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}
