class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} fez um som.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // chama o constructor da classe Animal
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} latiu!`);
  }
}

let animal = new Animal("Bicho");
animal.speak(); // Bicho fez um som.

let dog = new Dog("Rex", "Labrador");
dog.speak(); // Rex latiu!
