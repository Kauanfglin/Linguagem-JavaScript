class SpaceShipWeapon{
    constructor(indentifier){
        this.indentifier = indentifier
        this.shotsLeft = 10
    }
    Shoot(){
        if(this.shotsLeft <= 0){
            throw new Error("No shots left!" + this.indentifier)
        }
        else{
            console.log("Shots left: " + this.shotsLeft)
              console.log("BANG")
              this.shotsLeft-=1
        }
      
    }
}
let FenixWeapon = new SpaceShipWeapon(5)
FenixWeapon.Shoot()
console.log(FenixWeapon)

