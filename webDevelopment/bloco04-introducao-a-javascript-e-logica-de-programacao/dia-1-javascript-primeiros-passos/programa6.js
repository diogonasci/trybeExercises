let pecaDeXadrez = "Rainha";

switch (pecaDeXadrez) {
  case "Peao":
    console.log("Anda uma casa para frente");
    break;
  case "Rei":
    console.log("Anda uma casa em qualquer direção");
    break;
  case "Rainha":
    console.log("Anda qualquer quantidade de casas em qualquer direção");
    break;
  case "Bispo":
    console.log("Anda qualquer quantidade de casas na diagonal");
    break;
  case "Torre":
    console.log("Anda qualquer quantidade de casas na vertical ou horizontal");
    break;
  case "Cavalo":
    console.log("Anda em L");
    break;
  default:
    console.log("Esta não é uma peça de xadrez.");
}
