class SpaceShip{
    static get DECELERATION_RATE() {
        return 0.05;
}
constructor(name,crewQuantity){
    this.name = name;
    this.crewQuantity = crewQuantity;
this.currentSpeed = 0;
}
speedUp(acceleration) {
   this.currentSpeed += acceleration *(1 - SpaceShip.DECELERATION_RATE);
}
}