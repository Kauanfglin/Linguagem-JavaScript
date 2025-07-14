class captain{
    constructor(name,age,flighthours){
        this.name = name;
        this.age = age;
        this.flighthours = flighthours;
    }
}
class SpaceShip{
  constructor(name,crewquantity,captainName,captainAge,captainFlighthours){
    this.name = name;
    this.crewquantity = crewquantity;
    this.captain = new captain(captainName,captainAge,captainFlighthours);
    
    
  }
}
let spaceShip = new SpaceShip("SpaceX",5,"Elon Musk",50,500);
console.log(spaceShip);
