// Estudando Get e Set

class TransportSpaceShip {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }

  set velocity(newVelocity) {
    if (newVelocity >= 80) {
      this.currentVelocity = 80;
    } else {
      this.currentVelocity = newVelocity;
    }
  }

  get velocity() {
    return this.currentVelocity;
  }
}

let spaceShip = new TransportSpaceShip("Nave Espacial");
spaceShip.velocity = 100;

console.log(`Velocidade da nave: ${spaceShip.velocity}`); // Saída: Velocidade da nave: 80
