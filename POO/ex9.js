class Vehicle {
  constructor(model, year) {
    this.model = model;
    this._year = year;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._year;
  }

  set year(newYear) {
    if (newYear > 1900 && newYear <= new Date().getFullYear()) {
      this._year = newYear;
    } else {
      console.log("Ano inválido.");
    }
  }

  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  constructor(model, year, doors) {
    super(model, year);
    this.doors = doors;
  }

  honk() {
    console.log(`${this.model} está buzinando!`);
  }
}

let car = new Car("Fiat Uno", 2010, 4);
car.honk(); // Fiat Uno está buzinando!

console.log(car.age); // idade do carro

car.year = 2025; // Ano inválido
car.year = 2015; // Atualiza

console.log(Vehicle.isVehicle(car)); // true
