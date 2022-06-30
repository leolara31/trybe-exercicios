//exercicio 1
let titulo = document.createElement("h1");
document.body.appendChild(titulo);
titulo.innerText = "Exercício 5.2 - JavaScript DOM";

//exercicio 2
let novaMain = document.createElement("main");
novaMain.className = "main-content";
document.body.appendChild(novaMain);

//exercicio 3
let secao = document.createElement("section");
secao.className = "center-content";
novaMain.appendChild(secao);

//exercicio 4
let paragrafo = document.createElement("p");
secao.appendChild(paragrafo);
paragrafo.innerText = "xablau";

//exercicio 5
let secao2 = document.createElement("section");
secao2.className = "left-content";
novaMain.appendChild(secao2)

//exercicio 6
let secao3 = document.createElement("section");
secao3.className = "right-content";
novaMain.appendChild(secao3)

//exercicio 7
let imagem = document.createElement("img");
imagem.className = "small-image";
imagem.src = 'https://picsum.photos/200';
secao2.appendChild(imagem)

//exercicio 8
let lista = document.createElement("ul");
lista.innerHTML = '<li>um</li><li>dois</li><li>três</li><li>quatro</li><li>cinco</li><li>seis</li><li>sete</li><li>oito</li><li>nove</li><li>dez</li>';
secao3.appendChild(lista)