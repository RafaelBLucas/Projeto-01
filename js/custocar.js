let custofabrica = Number(prompt("Digite o custo da fabrica do carro"));

let distribuidor = custofabrica * 0.28;
let impostos = custofabrica * 0.45;

let custofinal = custofabrica + distribuidor + impostos;

alert("O custo final do consumidor é: R$" + custofinal)