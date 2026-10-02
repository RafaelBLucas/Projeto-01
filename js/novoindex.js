let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let botao = document.getElementById("botao");
let tema = document.getElementById("tema");

botao.addEventListener("click", function() {

    texto.innerHTML = "Oink! Você clicou em mim!";

    titulo.style.color = "red";

});

tema.addEventListener("click", function(){

    document.body.classList.toggle("escuro");
});

/*let titulo = document.getElementById("titulo");

let contador = 0;

setInterval(function() {

    contador++;

    titulo.innerHTML = "Olá, turma! " + contador;

}, 3000);*/