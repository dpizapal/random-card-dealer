/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//variables numeros y pinta
let numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
//funcion numero aleatorio
const randomNumber = () => {
  let chosenNumber = Math.floor(Math.random() * numbers.length);
  return numbers[chosenNumber];
};
//funcion pinta aleatoria
const randomSuit = () => {
  let chosenSuit = Math.floor(Math.random() * suits.length);
  return suits[chosenSuit];
};
//función onload pagina
window.onload = function cardRandom() {
  let newSuit = randomSuit();

  //picas y numeros
  let newTopSuit = document.querySelector(".suit-top");
  newTopSuit.innerHTML = newSuit;

  let newBottomSuit = document.querySelector(".suit-bottom");
  newBottomSuit.innerHTML = newSuit;

  let newNumber = document.querySelector(".number");
  newNumber.innerHTML = randomNumber();
  //color rojo en class card
  let card = document.querySelector(".card");
  if (newSuit === "&hearts;" || newSuit === "&diams;") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }

  //función botón
  document.querySelector("#btn").addEventListener("click", cardRandom);
};
