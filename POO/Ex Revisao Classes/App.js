class App {
  constructor() {
    this.spaceShips = null;
  }

  start() {
    let chooseOption;
    do {
      chooseOption = this.showInitialMenu();
      this.redirectFunction(chooseOption);
    } while (chooseOption !== "3");

    this.printExit(); // chamada correta após sair do loop
  }

  showInitialMenu() {
    return prompt("O que você deseja fazer?\n1 - Acelerar nave\n2 - Cadastrar nave\n3 - Sair");
  }

  redirectFunction(option) {
    switch (option) {
      case "1":
        this.accelerateSpaceShip();
        break;
      case "2":
        this.enrollSpaceShips();
        break;
    }
  }

  enrollSpaceShips() {
    let spaceShipName = prompt("Digite o nome da nave:");
    let crewQuantity = parseInt(prompt("Digite o número de tripulantes:"));
    let spaceshipKind = this.askForSpaceShipKind();

    if (spaceshipKind === "1") {
      let weaponQuantity = parseInt(prompt("Digite o número de armas:"));
      this.spaceShips = new BattleSpaceShip(spaceShipName, crewQuantity, weaponQuantity);
    } else {
      let seatsQuantity = parseInt(prompt("Digite o número de assentos:"));
      this.spaceShips = new TransportSpaceShip(spaceShipName, crewQuantity, seatsQuantity);
    }
  }

  askForSpaceShipKind() {
    let chooseOption;
    do {
      chooseOption = prompt("Escolha o tipo de nave:\n1 - Nave de Batalha\n2 - Nave de Transporte");
    } while (!["1", "2"].includes(chooseOption));
    return chooseOption;
  }

  accelerateSpaceShip() {
    if (!this.spaceShips) {
      alert("Nenhuma nave cadastrada ainda.");
      return;
    }
    let acceleration = parseFloat(prompt("Digite o valor da aceleração:"));
    this.spaceShips.speedUp(acceleration);
  }

  printExit() {
    if (!this.spaceShips) {
      alert("Nenhuma nave foi registrada.");
      return;
    }
    let finalMessage = `A nave ${this.spaceShips.name} está a ${this.spaceShips.currentVelocity.toFixed(2)} de velocidade.`;
    alert(finalMessage);
    console.log(finalMessage);
  }
}
