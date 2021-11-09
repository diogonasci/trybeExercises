const custoDoProduto = 100;
const valorDeVendaDoProduto = 220;
let custoDoProdutoComImposto = 1.2 * custoDoProduto;
let numeroDeUnidadesVendidas = 1000;

let lucroPorUnidadesVendidas =
  (valorDeVendaDoProduto - custoDoProdutoComImposto) * numeroDeUnidadesVendidas;
if (custoDoProduto < 0 || valorDeVendaDoProduto < 0) {
    console.log('Erro')
} else {
    console.log(lucroPorUnidadesVendidas)
}
  
