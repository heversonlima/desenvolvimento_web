//aplicando ação no botaõ de abrir menu
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});
/*aplicando ação no botão de fechar botão*/
document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

//Previsão do tempo

const saudacoes = "Bom dia!";
const previsaoTempo = "ensolarado";
const userLocal = "Cametá";
let temperatura = 29.97673;
let condicoesTexto = `A previsao é de um dia ${previsaoTempo} em 
${userLocal} com a temperatura de ${temperatura.toFixed(1)}C°`;

document.querySelector("#greeting").innerHTML = saudacoes;
document.querySelector("p#weather").innerHTML = condicoesTexto
