
  let startGameButton = document.getElementById("startGameButton");
  let startGameDiv = document.getElementById("startGameDiv");
  let informationText = document.getElementById("informationText");
  // adding e. listeners to start screen buttons and input values
  function startScreen() {
    startGameButton.addEventListener("click", () => {
      let playerName = document.getElementById("nameInput").value;
      // check if name input is empty
      if (!playerName) {
        alert("Please input your name.");
      } else {
        console.log(playerName);
        startGameDiv = document.getElementById("startGameDiv");
        startGameDiv.style.display = "none";
      }
      informationText.textContent = `${playerName} please place your fleet on this field.`;
    });
  }
  startScreen();

  //function to change ship icon border colors after clicking on them
  function clickingShips() {
    let clickCarrier = document.getElementById("carrier");
    clickCarrier.addEventListener("click", () => {
      clickCarrier.style.border = "3px solid red";
    });
    let clickDestroyer = document.getElementById("destroyer");
    clickDestroyer.addEventListener("click", () => {
      clickDestroyer.style.border = "3px solid red";
    });
    let clickSubmarine = document.getElementById("submarine");
    clickSubmarine.addEventListener("click", () => {
      clickSubmarine.style.border = "3px solid red";
    });
    let clickPatrol = document.getElementById("patrol");
    clickPatrol.addEventListener("click", () => {
      clickPatrol.style.border = "3px solid red";
      setTimeout(() => {
        informationText.textContent =
          "Now attack enemy ships by clicking on right field!";
      }, "1300");
    });
  }
  clickingShips();
