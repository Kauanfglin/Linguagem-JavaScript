class SpaceShip{
  constructor(name,MaxCrew,MaxRecommendedValue){
    this.name = name;
    this.MaxCrew = MaxCrew;
    this.MaxRecommendedValue = MaxRecommendedValue;
    this.CurrentCrew = 0;
  }
  speedUp(aceleration){
    this.CurrentVelocity += aceleration;
    if(this.CurrentVelocity > this.MaxRecommendedValue){
alert("Velocidade acima do permitido");
    }
  }
  
}
class TransportSpacheShip  extends SpaceShip{
constructor(name,MaxCrew,MaxRecommendedValue,MaxLoadWeight){
  super(name,MaxCrew,MaxRecommendedValue);//chama construtor da classe 
  this.MaxLoadWeight = MaxLoadWeight;
  this.CurrentLoadWeight = 0;
}
  speedUp(aceleration){
    aceleration /=2;
alert("Velocidade alterada para " + aceleration);
    super.speedUp(aceleration);
  }
}
let transporteSpaceShip = new TransportSpacheShip("Transporte",5,1000,1000);
console.log(transporteSpaceShip);
transporteSpaceShip.speedUp(100);
