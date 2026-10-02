let nota1 = Number(prompt("Digite a primeira nota"));
let nota2 = Number(prompt("Digite a segunda nota"));
let nota3 = Number(prompt("Digite a terceira nota"));
let nota4 = Number(prompt("Digite a quarta nota"));

let media = (nota1 + nota2 + nota3 + nota4) /4;

if (media >=6) {
    alert("Aprovado média:" + media);
} else if ("media >= 5") {
    alert("Recuperação!:" + media);
} else {
    alert("Reprovado" + media);
}
