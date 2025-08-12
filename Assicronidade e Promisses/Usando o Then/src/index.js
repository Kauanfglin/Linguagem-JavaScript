const { set } = require("core-js/core/dict")
// Função que retorna uma Promise
const velocityAfter2Seconds = (velocity, aceleration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (aceleration > 0) {
        velocity += aceleration * 2;
        console.log("Nova velocidade: " + velocity);
        resolve(velocity);
      } else {
        reject("Aceleração inválida");
      }
    }, 2000); // espera 2 segundos
  });
};

 
console.log(komodoship.velocity,komodoship.aceleration).then(velocity => {
  
komodoship.velocity = velocity
console.log("Depois de aceleram" + komodoship)

})