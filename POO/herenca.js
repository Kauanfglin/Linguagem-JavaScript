class SpaceShip{
  constructor(name,maxCrew,maxRecommendedVelocity){
    this.maxCrew = maxCrew;
    this.name = name;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
    
  }
  speedUp(aceleration){
    this.currentVelocity += aceleration
    if(this.currentVelocity > this.maxRecommendedVelocity){
alert("Velocidade máxima excedida")
    }
  }
}
class BattleSpaceShip extends SpaceShip{
  stop(){
    this.currentVelocity = 0
    alert("Recolhendo os Recursos e parando a nave")
    
  }
}
class DiscoverSpaceShip extends SpaceShip{
  stop(){
    this.currentVelocity = 0
    alert("recolhendo equipamento de amostra e parando nave de descoberta")
    
  }
}
let darwin = new DiscoverSpaceShip("darwin",10,100)
let fenix = new BattleSpaceShip("fenix",10,100)
darwin.speedUp(222)
fenix.speedUp(245)
darwin.stop()
fenix.stop()