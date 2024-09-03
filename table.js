
  // declaring coordinate variables and lists
  let targetX = 0;
  let targetY = 0;
  let squareList = [];
  let finishGameText = document.getElementById("finishGameText");
  let finishGameDiv = document.getElementById("finishGameDiv");

  // declaring square object
  function Square(targetX, targetY) {
    this.targetX = targetX;
    this.targetY = targetY;
  }

  function addSquareToList(square) {
    squareList.push(square);
  }
  function addButtonToList(button) {
    buttonList.push(button);
  }

  const leftField = document.getElementById("leftField");
  // function to add squares to empty left div and append them
  function addSquares() {
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.classList = "row";
      leftField.appendChild(row);
      targetX = i;
      for (let j = 0; j < 10; j++) {
        let rowSquare = document.createElement("div");
        rowSquare.classList = "rowSquare";
        rowSquare.id = "rowSquare";
        row.appendChild(rowSquare);
        let rowButton = document.createElement("button");
        rowButton.id = "rowButton";
        rowButton.classList.add("buttons");
        addButtonToList(rowButton);
        rowSquare.appendChild(rowButton);
        targetY = j;
        let squareObj = new Square(targetX, targetY);
        addSquareToList(squareObj);
      }
    }
  }
  addSquares();

  // declaring objects
  function destroyerShip(
    coordinates1,
    coordinates2,
    coordinates3,
    coordinates4
  ) {
    this.coordinates1 = coordinates1;
    this.coordinates2 = coordinates2;
    this.coordinates3 = coordinates3;
    this.coordinates4 = coordinates4;
  }

  function carrierShip(
    coordinates1,
    coordinates2,
    coordinates3,
    coordinates4,
    coordinates5
  ) {
    this.coordinates1 = coordinates1;
    this.coordinates2 = coordinates2;
    this.coordinates3 = coordinates3;
    this.coordinates4 = coordinates4;
    this.coordinates5 = coordinates5;
  }

  function submarineShip(coordinates1, coordinates2, coordinates3) {
    this.coordinates1 = coordinates1;
    this.coordinates2 = coordinates2;
    this.coordinates3 = coordinates3;
  }

  function patrolShip(coordinates1, coordinates2) {
    this.coordinates1 = coordinates1;
    this.coordinates2 = coordinates2;
  }
  // spliting index number
  function splitNumberIntoDigits(number) {
    return number.toString().split("").map(Number);
  }
  // function to make coordinates from index of buttons in a list
  function getButtonCoordinates(button) {
    let buttonNumber = buttonList.indexOf(button);
    let digits = splitNumberIntoDigits(buttonNumber);
    let secondNumber;
    let firstNumber;
    if (buttonNumber <= 9) {
      firstNumber = 0;
      secondNumber = digits[0];
    } else {
      secondNumber = digits[1];
      firstNumber = digits[0];
    }
    let coordinatesOfButton = `${firstNumber},${secondNumber}`;
    console.log(coordinatesOfButton);
    return coordinatesOfButton;
  }

  // for controling setup
  let isDestroyerActive = false;
  let isCarrierActive = false;
  let isSubmarineActive = false;
  let isPatrolActive = false;

  let destroyerEventListeners = [];
  let carrierEventListeners = [];
  let submarineEventListeners = [];
  let patrolEventListeners = [];

  // function to handle click events for destroyer
  function handleDestroyerClick(event) {
    if (!isDestroyerActive) return;

    let button = event.target;
    let index = buttonList.indexOf(button);

    function setRangeForPlacingDestroyer() {
      if (index === -1 || index + 3 >= buttonList.length) return;

      let coordinatesOfDestroyer1 = getButtonCoordinates(buttonList[index]);
      let coordinatesOfDestroyer2 = getButtonCoordinates(buttonList[index + 1]);
      let coordinatesOfDestroyer3 = getButtonCoordinates(buttonList[index + 2]);
      let coordinatesOfDestroyer4 = getButtonCoordinates(buttonList[index + 3]);
      dataDestroyer1 = coordinatesOfDestroyer1;

      buttonList[index].style.backgroundColor = "black";
      buttonList[index + 1].style.backgroundColor = "black";
      buttonList[index + 2].style.backgroundColor = "black";
      buttonList[index + 3].style.backgroundColor = "black";

      shipDestroyer = new destroyerShip(
        coordinatesOfDestroyer1,
        coordinatesOfDestroyer2,
        coordinatesOfDestroyer3,
        coordinatesOfDestroyer4
      );
      console.log(shipDestroyer);

      // deactivate destoryer
      isDestroyerActive = false;

      // remove all e. listeners
      removeAllDestroyerEventListeners();
      return coordinatesOfDestroyer1;
    }

    // checking if destroyer is placed correctly(withing its bounds)
    if (index >= 0 && index <= 6) {
      setRangeForPlacingDestroyer();
    } else if (index >= 10 && index <= 16) {
      setRangeForPlacingDestroyer();
    } else if (index >= 20 && index <= 26) {
      setRangeForPlacingDestroyer();
    } else if (index >= 30 && index <= 36) {
      setRangeForPlacingDestroyer();
    } else if (index >= 40 && index <= 46) {
      setRangeForPlacingDestroyer();
    } else if (index >= 50 && index <= 56) {
      setRangeForPlacingDestroyer();
    } else if (index >= 60 && index <= 66) {
      setRangeForPlacingDestroyer();
    } else if (index >= 70 && index <= 76) {
      setRangeForPlacingDestroyer();
    } else if (index >= 80 && index <= 86) {
      setRangeForPlacingDestroyer();
    } else if (index >= 90 && index <= 96) {
      setRangeForPlacingDestroyer();
    } else {
      alert("You cannot place a destroyer at that location!");
    }
  }

  let dataCarrier1;
  let dataSubmarine1;
  let dataPatrol1;
  let dataDestroyer1;

  // function to handle click events for patrol
  function handlePatrolClick(event) {
    if (!isPatrolActive) return;

    let button = event.target;
    let index = buttonList.indexOf(button);

    function setRangeForPlacingPatrol() {
      if (index === -1 || index + 1 >= buttonList.length) return;

      let coordinatesOfPatrol1 = getButtonCoordinates(buttonList[index]);
      let coordinatesOfPatrol2 = getButtonCoordinates(buttonList[index + 1]);
      dataPatrol1 = coordinatesOfPatrol1;

      buttonList[index].style.backgroundColor = "black";
      buttonList[index + 1].style.backgroundColor = "black";

      let shipPatrol = new patrolShip(
        coordinatesOfPatrol1,
        coordinatesOfPatrol2
      );
      console.log(shipPatrol);

      isPatrolActive = false;

      removeAllPatrolEventListeners();
    }

    // checking if patrol is placed correctly(withing its bounds)
    if (index >= 0 && index <= 8) {
      setRangeForPlacingPatrol();
    } else if (index >= 10 && index <= 18) {
      setRangeForPlacingPatrol();
    } else if (index >= 20 && index <= 28) {
      setRangeForPlacingPatrol();
    } else if (index >= 30 && index <= 38) {
      setRangeForPlacingPatrol();
    } else if (index >= 40 && index <= 48) {
      setRangeForPlacingPatrol();
    } else if (index >= 50 && index <= 58) {
      setRangeForPlacingPatrol();
    } else if (index >= 60 && index <= 68) {
      setRangeForPlacingPatrol();
    } else if (index >= 70 && index <= 78) {
      setRangeForPlacingPatrol();
    } else if (index >= 80 && index <= 88) {
      setRangeForPlacingPatrol();
    } else if (index >= 90 && index <= 98) {
      setRangeForPlacingPatrol();
    } else {
      alert("You cannot place a patrol boat at that location!");
    }
  }

  // function to handle click events for carrier
  function handleCarrierClick(event) {
    if (!isCarrierActive) return; // carrier setup active?

    let button = event.target;
    let index = buttonList.indexOf(button);

    function setRangeForPlacingCarrier() {
      if (index === -1 || index + 4 >= buttonList.length) return;

      let coordinatesOfCarrier1 = getButtonCoordinates(buttonList[index]);
      let coordinatesOfCarrier2 = getButtonCoordinates(buttonList[index + 1]);
      let coordinatesOfCarrier3 = getButtonCoordinates(buttonList[index + 2]);
      let coordinatesOfCarrier4 = getButtonCoordinates(buttonList[index + 3]);
      let coordinatesOfCarrier5 = getButtonCoordinates(buttonList[index + 4]);

      dataCarrier1 = coordinatesOfCarrier1;

      buttonList[index].style.backgroundColor = "black";
      buttonList[index + 1].style.backgroundColor = "black";
      buttonList[index + 2].style.backgroundColor = "black";
      buttonList[index + 3].style.backgroundColor = "black";
      buttonList[index + 4].style.backgroundColor = "black";

      let shipCarrier = new carrierShip(
        coordinatesOfCarrier1,
        coordinatesOfCarrier2,
        coordinatesOfCarrier3,
        coordinatesOfCarrier4,
        coordinatesOfCarrier5
      );
      console.log(shipCarrier);

      isCarrierActive = false;

      removeAllCarrierEventListeners();
    }

    // checking if patrol is placed correctly(withing its bounds)
    if (index >= 0 && index <= 5) {
      setRangeForPlacingCarrier();
    } else if (index >= 10 && index <= 15) {
      setRangeForPlacingCarrier();
    } else if (index >= 20 && index <= 25) {
      setRangeForPlacingCarrier();
    } else if (index >= 30 && index <= 35) {
      setRangeForPlacingCarrier();
    } else if (index >= 40 && index <= 45) {
      setRangeForPlacingCarrier();
    } else if (index >= 50 && index <= 55) {
      setRangeForPlacingCarrier();
    } else if (index >= 60 && index <= 65) {
      setRangeForPlacingCarrier();
    } else if (index >= 70 && index <= 75) {
      setRangeForPlacingCarrier();
    } else if (index >= 80 && index <= 85) {
      setRangeForPlacingCarrier();
    } else if (index >= 90 && index <= 95) {
      setRangeForPlacingCarrier();
    } else {
      alert("You cannot place a carrier at that location!");
    }
  }

  // function to handle submarine clicks
  function handleSubmarineClick(event) {
    if (!isSubmarineActive) return; // submarine setup active?

    let button = event.target;
    let index = buttonList.indexOf(button);

    function setRangeForPlacingSubmarine() {
      if (index === -1 || index + 2 >= buttonList.length) return;

      let coordinatesOfSubmarine1 = getButtonCoordinates(buttonList[index]);
      let coordinatesOfSubmarine2 = getButtonCoordinates(buttonList[index + 1]);
      let coordinatesOfSubmarine3 = getButtonCoordinates(buttonList[index + 2]);

      dataSubmarine1 = coordinatesOfSubmarine1;

      buttonList[index].style.backgroundColor = "black";
      buttonList[index + 1].style.backgroundColor = "black";
      buttonList[index + 2].style.backgroundColor = "black";

      let shipSubmarine = new submarineShip(
        coordinatesOfSubmarine1,
        coordinatesOfSubmarine2,
        coordinatesOfSubmarine3
      );
      console.log(shipSubmarine);

      isSubmarineActive = false;

      removeAllSubmarineEventListeners();
    }

    // checking if submarine is placed correctly(withing its bounds)
    if (index >= 0 && index <= 7) {
      setRangeForPlacingSubmarine();
    } else if (index >= 10 && index <= 17) {
      setRangeForPlacingSubmarine();
    } else if (index >= 20 && index <= 27) {
      setRangeForPlacingSubmarine();
    } else if (index >= 30 && index <= 37) {
      setRangeForPlacingSubmarine();
    } else if (index >= 40 && index <= 47) {
      setRangeForPlacingSubmarine();
    } else if (index >= 50 && index <= 57) {
      setRangeForPlacingSubmarine();
    } else if (index >= 60 && index <= 67) {
      setRangeForPlacingSubmarine();
    } else if (index >= 70 && index <= 77) {
      setRangeForPlacingSubmarine();
    } else if (index >= 80 && index <= 87) {
      setRangeForPlacingSubmarine();
    } else if (index >= 90 && index <= 97) {
      setRangeForPlacingSubmarine();
    } else {
      alert("You cannot place a submarine at that location!");
    }
  }

  // function to add e. listeners to destroyer
  function addEventListenersToDestroyer() {
    if (isDestroyerActive) return; // destroyer setup active?

    isDestroyerActive = true; // activate destroyer setup

    removeAllCarrierEventListeners(); // deactivate all setups
    removeAllSubmarineEventListeners();
    removeAllPatrolEventListeners();

    for (let i = 0; i < buttonList.length; i++) {
      const button = buttonList[i];

      // add e. listener
      button.addEventListener("click", handleDestroyerClick);

      // storing a reference
      destroyerEventListeners.push({
        button: button,
        listener: handleDestroyerClick,
      });
    }
  }

  // function to remove all destroyer event listeners
  function removeAllDestroyerEventListeners() {
    for (let { button, listener } of destroyerEventListeners) {
      button.removeEventListener("click", listener);
    }

    destroyerEventListeners = [];
  }

  // adding event listeners to patrol
  function addEventListenersToPatrol() {
    if (isPatrolActive) return; // prevent listeners

    isPatrolActive = true; // activate patrol setup

    removeAllCarrierEventListeners(); // deactivate all other setups
    removeAllSubmarineEventListeners();
    removeAllDestroyerEventListeners();

    for (let i = 0; i < buttonList.length; i++) {
      const button = buttonList[i];

      button.addEventListener("click", handlePatrolClick);

      patrolEventListeners.push({
        button: button,
        listener: handlePatrolClick,
      });
    }
  }

  // function to remove all patrol e. listeners
  function removeAllPatrolEventListeners() {
    for (let { button, listener } of patrolEventListeners) {
      button.removeEventListener("click", listener);
    }

    // clearing the list
    patrolEventListeners = [];
  }

  // adding carrier e. listeners
  function addEventListenersToCarrier() {
    if (isCarrierActive) return;

    isCarrierActive = true; // activate carrier setup

    removeAllDestroyerEventListeners(); // deactivate all other setups
    removeAllSubmarineEventListeners();
    removeAllPatrolEventListeners();

    for (let i = 0; i < buttonList.length; i++) {
      const button = buttonList[i];

      // adding event listener
      button.addEventListener("click", handleCarrierClick);

      // storing a reference
      carrierEventListeners.push({
        button: button,
        listener: handleCarrierClick,
      });
    }
  }

  function removeAllCarrierEventListeners() {
    for (let { button, listener } of carrierEventListeners) {
      button.removeEventListener("click", listener);
    }

    carrierEventListeners = [];
  }

  // adding event listeners to submarine
  function addEventListenersToSubmarine() {
    if (isSubmarineActive) return;

    isSubmarineActive = true; // activate submarine setup

    removeAllDestroyerEventListeners(); // deactivating all other setups
    removeAllCarrierEventListeners();
    removeAllPatrolEventListeners();

    for (let i = 0; i < buttonList.length; i++) {
      const button = buttonList[i];
      button.addEventListener("click", handleSubmarineClick);

      submarineEventListeners.push({
        button: button,
        listener: handleSubmarineClick,
      });
    }
  }

  // removing all event listeners from submarine
  function removeAllSubmarineEventListeners() {
    for (let { button, listener } of submarineEventListeners) {
      button.removeEventListener("click", listener);
    }

    submarineEventListeners = [];
  }

  // initialization
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("destroyer")
      .addEventListener("click", addEventListenersToDestroyer);
    document
      .getElementById("carrier")
      .addEventListener("click", addEventListenersToCarrier);
    document
      .getElementById("submarine")
      .addEventListener("click", addEventListenersToSubmarine);
    document
      .getElementById("patrol")
      .addEventListener("click", addEventListenersToPatrol);
  });

  /* ------------------------------------------------------------------------------------------------------------------------------------------------*/

  function computerPlays() {
    //declaring variables
    let enemyTargetX = 0;
    let enemyTargetY = 0;
    let enemySquareList = [];
    let enemyButtonList = [];
    let enemyEventListeners = [];

    // declaring square object
    function enemySquare(enemyTargetX, enemyTargetY) {
      this.enemyTargetX = enemyTargetX;
      this.enemyTargetY = enemyTargetY;
    }

    function addEnemySquareToList(square) {
      enemySquareList.push(square);
    }
    function addEnemyButtonToList(button) {
      enemyButtonList.push(button);
    }

    const rightField = document.getElementById("rightField");

    // function to add squares and button to empty right div and append them to lists
    function addSquaresToRightDiv() {
      for (let i = 0; i < 10; i++) {
        let rightRow = document.createElement("div");
        rightRow.classList = "row";
        rightField.appendChild(rightRow);
        enemyTargetX = i;
        for (let j = 0; j < 10; j++) {
          let enemyRowSquare = document.createElement("div");
          enemyRowSquare.classList = "enemyRowSquare";
          enemyRowSquare.id = "enemyRowSquare";
          rightRow.appendChild(enemyRowSquare);
          let enemyRowButton = document.createElement("button");
          enemyRowButton.id = "enemyRowButton";
          enemyRowButton.classList.add("enemyButtons");
          addEnemyButtonToList(enemyRowButton);
          enemyRowSquare.appendChild(enemyRowButton);
          enemyTargetY = j;
          let enemySquareObj = new enemySquare(enemyTargetX, enemyTargetY);
          addEnemySquareToList(enemySquareObj);
        }
      }
    }
    addSquaresToRightDiv();

    // declaring enemy objects
    function enemyDestroyerShip(
      coordinates1,
      coordinates2,
      coordinates3,
      coordinates4,
      isHit = 0
    ) {
      this.coordinates1 = coordinates1;
      this.coordinates2 = coordinates2;
      this.coordinates3 = coordinates3;
      this.coordinates4 = coordinates4;
      this.isHit = isHit;
    }

    function enemyCarrierShip(
      coordinates1,
      coordinates2,
      coordinates3,
      coordinates4,
      coordinates5,
      isHit = 0
    ) {
      this.coordinates1 = coordinates1;
      this.coordinates2 = coordinates2;
      this.coordinates3 = coordinates3;
      this.coordinates4 = coordinates4;
      this.coordinates5 = coordinates5;
      this.isHit = isHit;
    }

    function enemySubmarineShip(
      coordinates1,
      coordinates2,
      coordinates3,
      isHit = 0
    ) {
      this.coordinates1 = coordinates1;
      this.coordinates2 = coordinates2;
      this.coordinates3 = coordinates3;
      this.isHit = isHit;
    }

    function enemyPatrolShip(coordinates1, coordinates2, isHit = 0) {
      this.coordinates1 = coordinates1;
      this.coordinates2 = coordinates2;
      this.isHit = isHit;
    }

    // function to random postion enemy ships

    // spliting index number
    function splitNumberIntoDigits(number) {
      return number.toString().split("").map(Number);
    }
    let positionOfEnemyCarrier = getRandomNumber();
    let positionOfEnemyDestroyer;
    let positionOfEnemySubmarine;
    let positionOfEnemyPatrol;

    function positionEnemyShips() {
      let enemyCarrierCoordinates1 = getEnemyCoordinates(
        positionOfEnemyCarrier
      );
      let enemyDestroyerCoordinates1;
      let enemySubmarineCoordinates1;
      let enemyPatrolCoordinates1;

      // position other enemy ships whit coordinates of carrier
      if (positionOfEnemyCarrier > 46) {
        positionOfEnemyDestroyer = positionOfEnemyCarrier - 20;
        enemyDestroyerCoordinates1 = getEnemyCoordinates(
          positionOfEnemyDestroyer
        );
        positionOfEnemySubmarine = positionOfEnemyCarrier - 30;
        enemySubmarineCoordinates1 = getEnemyCoordinates(
          positionOfEnemySubmarine
        );
        positionOfEnemyPatrol = positionOfEnemyCarrier - 50;
        enemyPatrolCoordinates1 = getEnemyCoordinates(positionOfEnemyPatrol);
      } else {
        positionOfEnemyDestroyer = positionOfEnemyCarrier + 20;
        enemyDestroyerCoordinates1 = getEnemyCoordinates(
          positionOfEnemyDestroyer
        );
        positionOfEnemySubmarine = positionOfEnemyCarrier + 30;
        enemySubmarineCoordinates1 = getEnemyCoordinates(
          positionOfEnemySubmarine
        );
        positionOfEnemyPatrol = positionOfEnemyCarrier + 50;
        enemyPatrolCoordinates1 = getEnemyCoordinates(positionOfEnemyPatrol);
      }

      let enemyCarrierCoordinates2 = getEnemyCoordinates(
        positionOfEnemyCarrier + 1
      );
      let enemyCarrierCoordinates3 = getEnemyCoordinates(
        positionOfEnemyCarrier + 2
      );
      let enemyCarrierCoordinates4 = getEnemyCoordinates(
        positionOfEnemyCarrier + 3
      );
      let enemyCarrierCoordinates5 = getEnemyCoordinates(
        positionOfEnemyCarrier + 4
      );
      let enemyDestroyerCoordinates2 = getEnemyCoordinates(
        positionOfEnemyDestroyer + 1
      );
      let enemyDestroyerCoordinates3 = getEnemyCoordinates(
        positionOfEnemyDestroyer + 2
      );
      let enemyDestroyerCoordinates4 = getEnemyCoordinates(
        positionOfEnemyDestroyer + 3
      );
      let enemySubmarineCoordinates2 = getEnemyCoordinates(
        positionOfEnemySubmarine + 1
      );
      let enemySubmarineCoordinates3 = getEnemyCoordinates(
        positionOfEnemySubmarine + 2
      );
      let enemyPatrolCoordinates2 = getEnemyCoordinates(
        positionOfEnemyPatrol + 1
      );

      return {
        enemyCarrierCoordinates1,
        enemyCarrierCoordinates2,
        enemyCarrierCoordinates3,
        enemyCarrierCoordinates4,
        enemyCarrierCoordinates5,
        enemyDestroyerCoordinates1,
        enemyDestroyerCoordinates2,
        enemyDestroyerCoordinates3,
        enemyDestroyerCoordinates4,
        enemySubmarineCoordinates1,
        enemySubmarineCoordinates2,
        enemySubmarineCoordinates3,
        enemyPatrolCoordinates1,
        enemyPatrolCoordinates2,
      };
    }

    // initializing enemy ships
    const shipsInfo = positionEnemyShips();
    let enemyCarrier = new enemyCarrierShip(
      shipsInfo.enemyCarrierCoordinates1,
      shipsInfo.enemyCarrierCoordinates2,
      shipsInfo.enemyCarrierCoordinates3,
      shipsInfo.enemyCarrierCoordinates4,
      shipsInfo.enemyCarrierCoordinates5
    );
    console.log(enemyCarrier);
    let enemyDestroyer = new enemyDestroyerShip(
      shipsInfo.enemyDestroyerCoordinates1,
      shipsInfo.enemyDestroyerCoordinates2,
      shipsInfo.enemyDestroyerCoordinates3,
      shipsInfo.enemyDestroyerCoordinates4
    );
    console.log(enemyDestroyer);
    let enemySubmarine = new enemySubmarineShip(
      shipsInfo.enemySubmarineCoordinates1,
      shipsInfo.enemySubmarineCoordinates1,
      shipsInfo.enemySubmarineCoordinates1
    );
    console.log(enemySubmarine);
    let enemyPatrol = new enemyPatrolShip(
      shipsInfo.enemyPatrolCoordinates1,
      shipsInfo.enemyPatrolCoordinates2
    );
    console.log(enemyPatrol);

    positionEnemyShips();
    // function to convert indexes of enemy ship location to coordinates
    function getEnemyCoordinates(number) {
      let digits = splitNumberIntoDigits(number);
      let secondNumber;
      let firstNumber;
      if (number <= 9) {
        firstNumber = 0;
        secondNumber = digits[0];
      } else {
        secondNumber = digits[1];
        firstNumber = digits[0];
      }
      let coordinatesOfEnemy = `${firstNumber},${secondNumber}`;
      return coordinatesOfEnemy;
    }

    //generating random number for enemy ship placement
    function getRandomNumber() {
      const ranges = [
        [0, 5],
        [10, 15],
        [20, 25],
        [30, 35],
        [40, 45],
        [50, 55],
        [60, 65],
        [70, 75],
        [80, 85],
        [90, 95],
      ];

      const range = ranges[Math.floor(Math.random() * ranges.length)];

      const min = range[0];
      const max = range[1];
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      return randomNumber;
    }
    // function to play game on clicks
    function enemyGame() {
      for (let i = 0; i < enemyButtonList.length; i++) {
        const button = enemyButtonList[i];
        button.addEventListener("click", playerClicks);

        enemyEventListeners.push({
          button: button,
          listener: playerClicks,
        });
      }
    }
    let informationText = document.getElementById("informationText");
    let allDestroyed = 0;

    // adding logic when player clicks
    function playerClicks(event) {
      let button = event.target;
      event.target.disabled = true;
      let index = enemyButtonList.indexOf(button);
      if (
        index === positionOfEnemyCarrier ||
        index === positionOfEnemyCarrier + 1 ||
        index === positionOfEnemyCarrier + 2 ||
        index === positionOfEnemyCarrier + 3 ||
        index === positionOfEnemyCarrier + 4
      ) {
        informationText.textContent = "You just hit an enemy ship!";
        enemyCarrier.isHit++;
        enemyButtonList[index].classList.add("hitButton");
        if (enemyCarrier.isHit === 5) {
          console.log("Enemy carrier destroyed");
          allDestroyed++;
        }
      } else if (
        index === positionOfEnemyDestroyer ||
        index === positionOfEnemyDestroyer + 1 ||
        index === positionOfEnemyDestroyer + 2 ||
        index === positionOfEnemyDestroyer + 3
      ) {
        informationText.textContent = "You just hit an enemy ship!";
        enemyDestroyer.isHit++;
        enemyButtonList[index].classList.add("hitButton");
        if (enemyDestroyer.isHit === 4) {
          console.log("Enemy destroyer destroyed");
          allDestroyed++;
        }
      } else if (
        index === positionOfEnemySubmarine ||
        index === positionOfEnemySubmarine + 1 ||
        index === positionOfEnemySubmarine + 2
      ) {
        informationText.textContent = "You just hit an enemy ship!";
        enemySubmarine.isHit++;
        enemyButtonList[index].classList.add("hitButton");
        if (enemySubmarine.isHit === 3) {
          console.log("Enemy submarine destroyed");
          allDestroyed++;
        }
      } else if (
        index === positionOfEnemyPatrol ||
        index === positionOfEnemyPatrol + 1
      ) {
        informationText.textContent = "You just hit an enemy ship!";
        enemyPatrol.isHit++;
        enemyButtonList[index].classList.add("hitButton");
        if (enemyPatrol.isHit === 2) {
          console.log("Enemy patrol boat destroyed");
          allDestroyed++;
        }
      } else {
        enemyButtonList[index].classList.add("missButton");
      }
      if (allDestroyed === 4) {
        finishGameText.textContent = "You won! Congratulations!";
        finishGameDiv.style.display = "flex";
      }
      //wait after player click
      setTimeout(() => {
        computerClicks();
      }, "500");
    }
    // declaring ship hitPoints
    let playerShipDestroyerHit = 0;
    let playerShipCarrierHit = 0;
    let playerShipSubmarineHit = 0;
    let playerShipPatrolHit = 0;
    let allPlayerDestroyedShips = 0;

    const MIN = 0;
    const MAX = 99;
    const totalNumbers = MAX - MIN + 1;
    const usedNumbers = new Set();
    // generating UNIQUE random numbers
    function generateUniqueRandomNumber() {
      if (usedNumbers.size >= totalNumbers) {
        return;
      }

      let newNumber;
      do {
        newNumber = Math.floor(Math.random() * totalNumbers) + MIN;
      } while (usedNumbers.has(newNumber));

      usedNumbers.add(newNumber);

      return newNumber;
    }

    // function when computer attacks player ships
    function computerClicks() {
      let attack = generateUniqueRandomNumber();
      buttonList[attack].classList.add("missButton");
      let playerShipDestroyerIndex1 = convertStringToNumber(dataDestroyer1);
      let playerShipCarrierIndex1 = convertStringToNumber(dataCarrier1);
      let playerShipSubmarineIndex1 = convertStringToNumber(dataSubmarine1);
      let playerShipPatrolIndex1 = convertStringToNumber(dataPatrol1);
      console.log(playerShipCarrierIndex1);
      console.log(playerShipDestroyerIndex1);
      if (
        attack === playerShipDestroyerIndex1 ||
        attack === playerShipDestroyerIndex1 + 1 ||
        attack === playerShipDestroyerIndex1 + 2 ||
        attack === playerShipDestroyerIndex1 + 3
      ) {
        buttonList[attack].style.backgroundColor = "red";
        playerShipDestroyerHit++;
        informationText.textContent = "Enemy just hit your ship!";
        if (playerShipDestroyerHit === 4) {
          console.log("Player ship destroyed!");
          allPlayerDestroyedShips++;
        }
      } else if (
        attack === playerShipCarrierIndex1 ||
        attack === playerShipCarrierIndex1 + 1 ||
        attack === playerShipCarrierIndex1 + 2 ||
        attack === playerShipCarrierIndex1 + 3 ||
        attack === playerShipCarrierIndex1 + 4
      ) {
        buttonList[attack].style.backgroundColor = "red";
        playerShipCarrierHit++;
        informationText.textContent = "Enemy just hit your ship!";
        if (playerShipCarrierHit === 5) {
          allPlayerDestroyedShips++;
        }
      } else if (
        attack === playerShipSubmarineIndex1 ||
        attack === playerShipSubmarineIndex1 + 1 ||
        attack === playerShipSubmarineIndex1 + 2
      ) {
        buttonList[attack].style.backgroundColor = "red";
        playerShipSubmarineHit++;
        informationText.textContent = "Enemy just hit your ship!";
        if (playerShipSubmarineHit === 3) {
          allPlayerDestroyedShips++;
        }
      } else if (
        attack === playerShipPatrolIndex1 ||
        attack === playerShipPatrolIndex1 + 1
      ) {
        buttonList[attack].style.backgroundColor = "red";
        playerShipPatrolHit++;
        informationText.textContent = "Enemy just hit your ship!";
        if (playerShipPatrolHit === 2) {
          allPlayerDestroyedShips++;
        }
      }
      if (allPlayerDestroyedShips === 4) {
        finishGameText.textContent = "You lost. Better luck next time!";
        finishGameDiv.style.display = "flex";
      }
    }

    // convert coordinates to string
    function convertStringToNumber(string) {
      string = string.replace(/\,/g, "");
      string = parseInt(string, 10);
      return string;
    }

    enemyGame();
  }
  computerPlays();
