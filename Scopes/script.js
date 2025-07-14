/*let nave = "Tardis";

function changeNameNave() {
  nave = "Elemental";
}

console.log(nave); // Tardis
changeNameNave();
console.log(nave); // Elemental

*/
/*function startSpaceShipVelocity() {
  let spaceShipVelocity = 0;
  return spaceShipVelocity;
}

 let velocity = startSpaceShipVelocity();
console.log(velocity);
//uma variavel que foi declara na funcao e nao pode ser acessada sera um scope local*/


function SetSpacheShipDetails(){
    let name = "Tardis";
    let velocity = 50;
    let SpacheShipType = "Discovery";
    if(velocity == 50){
      velocity = 100
      name = "Elemental"
       SpacheShipType = "Anthology"
     
    }
    console.log(velocity)
    console.log(name)
    console.log(SpacheShipType)
  }
  SetSpacheShipDetails()