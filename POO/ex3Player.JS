class Player {
  constructor(name) {
    this._name = name;
    this._score = 0;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    if (value < 0) {
      console.log("Pontuação não pode ser negativa.");
    } else {
      this._score = value;
    }
  }
}
let Player2 = new Player("Maria");
Player.score = 50;
console.log(Player2.score);
Player2.score = -1;