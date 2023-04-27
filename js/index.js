import { data } from "./data.js";
window.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".card__img");
  const name = document.querySelector(".name");
  const ocupation = document.querySelector(".ocupation");
  const description = document.querySelector(".description");
  const btnRandom = document.querySelector(".btn_surprise_me");


  let contador = 0;
  btnRandom.addEventListener("click", randomPeople);
  showPeople(contador);
  const row_left = document.querySelector(".left");
  const row_rigth = document.querySelector(".rigth");
  function showPeople(indice) {
    if (contador>data.length-1) {
        contador=0;
        indice=contador;
      }else if(contador<0){
        contador=data.length-1;
        indice=contador;
      }
    image.setAttribute("src", data[indice].image);
    name.textContent=data[indice].name;
    ocupation.textContent=data[indice].ocupation;
    description.textContent=data[indice].description;
  }
  row_rigth.addEventListener("click", ()=>{
      contador++;
      showPeople(contador);

  });
  row_left.addEventListener("click", ()=>{
        contador--;
      showPeople(contador);
  });

  function randomPeople() {
     contador=Math.floor((Math.random())*(data.length));
    showPeople(contador);
  }
});
