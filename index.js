import "./style.css";
import { addTable } from "table.js";
import { gameLogic } from "rightDiv.js";

// adding e.listener to playAgain button
let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", () => {
  location.reload();
});
// adding e.listener to gitHub Img
let gitHub = document.getElementById("gitHub");
gitHub.addEventListener("click", () => {
  window.open("https://github.com/DuleBondok");
});

//initalizing
addTable();
gameLogic();
