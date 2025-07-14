const DoubleVelocity = (velocity,printer) => {
    console.log("Entrei em DoubleVelocity");
    let newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;
  };
  let printer = (velocity) => {
    console.log("A velocidade é: " + velocity);
  }
  
  DoubleVelocity(10,printer);