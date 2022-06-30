let titulo = document.createElement("h1");
document.body.appendChild(titulo);
titulo.innerText = "Exercício 5.2 - JavaScript DOM";

let novaMain = document.createElement("main");
novaMain.className = "main-content";
document.body.appendChild(novaMain);

let secao = document.createElement("section");
secao.className = "center-content";
novaMain.appendChild(secao);
