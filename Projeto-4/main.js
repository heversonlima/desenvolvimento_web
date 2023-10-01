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

function celciusToFarh(temperatura) {
  let farh = temperatura * 1.8 + 32;
  return farh;
}

const previsaoTempo = "ensolarado";
const userLocal = "Cametá";
let temperatura = 34;
let condicoesCelsius = `The weather is cloudy in ${userLocal} and it's ${temperatura}°C outside.`;
let condicoesFarh = `The weather is cloudy in ${userLocal} and it's ${celciusToFarh(temperatura)}°F outside.` 

document.querySelector("#greeting").innerHTML = "Bom dia!";
document.querySelector("p#weather").innerHTML = condicoesCelsius;

document.querySelector(".weather-group").addEventListener("click", function(e){
  
  if (e.target.id == "celsius"){
    document.querySelector("p#weather").innerHTML = condicoesCelsius;
  } else if (e.target.id == "fahr"){
    document.querySelector("p#weather").innerHTML = condicoesFarh;
  }
})