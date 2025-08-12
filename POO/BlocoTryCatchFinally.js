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
    reload() {
        this.shotsLeft = 10
    }
}
let FenixWeapon = new SpaceShipWeapon(5)
console.log(FenixWeapon)

try{
FenixWeapon.Shoot()
FenixWeapon.Shoot()
FenixWeapon.Shoot()

} catch(e){
    console.error(e.message)//pegando o error do throw  com o message
    FenixWeapon.reload()
    console.log("Weapon reloaded")
}finally {
    console.log("Final state of the weapon: ", FenixWeapon)
}

