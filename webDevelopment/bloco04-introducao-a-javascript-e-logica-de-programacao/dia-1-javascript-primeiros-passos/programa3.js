const a = 6;
const b = 6;
const c = 5;

if (a > b && b > c) {
  console.log(a);
} else if (a > c && c > b) {
  console.log(a);
} else if (a > b && b === c) {
  console.log(a);
} else if (b > c && c > a) {
  console.log(b);
} else if (b > a && a > c) {
  console.log(b);
} else if (b > a && a === c) {
  console.log(b);
} else if (c > a && a > b) {
  console.log(c);
} else if (c > b && b > a) {
  console.log(c);
} else if (c > a && a === b) {
  console.log(c);
} else {
  console.log("Não existe maior número");
}
