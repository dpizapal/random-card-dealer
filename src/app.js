/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //función cambiar número
  let randomNumber = () => {
    let chosenNumber = Math.floor(Math.random() * numbers.length);
    return numbers[chosenNumber];
  };
  //función cambiar pinta
  let randomSuit = () => {
    let chosenSuit = Math.floor(Math.random() * suits.length);
    return suits[chosenSuit];
  };
  //cambiar número
  let newNumber = document.querySelector("p");
  newNumber.innerHTML = randomNumber();
  //cambiar pinta
  let newSuit = randomSuit();

  let newTopSuit = document.querySelector(".suit-top");
  newTopSuit.innerHTML = newSuit;

  let newBottomSuit = document.querySelector(".suit-bottom");
  newBottomSuit.innerHTML = newSuit;

  //cambiar color

  if (newSuit == "&hearts;" || newSuit == "&diams;") {
    newTopSuit.style.color = "red";
    newBottomSuit.style.color = "red";
  }
};
// Numeros y Picas
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

// Funcionalidad botón
//
//
document.querySelector("#btn").addEventListener("click", () => {
  //función cambiar número
  let randomNumber = () => {
    let chosenNumber = Math.floor(Math.random() * numbers.length);
    return numbers[chosenNumber];
  };

  //función cambiar pinta
  let randomSuit = () => {
    let chosenSuit = Math.floor(Math.random() * suits.length);
    return suits[chosenSuit];
  };

  //cambiar número
  let newNumber = document.querySelector("p");
  newNumber.innerHTML = randomNumber();
  //cambiar pinta
  let newSuit = randomSuit();
  let newTopSuit = document.querySelector(".suit-top");
  newTopSuit.innerHTML = newSuit;

  let newBottomSuit = document.querySelector(".suit-bottom");
  newBottomSuit.innerHTML = newSuit;

  //cambiar color

  if (newSuit == "&hearts;" || newSuit == "&diams;") {
    newTopSuit.style.color = "red";
    newBottomSuit.style.color = "red";
  }
});
