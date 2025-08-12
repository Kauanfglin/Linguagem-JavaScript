class SpaceShip {
  static get desaceleration() {
    return 0.20
  }

  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  }

  speedUp(aceleration) {
    this.currentVelocity += (aceleration * (1 - SpaceShip.desaceleration))
  }
}

let spaceship = new SpaceShip('Nave')
spaceship.speedUp(100)
console.log(spaceship)
