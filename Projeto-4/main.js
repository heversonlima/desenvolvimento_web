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


// Relogio 
/*
setInterval(function(){
  let horaLocal = new Date();

  document.querySelector("span[data-time=hours]").textContent = horaLocal.getHours().toString().padStart(2, "0"); 
  document.querySelector("span[data-time=minutes]").textContent = horaLocal.getMinutes().toString().padStart(2, "0");
  document.querySelector("span[data-time=seconds]").textContent = horaLocal.getSeconds().toString().padStart(2, "0"); 
  
},1000) */

// Seção das fotos
const galeryImg = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1"
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2"
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3"
  },
];

// pegando a imagem principal e alterando o src e alt para da mais dinamismo
let imgPrincipal = document.querySelector("#gallery > img");
//pegando a seçao thumbnails
let thumbnails = document.querySelector("#gallery .thumbnails");

imgPrincipal.src = galeryImg[0].src;
imgPrincipal.alt = galeryImg[0].alt;

//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1" 
//data-array-index="0" data-selected="true"></img>
galeryImg.forEach(function(image, index){
  let thumb = document.createElement("img");
  thumb.src = image.src;
  thumb.alt = image.alt;
  thumb.dataset.arrayIndex = index;
  thumb.dataset.selected = index === 0 ? true : false; 
 
  
  thumb.addEventListener("click", function(e){
    //variavel pra saber quem é que foi selecionado
    let selectedIndex = e.target.dataset.arrayIndex; 
    // variavel para pegar a imagem correta da lista galeryImg
    let selectedImage = galeryImg[selectedIndex];
    //mudar img sempre que clicar em um thumbnail
    imgPrincipal.src = selectedImage.src;
    imgPrincipal.alt = selectedImage.alt;

    thumbnails.querySelectorAll("img").forEach(function(img){
      //false para os que não foram clicados: no selector
      img.dataset.selected = false;
    });
    // mudar o que foi clicado para true e mostrar o selected
    e.target.dataset.selected = true;
  });

  // adcionar um novo elemento dentro de outro elemento
  thumbnails.appendChild(thumb);
});