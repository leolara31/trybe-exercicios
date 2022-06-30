let titulo = document.createElement("h1");
document.body.appendChild(titulo);
titulo.innerText = "Exercício 5.2 - JavaScript DOM";

let novaMain = document.createElement("main");
novaMain.className = "main-content";
document.body.appendChild(novaMain);

let secao = document.createElement("section");
secao.className = "center-content";
novaMain.appendChild(secao);

let paragrafo = document.createElement("p");
secao.appendChild(paragrafo);
paragrafo.innerText = "xablau";

let secao2 = document.createElement("section");
secao2.className = "left-content";
novaMain.appendChild(secao2)

let secao3 = document.createElement("section");
secao3.className = "right-content";
novaMain.appendChild(secao3)

let imagem = document.createElement("img");
imagem.className = "small-image";
imagem.src = 'https://picsum.photos/200';
secao2.appendChild(imagem)