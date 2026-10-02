let anos = Number(prompt("Digite sua idade em anos"));
let meses = Number(prompt("Digite o número de meses"));
let dias = Number(prompt("Digite o número de dias"));

let totaldias = (anos * 365) + (meses * 30) + dias;

alert("Você viveu aproximadamente:" + totaldias + dias);