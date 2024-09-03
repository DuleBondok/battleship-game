import "./style.css";
import { addTable } from "./table.js";
import { gameLogic } from "./rightDiv.js";

// adding e.listener to playAgain button
let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", () => {
  location.reload();
});

//initalizing
addTable();
gameLogic();
