let eleitores = Number(prompt("Digite o número total de eleitores:"));

let brancos = Number(prompt("Digite o número de votos brancos:"));

let nulos = Number(prompt("Digite o número de votos nulos:"));

let validos = Number(prompt("Digite o número de votos validos:"));

let percentualbrancos = (brancos * 100) / eleitores;

let percentualnulos = (nulos * 100) / eleitores;

let percentualvalidos = (validos * 100) / eleitores;

alert("O percentual de votos brancos é:" + percentualbrancos + "%\n" + 
    "O percentual de votos nulos é:" + percentualnulos + "%\n" + 
    "O percentual de votos validos é:" + percentualvalidos + "%");

