class SpaceShip{
  constructor(name,MaxCrew,MaxRecommendVelocity){
    this.name = name;
    this.MaxCrew = MaxCrew;
    this.MaxRecommendVelocity = MaxRecommendVelocity;
    this.currentVelocity = 0;
  }
  speedUp(aceleration){
    this.currentVelocity += aceleration;
    if(this.currentVelocity > this.MaxRecommendVelocity){
      alert("Velocidade acima da recomendada");
    }
  }
}
class TransportSpaceShip extends SpaceShip{
  speedUp(){
    alert("Transporte espacial não pode acelerar elas aumentam a velocidade em um determinado valor");
    this.currentVelocity += 1;
  }
  
}
let transporteSpaceShip = new TransportSpaceShip("Transporte Espacial",10,100);
transporteSpaceShip.speedUp();
console.log(transporteSpaceShip);