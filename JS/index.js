var nome = "Johann Colenetz";
var cargo = "Diretor de Fotografia - Stereogram";

var nomeHtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargohtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function cliqueNoBotaoProjetos(){
    console.log("Clicou no Botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliqueNoSobre(){
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
